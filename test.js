/// FOR TESTING PURPOSES ONLY
/// CURRENTLY TESTING: 
//                   SPAWNING AN ENEMY WITHIN GAME DIV ON A RANDOM SIDE. NO RANDOM HEIGHT YET

function spawnEnemy() {
    var randomNumber = Math.random();
    const enemy = document.createElement('img');
    enemy.setAttribute('draggable', false)
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
        if(xCoord <= -enemy.width){
          enemy.remove();
          console.log('it works');
        }
      } else {
        xCoord += 2;
        if(xCoord >= gameDiv.clientWidth - enemy.width){
          enemy.remove();
          console.log('it works');
        }
      }
      enemy.style.left = xCoord + 'px'; // updates the left position
    }
  
    getSpawnSide();
    enemy.style.left = xCoord + 'px';
    enemy.style.bottom = yCoord + 'px';
    gameDiv.appendChild(enemy);
  
    setInterval(moveEnemy, 1); // Start the enemy movement
  }
