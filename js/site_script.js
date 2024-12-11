// Define the list of partners
const partners = [
    { src: "images/partner-bustour.png", alt: "Partner Bus Tours" },
    { src: "images/partner-cabinrental.png", alt: "Partner Cabin Rental" },
    { src: "images/partner-campingadv.png", alt: "Partner Camping Adventure" },
    { src: "images/partner-collegetours.png", alt: "Partner College Tours" },
    { src: "images/partner-rentalbike.png", alt: "Partner Bike Rentals" },
    { src: "images/partner-tourgroup.png", alt: "Partner Tour Group" }
];

// Select the existing <ul> by its ID
const ul = document.getElementById("partners");

// Create and append list items
partners.forEach(partner => {
    const li = document.createElement("li");
    li.classList.add("partner");

    const img = document.createElement("img");
    img.src = partner.src;
    img.alt = partner.alt;

    li.appendChild(img);
    ul.appendChild(li);
});
