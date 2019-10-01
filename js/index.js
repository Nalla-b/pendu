let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
let stockUnderscore = [];
let whatYouWant;
let screen = document.getElementById("lettres");
let count = 0;

//liste de mots a chercher
let word = [
  "Alouette",
  "Gentil",
  "Malin",  
  "voiture",
  "rare",
  "tableau",
  "portable",
  "canette",
  "inconstitutionellement",
  "bouteille",
  "streaming",
  "chat",
  "fauteuil",
  "parking"
];
//initialise une fonction a 0
let nbr_rand = 0;
//je declare une fonction mot_cache dans laquelle je vais stocker le mot selectionné aleatoirement
let secret_word;
//j'utilise la fonction Math pour selectionné un mot aléatoirement dans le tableau de mot word
nbr_rand = Math.round(Math.random() * word.length);
//je stocke le mot aléatoire dans la variable mot_cache
secret_word = word[nbr_rand];
// je declare une fonction pour remplacer les lettres qui compose le mot aléatoire par des undescores
function newWords() {
  //prend un mot aléatoirement
  nbr_rand = Math.round(Math.random() * word.length);
  secret_word = word[nbr_rand];
  //j'initialise a 0 la variable dans laquelle sera stocke les underscores
  let newWord = "";
  for (let i = 0; i < secret_word.length; i++) {
    newWord += "_";
  }
  /* console.log(mot_cache); */
  //je remplace les lettres par les underscores
  document.getElementById("lettres").innerHTML = newWord;
  stockUnderscore = newWord.split("");
  console.log(stockUnderscore);
  whatYouWant = secret_word.split("");
  console.log(whatYouWant);
}

//j'ajoute une action au click du bouton commencer qui affiche un mot caché
let p = document.getElementById("newGame");
p.addEventListener("click", newWords);
//fonction qui permet de comparer la lettre rentrer avec le mot cache et qui remplace l'underscore par cette lettre si elle est presente dans le mot
function analyz() {
  let trouve = false;
  //je fais une boucle pour verifier dans le tableau d'underscore et celui du mot cacher
  for (let i = 0; i < whatYouWant.length; i++) {
    //si la lettre rentrer est presente au meme index que celui du tableau du mot caché
    if (whatYouWant[i] === letters.value) {
      stockUnderscore[i] = whatYouWant[i];
      //je joins cette lettre avec la tableau d'underscore pour l'afficher dans le mot caché
      screen.textContent = stockUnderscore.join("");
      trouve = true;
    }
  }
  console.log(stockUnderscore);
  console.log(secret_word);
  //si le mot est complet , il nous affiche une fenetre alert
  if (stockUnderscore === whatYouWant) {
    alert("Vous echapper a la mort !");
  }
  //si la lettre n'est pas dans le mot , on ajoute 1 au compteur pour pouvoir afficher 1 a 1 les parties du canvas
   if (!trouve) {
    count++;
    console.log(count);
  }
  else if (count == 1) {
    //sol
    ctx.beginPath();
    ctx.fillRect(0, 480, 600, 120);
    ctx.fillStyle = "#228b22";
    ctx.fill();
    ctx.stroke();
  } else if (count == 2) {
    //bottom gallows
    ctx.beginPath();
    ctx.strokeStyle = "#00C5FB";
    ctx.lineWidth = 20;
    ctx.moveTo(200, 500);
    ctx.lineTo(200, 100);
    ctx.stroke();
  } else if (count == 3) {
    //gallows
    ctx.beginPath();
    ctx.strokeStyle = "#00C5FB";
    ctx.lineWidth = 20;
    ctx.moveTo(100, 500);
    ctx.lineTo(300, 500);
    ctx.stroke();
  } else if (count == 4) {
    //top gallows
    ctx.beginPath();
    ctx.strokeStyle = "#00C5FB";
    ctx.lineWidth = 20;
    ctx.moveTo(150, 100);
    ctx.lineTo(500, 100);
    ctx.stroke();
  } else if (count == 5) {
    //top corner
    ctx.beginPath();
    ctx.strokeStyle = "#00C5FB";
    ctx.lineWidth = 15;
    ctx.moveTo(300, 100);
    ctx.lineTo(200, 200);
    ctx.stroke();
  } else if (count == 6) {
    //rope
    ctx.beginPath();
    ctx.strokeStyle = "#00C5FB";
    ctx.lineWidth = 6;
    ctx.moveTo(400, 100);
    ctx.lineTo(400, 200);
    ctx.stroke();
  } else if (count == 7) {
    //head
    ctx.beginPath();
    ctx.strokeStyle = "#385051";
    ctx.fillStyle = "#385051";
    ctx.lineWidth = 12;
    ctx.moveTo(370, 220);
    ctx.arc(400, 230, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  } else if (count == 8) {
    //body
    ctx.beginPath();
    ctx.strokeStyle = "#385051";
    ctx.lineWidth = 20;
    ctx.moveTo(400, 260);
    ctx.lineTo(400, 360);
    ctx.stroke();
  } else if (count == 9) {
    //arms
    ctx.beginPath();
    ctx.strokeStyle = "#385051";
    ctx.lineWidth = 15;
    ctx.moveTo(350, 300);
    ctx.lineTo(450, 300);
    ctx.stroke();
  } else if (count == 10) {
    //left leg
    ctx.beginPath();
    ctx.strokeStyle = "#385051";
    ctx.lineWidth = 15;
    ctx.moveTo(400, 360);
    ctx.lineTo(345, 430);
    ctx.stroke();
  } else if (count == 11) {
    //right leg
    ctx.beginPath();
    ctx.strokeStyle = "#385051";
    ctx.lineWidth = 15;
    ctx.moveTo(400, 360);
    ctx.lineTo(455, 430);
    ctx.stroke();
    alert("hanged");
  }
}

// lance la fonction au click du bouton envoyer
let c = document.getElementById("btnLetter");
c.addEventListener("click", analyz);
