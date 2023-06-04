const rulesButton = document.querySelector("#rulesButton");
const startButton = document.querySelector("#startButton");
const audioButton = document.querySelector("#audioButton");
const menu = document.querySelector("#mainMenu");

function clearMenu() {
  menu.remove();
}

function addBackButton(element){
    let backButton = document.createElement('button');
    backButton.textContent = 'BACK TO MAIN MENU';
    backButton.classList.add('backButtons')
    document.body.append(backButton);
    backButton.onclick = () => {
        document.body.append(menu);
        element.remove();
        backButton.remove();
    }

} 

function toggleMenu(){
    /*TODO: the back button is FUCKED. gonna need functions that add/remove
            the menu while also adding/removing the rules. maybe store them 
            i think maybe just declare the rules and menu globally.
    */
}


function showRules() {
  clearMenu();
  let rules = document.createElement("div");
  rules.innerHTML =
    "RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES RULES";
  rules.style.backgroundColor = 'tan';
  rules.style.width = '80%';
  rules.style.margin = 'auto';
  rules.style.border = '5px solid';
  rules.style.borderColor = 'rgb(102, 30, 30)';
  rules.style.borderRadius = '50px';
  rules.style.position = 'relative';
  rules.style.top = '200px';

  rules.style.fontFamily = 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif';
  rules.style.fontSize = '30px';
  rules.style.textAlign = 'center';
  rules.style.color = 'rgb(69, 12, 12)';

  document.body.append(rules);
  addBackButton(rules);
}

//TODO: this works! but it sucks. being stuck at one volume BLOWS.
function toggleAudio(){
    const audio = document.getElementById("mainAudio");
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}

/*TODO: add eventListener for gun sound on canvas? that way no matter if they
        miss or not they hear the sound.
*/
function startGame(){
    const gameContainer = document.createElement('div');
    gameContainer.setAttribute('id', 'gameContainer');
    const lowerMenu = document.createElement('div');
    lowerMenu.setAttribute('id', 'lowerMenu');
    const gameTitle = document.createElement('h1');
    gameTitle.setAttribute('id', 'gameTitle');
    gameTitle.innerHTML = 'STILL NOT DUCK HUNT';
    clearMenu();
    document.body.append(gameTitle);
    document.body.append(gameContainer);
    document.body.append(lowerMenu);
}


