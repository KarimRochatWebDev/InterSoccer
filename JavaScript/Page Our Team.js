/* Choose canton buttons + display coaches */

/*PARTIE 1 : FAIRE QUE LES BOUTONS DISPLAY SEULEMENT LE CANTON VOULU*/
//Je récupère tous les buttons et toutes les sections
let boutons = document.getElementsByClassName("cantonInput");
let sections = document.getElementsByClassName("cantonSection");

//Pour chaque input, je lui donne l'eventListener click et la fonction à exécuter
for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", displayCanton);
}

function displayCanton() {
    //Je récupère la value de l'input
    let ValeurDuBouton = this.getAttribute("value");
    //console.log("Input cliqué : " + this.getAttribute("id"));
    //Je consulte chaque section et ne retient que celle dont la classe a le même nom que la valeur du bouton
    for (const section of sections) {
        let ValeurDeLaSection = section.getAttribute("id");
        if (ValeurDeLaSection == ValeurDuBouton) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}



/*PARTIE 2 : AJOUTER ONCLICK SUR LES EXCERPT DES COACHES*/
let coaches = document.querySelectorAll('div[data-post-id]');
coaches.forEach((coach) => {
    let dataPostId = coach.getAttribute("data-post-id");
    let ExcerptDeLaClasse = "post-" + dataPostId;
    let urlCoach = document.querySelector("." + ExcerptDeLaClasse + " div:nth-child(2) div h4 a");
    coach.style.backgroundColor = "#1b1a1a";
    coach.style.cursor = "pointer";
    coach.style.height = "500px";
    coach.onclick = function() {
        window.open(urlCoach, '_self').focus();
    }
});