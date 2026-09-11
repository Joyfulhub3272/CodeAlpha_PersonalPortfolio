const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const subject = `Portfolio Contact from ${name}`;

        const body = `Hello Joyful,

My name is ${name}.
My email is ${email}.

Message:
${message}`;

        const mailtoLink =
            `mailto:adeleyejoyful@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    });
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }

});

navLinks.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});

