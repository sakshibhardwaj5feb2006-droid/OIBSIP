window.addEventListener("load", () => {
    console.log("Welcome to Sakshi Kumari Portfolio");
});

/* Footer Year */

document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} Sakshi Kumari | All Rights Reserved`;

/* Image Slider */

const profilePic =
document.getElementById("profilePic");

const photos = [
    "babe1.jpeg",
    "babe2.jpeg"
];

let i = 0;

setInterval(() => {

    profilePic.style.opacity = "0";

    setTimeout(() => {

        i = (i + 1) % photos.length;

        profilePic.src = photos[i];

        profilePic.style.opacity = "1";

    }, 400);

}, 3000);
