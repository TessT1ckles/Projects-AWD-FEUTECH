var popups = document.getElementsByClassName("popup");

document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        for (var i = 0; i < popups.length; i++) {
            popups[i].style.transition = "opacity 0.5s ease-in-out";
            popups[i].style.opacity = "0";
        }
    }, 2000);
    setInterval(function() {
        for (var i = 0; i < popups.length; i++) {
            popups[i].style.display = "none";
        }
    }, 2500);
});