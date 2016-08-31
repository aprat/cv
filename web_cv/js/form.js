/**
 * Created by adriaprat on 10/7/16.
 */
var inputOther = document.createElement("input");
inputOther.setAttribute("id","other");
inputOther.setAttribute("type", "text");
inputOther.setAttribute("name", "other");
inputOther.setAttribute("placeholder", "How?");
inputOther.setAttribute("required", "");

var foundRadio = document.getElementById("found-about-me-4");
foundRadio.addEventListener('click', function () {
    if (this.value == 'Other') {
        this.parentNode.appendChild(inputOther);
    } else if(document.getElementById("other")) {
        this.parentNode.removeChild(inputOther);
    }
});

var form = document.getElementById("form-contact");
form.addEventListener("submit", function (event) {
    var inputName = document.getElementById("full-name");
    var emailInput = document.getElementById("email");
    var numberInput = document.getElementById("contact-number");
    var foundRadioInput = {
        "found_about_me_1": document.getElementById("found-about-me-1"),
        "found_about_me_2": document.getElementById("found-about-me-2"),
        "found_about_me_3": document.getElementById("found-about-me-3"),
        "found_about_me_4": document.getElementById("found-about-me-4")
    };
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    if (inputName.checkValidity() == false) {
        inputName.focus();
        inputName.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        inputName.style.borderColor = "green";
    }

    if (emailInput.checkValidity() == false) {
        emailInput.focus();
        emailInput.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        emailInput.style.borderColor = "green";
    }

    if (numberInput.checkValidity() == false) {
        numberInput.focus();
        numberInput.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (isNaN(numberInput.value)){
        alert("Contact number is not valid.");
        numberInput.focus();
        numberInput.style.borderColor = "red";
        event.preventDefault();
    } else {
        numberInput.style.borderColor = "green";
    }

    if (foundRadioInput.found_about_me_1.checkValidity() == false) {
        alert("How did you found about me?");
        event.preventDefault();
        return false;
    } else if(document.getElementById("other")) {
        var otherInput = document.getElementById("other");
        if (otherInput.checkValidity() == false) {
            otherInput.focus();
            otherInput.style.borderColor = "red";
            event.preventDefault();
            return false;
        } else {
            otherInput.style.borderColor = "green";
        }
    }

    if (subjectInput.checkValidity() == false) {
        subjectInput.focus();
        subjectInput.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        subjectInput.style.borderColor = "green";
    }

    if (messageInput.checkValidity() == false) {
        messageInput.focus();
        messageInput.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        var words = messageInput.value.match(/\S+/g).length;
        if (words > 150) {
            alert("Message has a maximum of 150 words.");
            messageInput.focus();
            messageInput.style.borderColor = "red";
            event.preventDefault();
            return false;
        }else {
            messageInput.style.borderColor = "green";
        }
    }


    // if (document.getElementById("apellidos") &&
    //     document.getElementById("apellidos").checkValidity() == false) {
    //     alert("Escribe tu nombre.");
    //     document.getElementById("apellidos").focus();
    //     event.preventDefault();
    //     return false;
    // }
    //
    // if (misionesRadioInput.mision1.checkValidity() == false) {
    //     alert("Selecciona una mision.");
    //     event.preventDefault();
    //     return false;
    // }

    // submitInput.appendChild(loadingButton);
    event.preventDefault();
    return false;
});