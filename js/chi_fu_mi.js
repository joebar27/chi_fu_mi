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

// conception de la fonction du choix de l'ordinateur
var randChoice = Math.random();
var pcChoice;

function computerChoice(randChoice){
    if (randChoice <= 0.33){
        return pcChoice = "pierre";        
    }
    else if(randChoice > 0.33 && randChoice <= 0.66){
        return pcChoice = "feuille";
    }
    else {
        return pcChoice = "ciseaux";
    }
}

// affichage de ce que l'ordinateur a choisi
alert("L\'ordinateur a choisi \"" + computerChoice(randChoice) + "\"")

// comparaison des choix ordi/joueur
var userGameWin = 0;
var computerGameWin = 0;

// comparaison de match nul
if (computerChoice === userChoice.toLocaleLowerCase()){
    alert("Il y a match nul");
}
// comparaison des possibilités de gain de l'ordinateur
else if ((computerChoice === "pierre" && userChoice.toLocaleLowerCase() === "ciseaux") 
        || (computerChoice === "feuille" && userChoice.toLocaleLowerCase() === "pierre") 
        || (computerChoice === "ciseaux" && userChoice.toLocaleLowerCase() === "feuille")){
    computerGameWin += 1;
    alert("Vous avez perdu");
}
//  sinon gain du joueur
else{
    userGameWin += 1;
    alert("Vous avez gagné 1 manche");
}
