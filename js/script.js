let citationGaucheDebut = ['Je suis','Mon secret','Nous sommes', 'Un bug', 'Une erreur'];
let citationGaucheMilieu = ['doué pour','je cherche','tous',"n'est jamais",'de'];
let citationGaucheFin = ['lire les gens.','le pire en eux.','les humains.',"qu'une erreur.",'pensée.'];

let citationDroiteDebut = ['Peut-être','Toute','Je','Il'];
let citationDroiteMilieu = ['que les','relation est une','vais réparer','va'];
let citationDroiteFin = ['guerres ne sont pas faites pour être gagnées.','lutte de pouvoir.','le monde.'];

let citationgauche = document.getElementById('citation-gauche');
let citationdroite = document.getElementById('citation-droite');

let citationpara = document.getElementById('citation-para');
let paracitation = document.getElementById('para-citation');

let reponse = document.getElementById('nombre');
let reponse1 = document.getElementById('nombre1');

let monRegexNombre = /^\d+$/;
let monRegexLimite = /^[1-5]$/;

function maCitationGauche() {

    let monErreur = document.getElementById('erreur');

    while (citationpara.firstChild) {
        citationpara.removeChild(citationpara.firstChild);
    }
    if (reponse.value.trim() == "") {
        reponse.style.borderColor = "red";
        reponse.style.borderWidth = "2px";
        monErreur.innerText = "Le champ est obligatoire."
        maCitationGauche.preventDefault();
    } else if (monRegexNombre.test(reponse.value) == false) {
        reponse.style.borderColor = "red";
        reponse.style.borderWidth = "2px";
        monErreur.innerText = "Le champ doit comporter un chiffre.";
        maCitationGauche.preventDefault();
    } else if (monRegexLimite.test(reponse.value) == false) {
        reponse.style.borderColor = "red";
        reponse.style.borderWidth = "2px";
        monErreur.innerText = "Le champ doit comporter un chiffre entre 1 et 5 !";
        maCitationGauche.preventDefault();
    } else {
        reponse.style.borderColor = "black";
        reponse.style.borderWidth = "2px";
        monErreur.innerText = "";
    }
    for (i = 0;i<reponse.value;i++) {
        let randomNumber = Math.floor(Math.random() * (citationGaucheDebut.length));
        let randomNumber2 = Math.floor(Math.random() * (citationGaucheMilieu.length));
        let randomNumber3 = Math.floor(Math.random() * (citationGaucheFin.length));
        let text = document.createElement("p");
        text.innerText = (citationGaucheDebut[randomNumber] + " " + citationGaucheMilieu[randomNumber2] + " " + citationGaucheFin[randomNumber3]);
        document.getElementById('citation-para').appendChild(text);
    }

}

function maCitationDroite() {

    let monErreur = document.getElementById('erreur1');

    while (paracitation.firstChild) {
        paracitation.removeChild(paracitation.firstChild);
    }
    if (reponse1.value.trim() == "") {
        reponse1.style.borderColor = "red";
        reponse1.style.borderWidth = "2px";
        monErreur.innerText = "Le champ est obligatoire.";
        maCitationDroite.preventDefault();
    } else if (monRegexNombre.test(reponse1.value) == false) {
        reponse1.style.borderColor = "red";
        reponse1.style.borderWidth = "2px";
        monErreur.innerText = "Le champ doit comporter un chiffre.";
        maCitationDroite.preventDefault();
    } else if (monRegexLimite.test(reponse1.value) == false) {
        reponse1.style.borderColor = "red";
        reponse1.style.borderWidth = "2px";
        monErreur.innerText = "Le champ doit comporter un chiffre entre 1 et 5 !.";
        maCitationDroite.preventDefault();
    } else {
        reponse1.style.borderColor = "black";
        reponse1.style.borderWidth = "2px";
        monErreur.innerText = "";
    }
    for (i = 0;i<reponse1.value;i++) {
        let randomNumber4 = Math.floor(Math.random() * (citationDroiteDebut.length));
        let randomNumber5 = Math.floor(Math.random() * (citationDroiteMilieu.length));
        let randomNumber6 = Math.floor(Math.random() * (citationDroiteFin.length));
        let text = document.createElement("p");
        text.innerText = (citationDroiteDebut[randomNumber4] + " " + citationDroiteMilieu[randomNumber5] + " " + citationDroiteFin[randomNumber6]);
        document.getElementById('para-citation').appendChild(text);
    }
}

reponse.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        maCitationGauche();
    }
})

reponse1.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        maCitationDroite();
    }
})

document.getElementById('bouton').addEventListener('click', maCitationGauche);
document.getElementById('bouton2').addEventListener('click', maCitationDroite);