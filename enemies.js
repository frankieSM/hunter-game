//WORKING ENEMY CODE FOR SPAWNING ON RANDOM SIDES

/* function spawnEnemy(){
    const enemy = document.createElement('img');
    enemy.addEventListener('click', ()=> {
        enemy.remove()
    })
    const gameDiv = document.getElementById("gameDiv"); //gameDiv id replaced gameContainer id. also may not need if gamediv is declared within start game function just select it fr fr.
    var xCoord;
    var yCoord = 500;
    enemy.src = 'assets/images/bird.jpg';
    enemy.style.position = 'absolute';

    function getSpawnSide(){ //LEFT = -140px, RIGHT = 2550px
        if(randomNumber < 0.5){
            xCoord = 500
        } else {
            xCoord = 2000
        }
    }

    getSpawnSide();
    enemy.style.left = xCoord + "px";
    enemy.style.bottom = yCoord + "px";
    gameDiv.appendChild(enemy)
} */


// WORKING CODE FOR RANDOM SPAWN SIDE WITH MOVEMENTS//
/* function spawnEnemy() {
    var randomNumber = Math.random();
    const enemy = document.createElement('img');
  
    enemy.addEventListener('click', () => {
      enemy.remove();
    });
  
    const gameDiv = document.getElementById('gameDiv');
    var xCoord;
    var yCoord = 500;
    const spawnSide = getSpawnSide();
  
    enemy.src = 'assets/images/bird.jpg';
    enemy.style.position = 'absolute';
  
    function getSpawnSide() {
      //LEFT = -140px, RIGHT = 2550px
      if (randomNumber < 0.5) {
        xCoord = -140;
        return 'left';
      } else {
        xCoord = 2550;
        return 'right';
      }
    }
  
    function moveEnemy() {
      enemy.style.zIndex = 1;
      if (spawnSide === 'right') {
        xCoord -= 2; // increase value to change speed
      } else {
        xCoord += 2; 
      }
      enemy.style.left = xCoord + 'px'; // updates the left position
    }
  
    getSpawnSide(); 
    enemy.style.left = xCoord + 'px';
    enemy.style.bottom = yCoord + 'px';
    gameDiv.appendChild(enemy);
  
    setInterval(moveEnemy, 1); // Start the enemy movement
  } */


/////  WORKING CODE FOR RANDOM HEIGHT/SIDE AND MOVEMENT //////

/*function spawnEnemy() {
  var randomNumber = Math.random();
  const enemy = document.createElement('img');

  enemy.addEventListener('click', () => {
    enemy.remove();
  });

  const gameDiv = document.getElementById('gameDiv');
  var xCoord;
  var yCoord = Math.floor(Math.random() * 999) + 1;
  const spawnSide = getSpawnSide();

  enemy.src = 'assets/images/bird.jpg';
  enemy.style.position = 'absolute';

  function getSpawnSide() {
    //LEFT = -140px, RIGHT = 2550px
    if (randomNumber < 0.5) {
      xCoord = -140;
      return 'left';
    } else {
      xCoord = 2550;
      return 'right';
    }
  }

  function moveEnemy() {
    enemy.style.zIndex = 1;
    if (spawnSide === 'right') {
      xCoord -= 2; // increase value to change speed
    } else {
      xCoord += 2;
    }
    enemy.style.left = xCoord + 'px'; // updates the left position
  }

  getSpawnSide();
  enemy.style.left = xCoord + 'px';
  enemy.style.bottom = yCoord + 'px';
  gameDiv.appendChild(enemy);

  setInterval(moveEnemy, 1); // Start the enemy movement
} */