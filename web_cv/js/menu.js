/**
 * Created by adriaprat on 10/7/16.
 */

var wrap = $("#wrap");
var navbar = $("#navbar");

wrap.on("scroll", function() {
    if (this.scrollTop > 147) {
        navbar.removeClass("navbar-position");
        navbar.addClass("fix-navbar");
    } else {
        navbar.removeClass("fix-navbar");
        navbar.addClass("navbar-position");
    }
});