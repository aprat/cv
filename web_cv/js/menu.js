/**
 * Created by adriaprat on 10/7/16.
 */

var navbar = document.getElementById("navbar");
var distance = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 90;

window.addEventListener("scroll", function() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > distance){
        navbar.className = "navbar fix-navbar";
    } else {
        navbar.className = "navbar navbar-position";
    }
},false);

var navbarItems = document.getElementsByClassName('navbar-item');
for (var i = 0; i < navbarItems.length; i++){
    navbarItems[i].addEventListener('click', function (event){

        deleteActiveClass();

        if (Modernizr.classList){
            this.classList.add('active');
        } else {
            this.className += ' active';
        }
        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        if (sectionToGo.length > 1) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

/* Smooth scroll */
function getElementByIdAndScroll(name) {
    var element;
    if (name == '') {
        element = document.getElementsByClassName('header')[0];
    } else {
        element = document.getElementById(name);
    }
    scrollToElement(element);
}

function scrollToElement(element) {
    var jump = parseInt(element.getBoundingClientRect().top * .3)-10;
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;

    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);
        setTimeout(function () {
            scrollToElement(element);
        }, "60");
    } else {
        element.lastJump = null;
    }
}

function deleteActiveClass() {
    for(var i = 0; i < navbarItems.length; i++){
        if (Modernizr.classList) {
            navbarItems[i].classList.remove('active');
            navbarItems[i].classList.remove('active-reverse');
        } else {
            navbarItems[i].className = "navbar-item";
            navbarItems[i].className = "navbar-item";
        }
    }
}