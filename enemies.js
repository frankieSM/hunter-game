
/* const npc = newEnemy(1440, 500);
const randomNumber = Math.random();
const gameContainer = document.getElementById("gameContainer");

function newImage(url) {
  let image = document.createElement("img");
  image.src = url;
  image.style.position = "absolute";
  document.body.append(image);
  return image;
}

function newEnemy(x, y) {
  let enemy = newImage("assets/images/bird.jpg");
  enemy.style.zIndex = 1;

  let spawnSide = "right";

  function moveEnemy() {
    if (spawnSide === "right") {
      enemy.classList.add('rightEnemy');
      x -= 1;
    } else {
      enemy.classList.add('leftEnemy');
      x += 1;
    }
    enemy.style.left = x + "px";
    enemy.style.bottom = y + "px";
  }
  setInterval(moveEnemy, 1);
}

function spawnEnemy() {
  function getSpawnSide() {
    let spawnSide;
    if (randomNumber < 0.5) {
      spawnSide = "left"; // maybe try and set this to just the coordinates ?
    } else {
      spawnSide = "right";
    }
  }
}










 /* ENEMY VARIABLES: 
    X COORDINATE
    Y COORDINATE
    IMAGE
    SPEED
    POINTS
    DIRECTION = OPPOSITE SIDE FROM SPAWN SIDE
    SPAWN SIDE??? = LEFT OR RIGHT EDGE OF DISPLAY ?
    EVENT LISTENER WITH DELETE FUNCTION */
