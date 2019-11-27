var gotoLink = "";
var shortCode = "63901";
var keyword = "HELLO";
document.addEventListener('DOMContentLoaded', function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        console.log("Windows Phone");
        document.getElementById("not_supported").style.display = 'inline';
    } else if (/android/i.test(userAgent)) {
        console.log("Android");
        document.getElementById("vibes_tap2join_box").style.display = 'inline';
        gotoLink = "sms:" + shortCode + "?body=" + keyword;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        console.log("iOS");
        document.getElementById("vibes_tap2join_box").style.display = 'inline';
        gotoLink = "sms:" + shortCode + "&body=" + keyword;
    } else {
        console.log("unknown");
        document.getElementById("desktop_fallback").style.display = 'inline';
    }
}, false);
var openMsg = function() {
    console.log("openMsg");
    window.location.replace(gotoLink);
    return false;
}

