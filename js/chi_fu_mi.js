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
var computerChoice;
var resultChoice = Math.random();

// condition du choix de la pierre sur les premier 33% du random
if (resultChoice <= 0.33){
    computerChoice = "pierre";
    // message pour annoncé le choix de la pierre par l'ordinateur
    alert("L\'ordinateur a choisi \"" + computerChoice + "\"");
}
// condition du choix de la feuille entre les 33% et 66% du random
else if(resultChoice > 0.33 && resultChoice <= 0.66){
    computerChoice = "feuille";
    // message pour annoncé le choix de la feuille par l'ordinateur
    alert("L\'ordinateur a choisi \"" + computerChoice + "\"");
}
// condition choix des ciseaux pour les derniers 33% du random
else {
    computerChoice = "ciseaux";
    // message pour annoncé le choix du ciseaux par l'ordinateur
    alert("L\'ordinateur a choisi \"" + computerChoice + "\"");
}

// comparaison des choix ordi/joueur
var userGameWin = 0;
var computerGameWin = 0;

// comparaison de match nul
if (computerChoice === userChoice.toLocaleLowerCase()){
    // message en cas de match nul
    alert("Il y a match nul");
}
// comparaison des possibilités de gain de l'ordinateur
else if ((computerChoice === "pierre" && userChoice.toLocaleLowerCase() === "ciseaux") 
        || (computerChoice === "feuille" && userChoice.toLocaleLowerCase() === "pierre") 
        || (computerChoice === "ciseaux" && userChoice.toLocaleLowerCase() === "feuille")){
    computerGameWin += 1;
    // message pour annoncé la défaite
    alert("Vous avez perdu");
}
//  sinon gain du joueur
else{
    userGameWin += 1;
    // message pour annoncé le gain
    alert("Vous avez gagné 1 manche");
}
