/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");
}


/* =========================
   FAQ
========================= */

function toggleFaq(button) {

    const item = button.parentElement;

    const allItems = document.querySelectorAll(".faq-item");

    allItems.forEach(function (otherItem) {

        if (otherItem !== item) {
            otherItem.classList.remove("active");
        }

    });

    item.classList.toggle("active");
}


/* =========================
   TOAST MESSAGE
========================= */

function showMessage() {

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}


/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document.querySelectorAll(".reveal").forEach(function (element) {

    observer.observe(element);

});


/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
function playRadio() {
    const radio = document.getElementById("radioAudio");
    const button = document.getElementById("radioBtn");

    if (radio.paused) {
        radio.play();
        button.innerHTML = "⏸️ Radio";
    } else {
        radio.pause();
        button.innerHTML = "📻 Radio";
    }
}