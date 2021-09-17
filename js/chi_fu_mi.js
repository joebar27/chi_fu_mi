//---------------------------------DECLARATION DES VARIABLES---------------------------------------

var userName;
var userChoice;
var choiceChecked;
var randChoice;
var pcChoice;
var userGameWin = 0;
var computerGameWin = 0;


//---------------------------------DEROULEMENT DU JEU---------------------------------------

// affichage du message de bienvenue
alert("Bienvenue sur le jeu du \"Pierre - Feuille - Ciseaux\"");

// capture du prénom du candidat avec nombre de caractère mini maxi
checkNameUser(userName);

do {    
    // capture du choix du candidat et vérification de l'expression entrer
    checkChoiceUser(userChoice);

    // affichage de ce que l'ordinateur a choisi
    computerChoice(randChoice);

    // comparaison des choix ordi/joueur, affichage du vainqueur de la manche et incrementation des scores
    compareChoices(pcChoice, userChoice);

    // affichage des scores
    alert("SCORE :\n" + userName + " : " + userGameWin + " || Ordinateur : " + computerGameWin)
    console.log("instruction terminé")
}
while(userGameWin < 3 && computerGameWin < 3);

if (userGameWin === 3){
    alert(userName + " vous avez remporté les 3 manches\nFELICITATION !");
}
else {
    alert("Désolé c'est l'ordinateur qui a remporté 3 manches")
}


//---------------------------------CONCEPTION DES FONCTIONS---------------------------------------

// fonction de verification du prénom du joueur +++++++++++++++++++++++++++++++++++++++++++++++++

function checkNameUser(){ 
        userName = prompt("Merci d'entrer votre Prénom :");
        console.log(userName);
        if (userName.length >= 2 && userName.length <= 20){
            // message de bienvenue incluant son prénom
            alert("Bienvenue " + userName + ", nous allons commencé la partie");        
            return userName;
        }
        else {
            alert("Votre prénom doit comporter entre 2 et 20 caractères");
            checkNameUser()
        }
}


// fonction de vérification du choix du joueur +++++++++++++++++++++++++++++++++++++++++++++++++++

function checkChoiceUser(){
        userChoice = prompt("Veuillez choisir entre \"pierre\" \"feuille\" \"ciseaux\"");
        //vérification de l'expression du choix du joueur
        if (userChoice.toLowerCase() === "pierre" || userChoice.toLowerCase() === "feuille" || userChoice.toLowerCase() === "ciseaux"){
            choiceChecked = userChoice;
            // message de confirmation du choix du candidat
            alert("Vous avez choisi \"" + choiceChecked + "\".\nC\'est maintenant au tour de l\'ordinateur de jouer.");
            console.log(choiceChecked);
            return choiceChecked;       
        }
        else {
            alert(userChoice + " n\'est pas correct, merci de le re-saisir");
            checkChoiceUser();
        }
}

// fonction du choix de l'ordinateur ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function computerChoice(randChoice){
    randChoice = Math.random();
    console.log(randChoice);
    if (randChoice <= 0.33){
        pcChoice = "pierre";
        alert("L\'ordinateur a choisi \"" + pcChoice + "\"");
    }
    else if(randChoice > 0.33 && randChoice <= 0.66){
        pcChoice = "feuille";
        alert("L\'ordinateur a choisi \"" + pcChoice + "\"");
    }
    else {
        pcChoice = "ciseaux";
        alert("L\'ordinateur a choisi \"" + pcChoice + "\"");
    }
    console.log(pcChoice);
    return pcChoice;
}

// fonction de comparaison des choix ordi/joueur ++++++++++++++++++++++++++++++++++++++++++++++++

function compareChoices(pcChoice, choiceChecked){
    console.log("fonction active")
    // comparaison de match nul
    if (pcChoice === choiceChecked){
        alert("Il y a match nul");
    }
    // comparaison des possibilités de gain de l'ordinateur
    else if ((pcChoice === "pierre" && choiceChecked === "ciseaux") 
            || (pcChoice === "feuille" && choiceChecked === "pierre") 
            || (pcChoice === "ciseaux" && choiceChecked === "feuille")){
            alert("Vous avez perdu cette manche");
            return computerGameWin += 1;
    }
    //  sinon gain du joueur
    else{        
        alert("Vous avez gagné 1 manche");
        return userGameWin += 1;
    }
 }
