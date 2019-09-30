let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
let stockUnderscore = [];
let ceQueTuVeux;
let ecran = document.getElementById("lettres");
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
let mot_cache;
//j'utilise la fonction Math pour selectionné un mot aléatoirement dans le tableau de mot word
nbr_rand = Math.round(Math.random() * word.length);
//je stocke le mot aléatoire dans la variable mot_cache
mot_cache = word[nbr_rand];
// je declare une fonction pour remplacer les lettres qui compose le mot aléatoire par des undescores
function nouveauMot() {
  //prend un mot aléatoirement
  nbr_rand = Math.round(Math.random() * word.length);
  mot_cache = word[nbr_rand];
  //j'initialise a 0 la variable dans laquelle sera stocke les underscores
  let newWord = "";
  for (let i = 0; i < mot_cache.length; i++) {
    newWord += "_";
  }
  /* console.log(mot_cache); */
  //je remplace les lettres par les underscores
  document.getElementById("lettres").innerHTML = newWord;
  stockUnderscore = newWord.split("");
  console.log(stockUnderscore);
  ceQueTuVeux = mot_cache.split("");
  console.log(ceQueTuVeux);
}

//j'ajoute une action au click du bouton commencer qui affiche un mot caché
let p = document.getElementById("newGame");
p.addEventListener("click", nouveauMot);

function analyz() {
  let trouve = false;
  for (let i = 0; i < ceQueTuVeux.length; i++) {
    if (ceQueTuVeux[i] === letters.value) {
      stockUnderscore[i] = ceQueTuVeux[i];
      ecran.textContent = stockUnderscore.join("");
      trouve = true;
    }
  }
  console.log(stockUnderscore);
  console.log(mot_cache);
  if (stockUnderscore === ceQueTuVeux) {
    alert("Vous echapper a la mort !");
  }
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
