const enContent = {
    churchHeading: "Church",
    churchContent: "The wedding ceremony will take place at the beautiful [Church Name], located in the heart of [City].",
    locationHeading: "Location",
    locationContent: "The reception will be held at [Venue Name], a serene location surrounded by nature.",
    honeymoonHeading: "Honeymoon",
    honeymoonContent: "We are excited to spend our honeymoon in [Destination], exploring its rich culture and scenic views."
};

const itContent = {
    churchHeading: "Chiesa",
    churchContent: "La cerimonia di matrimonio si terrà nella bellissima [Nome della Chiesa], situata nel cuore di [Città].",
    locationHeading: "Posizione",
    locationContent: "Il ricevimento si terrà presso [Nome della sede], una location serena circondata dalla natura.",
    honeymoonHeading: "Luna di miele",
    honeymoonContent: "Siamo entusiasti di trascorrere la nostra luna di miele a [Destinazione], esplorando la sua ricca cultura e i suoi panorami."
};

document.getElementById("en").addEventListener("click", () => {
    setLanguage(enContent);
});

document.getElementById("it").addEventListener("click", () => {
    setLanguage(itContent);
});

function setLanguage(content) {
    document.getElementById("church-heading").textContent = content.churchHeading;
    document.getElementById("church-content").textContent = content.churchContent;
    document.getElementById("location-heading").textContent = content.locationHeading;
    document.getElementById("location-content").textContent = content.locationContent;
    document.getElementById("honeymoon-heading").textContent = content.honeymoonHeading;
    document.getElementById("honeymoon-content").textContent = content.honeymoonContent;
}

// Default to Italian on page load
window.onload = () => {
    setLanguage(itContent);
};
