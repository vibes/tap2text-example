//initialize destination url variable
var gotoLink = "";

//replace 12345 with your short code
var shortCode = "12345";

//replace KEYWORD with your keyword
var keyword = "KEYWORD";

document.addEventListener('DOMContentLoaded', function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    //Windows phone is not supported. Display not supported message
    if (/windows phone/i.test(userAgent)) {
        document.getElementById("not_supported").style.display = 'inline';

    //Redirect to SMS url with Android syntax
    } else if (/android/i.test(userAgent)) {
        document.getElementById("vibes_tap2join_box").style.display = 'inline';
        gotoLink = "sms:" + shortCode + "?body=" + keyword;
        window.location.replace(gotoLink);

    //Redirect to SMS url  with iOS syntax
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.getElementById("vibes_tap2join_box").style.display = 'inline';
        gotoLink = "sms:" + shortCode + "&body=" + keyword;
        window.location.replace(gotoLink);

    //No mobile device detected. Display desktop fallback message
    } else {
        document.getElementById("desktop_fallback").style.display = 'inline';
    }
}, false);


