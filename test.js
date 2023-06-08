/// FOR TESTING PURPOSES ONLY
/// CURRENTLY TESTING: 
//                     GAME OVER LOGIC & GAME MENU CREATION


function gameOver(){
  const gameTitle = document.querySelector('#gameTitle');
  const gameDiv = document.querySelector('#gameDiv');
  const lowerMenu = document.querySelector('#lowerMenu');

  gameDiv.removeEventListener('click', gunshotSounds);
  clearInterval(gameRunning)

  gameTitle.remove()
  gameDiv.remove()
  lowerMenu.remove()
}


function addMenu(){
  const lowerMenu = document.getElementById('lowerMenu');

  const scoreCounter = document.createElement('p');
  scoreCounter.innerHTML = 'SCORE: ' + score;

  const audioButton = document.createElement('button');
  audioButton.innerHTML = 'TOGGLE AUDIO';
  audioButton.onclick = toggleAudio

  for(let i=0; i < 5; i++){
    const heart = document.createElement('img');
    heart.src = 'assets/images/heart.png';
    
    lowerMenu.appendChild(heart);
    lowerMenu.appendChild(scoreCounter);
    lowerMenu.appendChild(audioButton);
   
  }
}