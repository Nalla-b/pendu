let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
let stockUnderscore = [];
let whatYouWant;
let screen = document.getElementById("lettres");
let count = 0;

//the words to find
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

let nbr_rand = 0;
//declare a new variable for the secret word
let secret_word;
// I use the Math function to select a word randomly in the word table
nbr_rand = Math.round(Math.random() * word.length);
//I store the random word in the secret_word variable
secret_word = word[nbr_rand];
//I declare a function to replace the letters that make up the random word by undescores
function newWords() {
  //take a word randomly
  nbr_rand = Math.round(Math.random() * word.length);
  secret_word = word[nbr_rand];
  //I initialize at 0 the variable in which the underscores will be stored
  let newWord = "";
  for (let i = 0; i < secret_word.length; i++) {
    newWord += "_";
  }
  /* console.log(mot_cache); */
  //i replace the letters by the underscores
  document.getElementById("lettres").innerHTML = newWord;
  stockUnderscore = newWord.split("");
  console.log(stockUnderscore);
  whatYouWant = secret_word.split("");
  console.log(whatYouWant);
}

//I add an action at the click of the start button that displays a hidden word
let p = document.getElementById("newGame");
p.addEventListener("click", newWords);
//function that compares the letter entered with the secret_word and that replaces the underscore with this letter if it is present in the word
function analyz() {
  let trouve = false;
  //I make a loop to check in the table of underscore and that of the word hide
  for (let i = 0; i < whatYouWant.length; i++) {
    //if the letter entered is present at the same index as that of the table of the hidden word
    if (whatYouWant[i] === letters.value) {
      stockUnderscore[i] = whatYouWant[i];
      //I join this letter with the underscore table to display it in the hidden word
      screen.textContent = stockUnderscore.join("");
      trouve = true;
    }
  }
  console.log(stockUnderscore);
  console.log(secret_word);
  //if the word is completed , a alert window appears
  if (stockUnderscore === whatYouWant) {
    alert("Vous echapper a la mort !");
  }
  //if the letter is not in the word, we add 1 to the counter to be able to display 1 to 1 the parts of the canvas
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
