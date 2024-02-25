let prevScrollPos = window.pageYOffset;
let scrollEnabled = true;

window.onscroll = function () {
    if (scrollEnabled) {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            document.getElementById("main-header").style.top = "0";
        } else {
            document.getElementById("main-header").style.top = "-100px"; // Adjust this value based on your header's height
        }

        prevScrollPos = currentScrollPos;
    }
};

const navMenuBtn = document.getElementById("navMenuBtn");
const menu = document.getElementById("menu");

navMenuBtn.addEventListener('click', function () {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

    // Toggle scrollEnabled to enable/disable the scroll event
    scrollEnabled = !scrollEnabled;
});