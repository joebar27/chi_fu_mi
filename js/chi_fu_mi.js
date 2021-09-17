// affichage du message de bienvenue
alert("Bienvenue sur le jeu du \"Pierre - Feuille - Ciseaux\"");

// capture du prénom du candidat
var userName = prompt("Merci d'entré votre Prénom :");

// message de bienvenue incluant son prénom
alert("Bienvenue " + userName + ", nous allons commencé la partie");

// capture du choix du candidat
var userChoice = prompt("Veuillez choisir entre \"pierre\" \"feuille\" \"ciseaux\"");

// message de confirmation du choix du candidat
alert("Vous avez choisi \"" + userChoice + "\".\nC\'est maintenant au tour de l\'ordinateur de jouer.");

// conception du choix de l'ordinateur
var computerChoice = Math.random();

if (computerChoice <= 0.33){
    alert("L\'ordinateur a choisi \"Pierre\"")
}
else if(computerChoice > 0.33 && computerChoice <= 0.66){
    alert("L\'ordinateur a choisi \"Feuille\"")
}
else {
    alert("L\'ordinateur a choisi \"Ciseaux\"")
}