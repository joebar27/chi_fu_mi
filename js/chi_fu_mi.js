//---------------------------------DECLARATION DES VARIABLES---------------------------------------

var userChoice;
var choiceChecked = " ";
// variable pour la fonction du choix de l'ordinateur
var randChoice;
var pcChoice;
// variable pour la fonction de comparaison des choix ordi/joueur
var userGameWin = 0;
var computerGameWin = 0;

//---------------------------------CONCEPTION DES FONCTIONS---------------------------------------

// fonction de vérification du choix du joueur
function checkChoiceUser(userChoice){
    if (userChoice.toLowerCase() === "pierre" || userChoice.toLowerCase() === "feuille" || userChoice.toLowerCase() === "ciseaux"){
        choiceChecked = userChoice;
        // message de confirmation du choix du candidat
        alert("Vous avez choisi \"" + choiceChecked + "\".\nC\'est maintenant au tour de l\'ordinateur de jouer.");
        console.log(choiceChecked);
        return choiceChecked;       
    }
    else {
        userChoice = prompt("Votre choix n'est pas correct, merci de le re-saisir");
        choiceChecked = userChoice;
        return choiceChecked;
    }
}

// fonction du choix de l'ordinateur
function computerChoice(randChoice){
    randChoice = Math.random();
    console.log(randChoice);
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
    if (pcChoice === checkChoiceUser(userChoice)){
        alert("Il y a match nul");
    }
    // comparaison des possibilités de gain de l'ordinateur
    else if ((pcChoice === "pierre" && checkChoiceUser(userChoice) === "ciseaux") 
            || (pcChoice === "feuille" && checkChoiceUser(userChoice) === "pierre") 
            || (pcChoice === "ciseaux" && checkChoiceUser(userChoice) === "feuille")){        
        alert("Vous avez perdu cette manche");
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
//------------------------------POUR UNE PARTIE EN 3 MANCHES GAGNE------------------------------

//while (userGameWin < 3 || computerGameWin < 3){
    
    // capture du choix du candidat
    userChoice = prompt("Veuillez choisir entre \"pierre\" \"feuille\" \"ciseaux\"");
    
    //utilisation de la fonction de vérification du choix du joueur
    do { 
        checkChoiceUser(userChoice);
    }
    while (checkChoiceUser(userChoice) !== choiceChecked);

    // affichage de ce que l'ordinateur a choisi
    alert("L\'ordinateur a choisi \"" + computerChoice(randChoice) + "\"");

    // comparaison des choix ordi/joueur et affichage du vainqueur
    compareChoice(pcChoice, userChoice);
    alert("\rSCORE\n" + userName + " : " + userGameWin + " || Ordinateur : " + computerGameWin)
//}

// if ( userGameWin === 3 || computerGameWin === 3){
//     if (userGameWin === 3){
//         alert(userName + " vous avez remporté les 3 manches\nFELICITATION !");
//     }
//     else {
//         alert("Désolé c'est l'ordinateur qui a remporté 3 manches")
//     }
// }