/* =========================================================
   FSE WEBSITE INTERACTIONS
========================================================= */


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {

    mainNav.classList.toggle("active");

});


const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   STAGGER DEPARTMENT / CARD ANIMATION
========================================================= */

const animatedGroups = [

    ".program-feature",
    ".department",
    ".impact-card",
    ".contact-card",
    ".faq-item"

];


animatedGroups.forEach(selector => {

    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {

        element.style.transitionDelay =
            `${Math.min(index * 0.07, 0.45)}s`;

    });

});


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const alreadyOpen = item.classList.contains("open");


        faqItems.forEach(otherItem => {

            otherItem.classList.remove("open");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        if (!alreadyOpen) {

            item.classList.add("open");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================================
   SMOOTH ANCHOR FALLBACK
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* =========================================================
   SCHEDULE ROW MOTION
========================================================= */

const scheduleRows =
    document.querySelectorAll(".schedule-row");


scheduleRows.forEach((row, index) => {

    row.addEventListener("mouseenter", () => {

        row.style.zIndex = "5";

    });


    row.addEventListener("mouseleave", () => {

        row.style.zIndex = "";

    });

});


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroImage =
    document.querySelector(".hero-image img");


window.addEventListener("scroll", () => {

    if (!heroImage) {
        return;
    }


    const scrollPosition =
        window.scrollY;


    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.05) translateY(${scrollPosition * 0.08}px)`;

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navigationLinks =
    document.querySelectorAll(".main-nav a");


const activeObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                    });


                    const activeLink =
                        document.querySelector(
                            `.main-nav a[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add("active");

                    }

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    activeObserver.observe(section);

});


/* =========================================================
   MOUSE-BASED CARD LIGHT EFFECT
========================================================= */

const cards = document.querySelectorAll(
    ".program-feature, .impact-card, .contact-card"
);


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        card.style.backgroundImage =
            `radial-gradient(
                220px circle at ${x}px ${y}px,
                rgba(255,255,255,.12),
                transparent 60%
            )`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.backgroundImage = "";

    });

});


/* =========================================================
   YEAR
========================================================= */

const yearElements =
    document.querySelectorAll("[data-year]");


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


console.log(
    "Future Scholars Ethiopia website loaded successfully."
);