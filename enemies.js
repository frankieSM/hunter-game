// REMEMBER TO LINK TO HTML

const npc = newEnemy(450, 780)

function newImage(url){
  let image = document.createElement('img')
  image.src = url
  image.style.position = 'absolute'
  document.body.append(image)
  return image
}

function newEnemy(x, y){
  let element = newImage('assets/images/bird.jpg')
  element.style.zIndex = 1;
   
  let spawnSide = 'right';

    function moveEnemy(){
      if(spawnSide === 'right'){
        x -= 1
      } else {
        x += 1
      }
      element.style.left = x + 'px';
      element.style.bottom = y + 'px';
    }
    setInterval(moveEnemy, 10)
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