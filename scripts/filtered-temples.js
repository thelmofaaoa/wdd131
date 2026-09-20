const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Three additional temples
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-516528-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 110000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-lds-105464-wallpaper.jpg"
    },
    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "1958, April, 20",
        area: 44517,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton-new-zealand-temple-lds-104531-wallpaper.jpg"
    }
];

const templeContainer = document.querySelector("#temple-container");

function displayTemples(templeList) {
    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("article");
        card.className = "temple-card";

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

function getTempleYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}

function showHome() {
    displayTemples(temples);
}

function showOld() {
    displayTemples(
        temples.filter((temple) => getTempleYear(temple) < 1900)
    );
}

function showNew() {
    displayTemples(
        temples.filter((temple) => getTempleYear(temple) > 2000)
    );
}

function showLarge() {
    displayTemples(
        temples.filter((temple) => temple.area > 90000)
    );
}

function showSmall() {
    displayTemples(
        temples.filter((temple) => temple.area < 10000)
    );
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    showHome();
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();
    showOld();
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    showNew();
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    showLarge();
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    showSmall();
});

document.querySelector("#menu").addEventListener("click", () => {
    const navigation = document.querySelector("#navigation");
    navigation.classList.toggle("open");
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;

displayTemples(temples);