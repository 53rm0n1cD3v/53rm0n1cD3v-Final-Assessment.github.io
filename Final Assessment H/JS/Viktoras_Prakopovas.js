document.addEventListener("DOMContentLoaded", () => {

    /*******************************
     * NAVBAR SMOOTH SCROLLING
     *******************************/
    document.querySelectorAll('.Navbar a').forEach(link => {
        link.addEventListener('click', function (event) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /*******************************
     * BACKGROUND VIDEO FADE-IN
     *******************************/
    document.body.classList.remove("fade-out");

    /*******************************
     * SLIDESHOW (WORKING VERSION)
     *******************************/
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slide");

    function showSlides(n) {
        if (!slides || slides.length === 0) return;

        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    showSlides(slideIndex);

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    /*******************************
     * POPUP CONTACT FORM
     *******************************/
    const popup = document.getElementById("PopupForm");
    const openBtn = document.getElementById("OpenPopupBtn");
    const closeBtn = document.getElementById("ClosePopupBtn");
    const stickyBtn = document.getElementById("StickyContactBtn");

    if (openBtn && popup) {
        openBtn.addEventListener("click", () => popup.style.display = "block");
    }

    if (closeBtn && popup) {
        closeBtn.addEventListener("click", () => popup.style.display = "none");
    }

    if (stickyBtn && popup) {
        stickyBtn.addEventListener("click", () => popup.style.display = "block");
    }

    window.addEventListener("click", (event) => {
        if (event.target === popup) popup.style.display = "none";
    });

    /*******************************
     * FORM VALIDATION (Main form)
     *******************************/
    const contactForm = document.getElementById("ContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const fields = ["Name", "Email", "Phone", "Message"];
            for (let id of fields) {
                const el = document.getElementById(id);
                if (!el || el.value.trim() === "") {
                    alert("Please fill in all fields before submitting.");
                    event.preventDefault();
                    return;
                }
            }
        });
    }

    /*******************************
     * FORM VALIDATION (Popup form)
     *******************************/
    const popupForm = document.getElementById("PopupContactForm");
    if (popupForm) {
        popupForm.addEventListener("submit", function(event) {
            const fields = ["PopupName", "PopupEmail", "PopupPhone", "PopupMessage"];
            for (let id of fields) {
                const el = document.getElementById(id);
                if (!el || el.value.trim() === "") {
                    alert("Please fill in all fields before submitting.");
                    event.preventDefault();
                    return;
                }
            }
        });
    }
});
