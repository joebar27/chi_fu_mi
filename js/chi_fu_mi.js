//---------------------------------DECLARATION DES VARIABLES---------------------------------------

// variable pour la fonction du choix de l'ordinateur
var randChoice = Math.random();
var pcChoice = computerChoice(randChoice);
// variable pour la fonction de comparaison des choix ordi/joueur
var userGameWin = 0;
var computerGameWin = 0;

//---------------------------------CONCEPTION DES FONCTIONS---------------------------------------

// fonction du choix de l'ordinateur
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

// fonction de comparaison des choix ordi/joueur
function compareChoice(pcChoice, userChoice){
    // comparaison de match nul
    if (pcChoice === userChoice.toLocaleLowerCase()){
        alert("Il y a match nul");
    }
    // comparaison des possibilités de gain de l'ordinateur
    else if ((computerChoice(randChoice) === "pierre" && userChoice.toLocaleLowerCase() === "ciseaux") 
            || (computerChoice(randChoice) === "feuille" && userChoice.toLocaleLowerCase() === "pierre") 
            || (computerChoice(randChoice) === "ciseaux" && userChoice.toLocaleLowerCase() === "feuille")){        
        alert("Vous avez perdu");
        return computerGameWin += 1;
    }
    //  sinon gain du joueur
    else{        
        alert("Vous avez gagné 1 manche");
        return userGameWin += 1;
    }
 }

//---------------------------------DEROULEMENT DU JEU---------------------------------------

// affichage du message de bienvenue
alert("Bienvenue sur le jeu du \"Pierre - Feuille - Ciseaux\"");

// capture du prénom du candidat
var userName = prompt("Merci d'entrer votre Prénom :");

// message de bienvenue incluant son prénom
alert("Bienvenue " + userName + ", nous allons commencé la partie");

//---------------------------------DEROULEMENT DU JEU EN BOUCLE---------------------------------
//---------------------------------POUR UNE PARTIE EN 3 MANCHES---------------------------------

// capture du choix du candidat
var userChoice = prompt("Veuillez choisir entre \"pierre\" \"feuille\" \"ciseaux\"");

// message de confirmation du choix du candidat
alert("Vous avez choisi \"" + userChoice + "\".\nC\'est maintenant au tour de l\'ordinateur de jouer.");

// affichage de ce que l'ordinateur a choisi
alert("L\'ordinateur a choisi \"" + computerChoice(randChoice) + "\"");

// fonction de comparaison des choix ordi/joueur
compareChoice(pcChoice, userChoice);