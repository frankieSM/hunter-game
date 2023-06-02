const rulesButton = document.querySelector("#rulesButton");
const startButton = document.querySelector("#startButton");
const audioButton = document.querySelector("#audioButton");

rulesButton.addEventListener("click", showRules);
startButton.addEventListener("click", startGame);
audioButton.addEventListener("click", toggleAudio);

function clearMenu() {
  let menu = document.querySelector("#mainMenu");
  menu.remove();
}

function addBackButton(){
    let backButton = document.createElement('button');
    backButton.textContent = 'BACK TO MAIN MENU';
    backButton.classList.add('backButtons')
    document.body.append(backButton);
    backButton.addEventListener("click", ()=>{
        let menu = document.querySelector("#mainMenu");
        document.body.append(menu);
    }) 

} 

function toggleMenu(){
    /*TODO: i am almost certain i can reformat the clearMenu and addBackButton
            into a toggle that would be way easier. needs more research.
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

  document.body.append(rules)
  addBackButton();
}

function startGame(){
/*TODO: add eventListener for gun sound on canvas? that way no matter if they
        miss or not they hear the sound.
*/
    let gameSpace = document.createElement('div');
    let lives;
    let score;
}

//TODO: this works! but it sucks. being stuck at one volume BLOWS. fix later.
function toggleAudio(){
    clearMenu();
    const audio = document.getElementById("mainAudio");
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}