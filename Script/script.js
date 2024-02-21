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

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animated-section");

    function isInViewport(element, buffer = 500) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -buffer &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    // Initial check in case some sections are already in the viewport on page load
    handleScroll();
});