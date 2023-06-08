/// FOR TESTING PURPOSES ONLY
/// CURRENTLY TESTING: 
//                     GAME OVER LOGIC


function gameOver(){
  const gameTitle = document.querySelector('#gameTitle');
  const gameDiv = document.querySelector('#gameDiv');
  const lowerMenu = document.querySelector('#lowerMenu');

  gameDiv.removeEventListener('click', gunshotSounds);

  gameTitle.remove()
  gameDiv.remove()
  lowerMenu.remove()
}
