const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});


/* Current year */
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


/* Last modified date */
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;