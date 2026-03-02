// Sélectionne toutes les sections
const sections = document.querySelectorAll("section");

// Fonction pour révéler la section
function revealSections() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top; // Position par rapport au haut de la fenêtre
        const windowHeight = window.innerHeight;         // Hauteur de la fenêtre

        if(top < windowHeight - 100) { // Si la section est visible
            section.style.opacity = 1;      // Rendre visible
            section.style.transform = "translateY(0)"; // Remettre en place
        }
    });
}

// Initialisation : section invisible
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)"; // Décalée vers le bas
    section.style.transition = "all 0.6s ease-out"; // Animation douce
});

// Déclencher l'effet au scroll
window.addEventListener("scroll", revealSections);

// Déclencher l'effet au chargement au cas où certaines sections sont déjà visibles
window.addEventListener("load", revealSections);