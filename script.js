// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Sakshi's Portfolio");
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dynamic Year in Footer
const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Sakshi Kumari | All Rights Reserved`;
