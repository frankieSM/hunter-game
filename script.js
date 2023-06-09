const rulesButton = document.querySelector("#rulesButton");
const startButton = document.querySelector("#startButton");
const audioButton = document.querySelector("#audioButton");
const menu = document.querySelector("#mainMenu");
let lives = 5;
let score = 0;
let gameRunning;

function clearMenu() {
  menu.remove();
}

function addBackButton(element) {
  let backButton = document.createElement("button");
  backButton.textContent = "BACK TO MAIN MENU";
  backButton.classList.add("backButtons");
  document.body.append(backButton);
  backButton.onclick = () => {
    document.body.append(menu);
    element.remove();
    backButton.remove();
  };
}

function showRules() {
  clearMenu();
  let rules = document.createElement("div");
  rules.innerHTML =
    "MUTANT BIRDS ARE ATTACKING YOUR LAND HUNTER, DESTROY THEM AT ALL COSTS. 'SHOOT' THE BIRDS BEFORE THEY REACH THEIR DESTINATION OR HUMANTIY WILL BE DOOMED (GAME OVER). YOU HAVE 5 CHANCES. GOOD LUCK AND REMEMBER TO HAVE FUN AND BE YOURSELF.";
  rules.style.backgroundColor = "tan";
  rules.style.width = "80%";
  rules.style.margin = "auto";
  rules.style.border = "5px solid";
  rules.style.borderColor = "rgb(102, 30, 30)";
  rules.style.borderRadius = "50px";
  rules.style.position = "relative";
  rules.style.top = "200px";

  rules.style.fontFamily =
    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif';
  rules.style.fontSize = "30px";
  rules.style.textAlign = "center";
  rules.style.color = "rgb(69, 12, 12)";

  document.body.append(rules);
  addBackButton(rules);
}

//TODO: this works! but it sucks. being stuck at one volume BLOWS.
function toggleAudio() {
  const audio = document.getElementById("mainAudio");
  audio.volume = 0.1;
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function updateScoreCounter() {
  const scoreCounter = document.getElementById('scoreCounter');
  scoreCounter.innerHTML = 'SCORE: ' + score;
}

function updateLivesCounter() {
  const heart = document.getElementById('heart');
  heart.remove()
}

function addMenu(){
  const lowerMenu = document.getElementById('lowerMenu');

  const scoreCounter = document.createElement('div');
  scoreCounter.innerHTML = 'SCORE: ' + score;
  scoreCounter.id = 'scoreCounter';
  scoreCounter.style.fontSize = '50px';

  const audioButton = document.createElement('button');
  audioButton.innerHTML = 'TOGGLE AMBIANCE';
  audioButton.onclick = toggleAudio

  for(let i=0; i < 5; i++){
    const heart = document.createElement('img');
    heart.setAttribute('id', 'heart');
    heart.src = 'assets/images/heart.png';
    
    lowerMenu.appendChild(heart);
  }
  lowerMenu.appendChild(scoreCounter);
  lowerMenu.appendChild(audioButton);
}

  function gunshotSounds(){
    const gunshot = new Audio("assets/sounds/gunshot.mp3");
    gunshot.volume = 0.1;
    gunshot.play();
  }

  function gameOver(){
    const gameTitle = document.querySelector('#gameTitle');
    const gameDiv = document.querySelector('#gameDiv');
    const lowerMenu = document.querySelector('#lowerMenu');
    const gameOverScreen = document.createElement('div');
    gameOverScreen.innerHTML
  
    gameDiv.removeEventListener('click', gunshotSounds);
    clearInterval(gameRunning)
  
    gameTitle.remove()
    gameDiv.remove()
    lowerMenu.remove()
  }
  

function enemyHit(event){
  const enemy = event.target;
  if(!enemy.shot){
    enemy.shot = true;
    enemy.remove();
    score += 100;
    updateScoreCounter();
  }
}


///////////////////////////////////////////////////////////
function spawnEnemy() {
  var randomNumber = Math.random();
  const enemy = document.createElement("img");
  enemy.setAttribute("draggable", false);
  enemy.shot = false; //tracks bird being shot
  enemy.addEventListener("click", enemyHit)

  const gameDiv = document.getElementById("gameDiv");
  var xCoord;
  var yCoord = Math.floor(Math.random() * 900) + 1;
  const spawnSide = getSpawnSide();

  enemy.src = "assets/images/bird1.png";
  enemy.style.position = "absolute";
  

  function getSpawnSide() {
    //LEFT = -140px, RIGHT = 2550px
    if (randomNumber < 0.5) {
      xCoord = -140;
      return "left";
    } else {
      xCoord = 2550;
      return "right";
    }
  }

  function moveEnemy() {
    enemy.style.zIndex = 1;

    if (!enemy.hit && !enemy.shot) { //added enemy.shot to check if hit edge and shot
      if (spawnSide === "right") {
        xCoord -= 2;
        if (xCoord <= - enemy.width) { //
          enemy.hit = true; //adding method to 'enemy' object.
          enemy.remove();
          lives -= 1;
          updateLivesCounter(); //
          console.log(lives);
          if (lives === 0) {
            gameOver();
          }
        }
      } else {
        xCoord += 2;
        if (xCoord >= gameDiv.clientWidth - enemy.width) {
          enemy.hit = true;
          enemy.remove();
          lives -= 1;
          updateLivesCounter(); //
          console.log(lives);

          if (lives === 0) {
            gameOver();
          }
        }
      }
    }

    enemy.style.left = xCoord + "px";
  }

  getSpawnSide();
  enemy.style.left = xCoord + "px";
  enemy.style.bottom = yCoord + "px";
  gameDiv.appendChild(enemy);

  setInterval(moveEnemy, 1);
}
//////////////////////////////////////////////////////////////////
function startGame() {
  const gameDiv = document.createElement("div");
  gameDiv.setAttribute("id", "gameDiv");
  gameDiv.addEventListener("click", gunshotSounds);
  const lowerMenu = document.createElement("div");
  lowerMenu.setAttribute("id", "lowerMenu");
  const gameTitle = document.createElement("h1");
  gameTitle.setAttribute("id", "gameTitle");
  gameTitle.innerHTML = "STILL NOT DUCK HUNT";

  clearMenu();

  document.body.append(gameTitle);
  document.body.append(gameDiv);
  document.body.append(lowerMenu);

  addMenu();

  setTimeout(spawnEnemy, 3000); //pause after starting
  gameRunning = setInterval(spawnEnemy, 1000); //continuously spawn enemies;
}
