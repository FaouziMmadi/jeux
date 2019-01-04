let container = document.getElementById('container');
let container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');
let buttontest = document.getElementById('btn');
let time =4;
let temp_de_jeux = 4;
let score = document.getElementById("score");
let point = 0;
let barProgress = document.getElementById('barProgress');
let inGame = false;
let plein = document.getElementsByClassName('plein');
let vide = document.getElementsByClassName('vide');
let life = 3;

//changement de container 1 au 2

container1.style.display = "none";
container2.style.display = "none";
buttontest.addEventListener("click", functionStart, false);

//fonction pour changer decran

function functionStart() {
  container.hidden = true;

   intervalId = setInterval(diminuerbarProgress, 100);
   container1.style.display = "flex";
   inGame = true;


   window.addEventListener("keydown", function keyPush(click) {

     if (inGame) {
     if (click.key === lettre.textContent.toLowerCase()) {
       point ++
       lettrerandom = Math.floor(Math.random() * (25 - 1)) + 1;
       displaylater = alphabet[lettrerandom];
       lettre.textContent = displaylater
       score.textContent = " Point " + point
       barProgress.value = 20;
     }
       else if (life < 1) {
         finish()
         plein[life].style.display = "none"
         vide[life].style.display = "inline"
       }
         else {
           life --
           plein[life].style.display = "none"
           vide[life].style.display = "inline"
         }
       }

     else {
       finish()
     }
   }
    ,false)
}

 let intervalId = null;

//tableau lettre

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let min = 0
let max = alphabet.length -1;
let lettre = document.getElementById('lettre')

//fonction

let lettrerandom = Math.floor(Math.random() * (25 - 1)) + 1
let displaylater = alphabet[lettrerandom];
let lp = document.getElementById('lettre')

//afficher lettre aleatoir

lettre.textContent = displaylater

//Fonction du click

//fonction pour la bare du temps

function diminuerbarProgress() {
  barProgress.value --;

  if (barProgress.value ==0)
finish()
  }

  function finish ()
{
  clearTimeout(intervalId)
  lettre.textContent ="game over"
  barProgress.value = 0 ;
}
