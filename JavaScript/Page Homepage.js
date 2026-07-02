/* Translate Live Activities */
if (getPageURL.includes("/fr/")) {
	document.getElementById("LiveActivitiesEN").style.display = "none";
	document.getElementById("LiveActivitiesDE").style.display = "none";
	document.getElementById("LiveActivitiesFR").style.display = "block";
} else if (getPageURL.includes("/de/")) {
	document.getElementById("LiveActivitiesEN").style.display = "none";
	document.getElementById("LiveActivitiesDE").style.display = "block";
	document.getElementById("LiveActivitiesFR").style.display = "none";
} else {
	document.getElementById("LiveActivitiesEN").style.display = "block";
	document.getElementById("LiveActivitiesDE").style.display = "none";
	document.getElementById("LiveActivitiesFR").style.display = "none";
}

/* Endorsements JS */
/*Opération 1 : modifier les textes des testimonals*/

// Je récupère tous les textes des testimonials
const testimonials = document.getElementsByClassName("elementor-testimonial__text");

// Et pour chaque testimonial, je...
for (let i = 0; i < testimonials.length; i++) { // Pour créer le tag paragraphe à ajouter dans la classe elementor-testimonial__text
    const paragraphe = document.createElement("p");

    // Je récupère le contenu du testimonial en cours
    const testimonialText = testimonials[i].textContent;

    // Pour coller le contenu du testimonial à l'intérieur d'un nouveau noeud et on ajoute ce noeud au paragraphe créé précédemment
    const node = document.createTextNode(testimonialText);
    paragraphe.appendChild(node);

    // On vide le contenu existant, sinon il sera doublé
    testimonials[i].innerHTML = "";

    // Et là c'est pour ajouter ce nouveau paragraphe à l'intérieur de la classe elementor-testimonial__text
    const testimonialAvecParagraphe = testimonials[i].appendChild(paragraphe);
}

/*Opération 2 : trier chaque box de testimonials par ordre de hauteur*/
// // Je récupère tous les boxes de testimonials
// const testimonialsBoxes = document.getElementsByClassName("swiper-slide");

// // Je récupère le parent de tous les boxes de testimon  ials
// const testimonialsParent = testimonialsBoxes[0]?.parentElement;

// console.log ("testimonialsParent : " + testimonialsParent);

// // Je trie chaque box de testimonials par ordre de hauteur et je les ajoute au parent
// if (testimonialsParent) {
//     const testimonialsHeights = Array.from(testimonialsBoxes); // Je transforme les boxes de testimonials en un tableau
//     testimonialsHeights.sort((a, b) => a.offsetHeight - b.offsetHeight); // Je trie chaque box de testimonials par ordre de hauteur
//     testimonialsHeights.forEach(item => testimonialsParent.appendChild(item)); // J'ajoute chaque box de testimonials au parent. Problème, les anciens testimonials non-triés sont toujours là, il faut les supprimer
// 	testimonialsBoxes.remove();
//     console.log("Oui, le parent existe");
// } else {
//     console.log("Non, le parent n'existe pas");
// }