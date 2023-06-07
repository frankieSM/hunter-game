/// FOR TESTING PURPOSES ONLY
/// CURRENTLY TESTING: 
//                   SPAWNING AN ENEMY WITHIN GAME DIV ON A RANDOM SIDE. NO RANDOM HEIGHT YET

const randomNumber = Math.random();


function spawnEnemy(){
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
}
