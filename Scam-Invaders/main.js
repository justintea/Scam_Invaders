 //? I need this js thing from the file game.js
/* import { it } from "node:test";
import { game } from "./game";  */


 /*----- constants -----*/
/*  const diffType = ['Easy','Medium','Hard'];
 const difficulty = diffType[1]; */




 /*----- state variables -----*/
let playerScore = 5 ; 

 /*----- cached elements  -----*/
 console.log('testing12345');

 const contButton1 = document.querySelector('#contButton1');
 console.log(contButton1);
const introBox = document.querySelector('.intro_box');
const diffNameBox = document.querySelector('.diff_name_box');
/* const difficulty = document.querySelector(diffCallback);*/
const nameInput = document.querySelector('playerName');
/*const name submit button */

const gameScreen = document.querySelector('.game_screen');
const gameBox = document.querySelector('.game_box');
const startButton = document.querySelector('#startButton');
const ansSubmitButton = document.querySelector('.submitButton');

const q1a1Button = document.querySelector('#Q1A1');
const q1a2Button = document.querySelector('#Q1A2');
const q1a3Button = document.querySelector('#Q1A3');

const Q1 = document.getElementById('Q1');
const Q1A1 = document.getElementById('Q1A1');
const Q1A2 = document.getElementById('Q1A2');
const Q1A3 = document.getElementById('Q1A3');
const nextButtonQ12 = document.getElementById('nextButtonQ12');

const q2a1Button = document.querySelector('#Q2A1');
const q2a2Button = document.querySelector('#Q2A2');
const q2a3Button = document.querySelector('#Q2A3');

const Q2 = document.getElementById('Q2');
const Q2A1 = document.getElementById('Q2A1');
const Q2A2 = document.getElementById('Q2A2');
const Q2A3 = document.getElementById('Q2A3');
const nextButtonQ23 = document.getElementById('nextButtonQ23');

const q3a1Button = document.querySelector('#Q3A1');
const q3a2Button = document.querySelector('#Q3A2');
const q3a3Button = document.querySelector('#Q3A3');

const Q3 = document.getElementById('Q3');
const Q3A1 = document.getElementById('Q3A1');
const Q3A2 = document.getElementById('Q3A2');
const Q3A3 = document.getElementById('Q3A3');
const nextButtonQ34 = document.getElementById('nextButtonQ34');

const q4a1Button = document.querySelector('#Q4A1');
const q4a2Button = document.querySelector('#Q4A2');
const q4a3Button = document.querySelector('#Q4A3');

const Q4 = document.getElementById('Q4');
const Q4A1 = document.getElementById('Q4A1');
const Q4A2 = document.getElementById('Q4A2');
const Q4A3 = document.getElementById('Q4A3');
const nextButtonQ45 = document.getElementById('nextButtonQ45');

const q5a1Button = document.querySelector('#Q5A1');
const q5a2Button = document.querySelector('#Q5A2');
const q5a3Button = document.querySelector('#Q5A3');

const Q5 = document.getElementById('Q5');
const Q5A1 = document.getElementById('Q5A1');
const Q5A2 = document.getElementById('Q5A2');
const Q5A3 = document.getElementById('Q5A3');
const nextButtonQ5end = document.getElementById('nextButtonQ5end');

const endScreen = document.querySelector('.end_Screen');
const replayButton = document.getElementById('replayButton');

console.log(introBox);
console.log(diffNameBox);
console.log('introbox status: ', introBox.style.display);

//difficulty is halfbaked. work on it
//for the name input, go back to your email input exercise to refer

 /*----- event listeners -----*/

//page 1 to page 2
const nextPage12 = () => { 
    introBox.style.display = 'none';
    console.log('introbox status: ', introBox.style.display);
    diffNameBox.style.display = 'block';
    console.log('namebox status: ', diffNameBox.style.display);
    }  
    
contButton1.addEventListener('click', nextPage12);
/* contButton1.addEventListener('click', nextPage(event)); */

//page 2 logic
/* const handleMode = (level) => () => {
console.log('handleMode invoked');
game.level = level;
console.log(level);
}  */

/* const handleMode = () => {console.log('handleMode invoked');
console.log(level);} */

/*  const diffButton = () => 
{ document.querySelector('#medButton').addEventListener('click', handleMode('med'))      };
 */

//page 2 to page 3, Game start
const nextPage23 = () => { 
    diffNameBox.style.display = 'none';
    console.log('namebox status: ', diffNameBox.style.display);
    gameScreen.style.display = 'block';
    gameBox.style.display = 'block';
    Q1.style.display = 'block';
    Q1A1.style.display = 'block';
    Q1A2.style.display = 'block';
    Q1A3.style.display = 'block';
    nextButtonQ12.style.display = 'block';

    Q5.style.display = 'none';
    Q5A1.style.display = 'none';
    Q5A2.style.display = 'none';
    Q5A3.style.display = 'none';
    nextButtonQ5end.style.display = 'none';

    console.log('gamebox status: ', gameScreen.style.display);
}  

startButton.addEventListener('click', nextPage23);

// page 3, game question 1 
//listen to button to submit

const countingSquire1 = (x) => {
    if (x === 1) {
    playerScore -= 1;
    console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    else if (x === 2) {
        playerScore += 1;
        console.log(`option is ${x}, a right option. SQUIRE adds playerscore: ${playerScore}`); }
    else if (x === 3) {
        playerScore = playerScore;
        console.log(`option is ${x}, a neutral option. No change, playerscore: ${playerScore}`); }
    }

const countPoint1 = (x) => {
    console.log(`PLAYER SCORE IS NOW ${playerScore}`); 
    return () => countingSquire1(x);
}

q1a1Button.addEventListener('click',countPoint1(1));
q1a2Button.addEventListener('click',countPoint1(2));
q1a3Button.addEventListener('click',countPoint1(3));

console.log(Q1);
//page 3 to page 4, game question 2
const nextPage34 = (event) => { 
    Q1.style.display = 'none';
    Q1A1.style.display = 'none';
    Q1A2.style.display = 'none';
    Q1A3.style.display = 'none';
    nextButtonQ12.style.display = 'none';
    console.log('something is happening here');

    Q2.style.display = 'block';
    Q2A1.style.display = 'block';
    Q2A2.style.display = 'block';
    Q2A3.style.display = 'block';
    nextButtonQ23.style.display = 'block';
    console.log('something is happening here TOO');

   
}  

nextButtonQ12.addEventListener('click', nextPage34);

const countingSquire2 = (x) => {
    if (x === 1) {
        playerScore = playerScore;
    console.log(`option is ${x}, a neutral option. No change, playerscore: ${playerScore}`); }
    else if (x === 2) {
        playerScore -= 1;
        console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    else if (x === 3) {
        playerScore -= 1;
        console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    }

const countPoint2 = (x) => {
    console.log(`PLAYER SCORE IS NOW ${playerScore}`); 
    return () => countingSquire2(x);
}

q2a1Button.addEventListener('click',countPoint2(1));
q2a2Button.addEventListener('click',countPoint2(2));
q2a3Button.addEventListener('click',countPoint2(3));

//page 4 to page 5, game question 3
const nextPage45 = (event) => { 
    Q2.style.display = 'none';
    Q2A1.style.display = 'none';
    Q2A2.style.display = 'none';
    Q2A3.style.display = 'none';
    nextButtonQ23.style.display = 'none';
    console.log('something is happening here');

    Q3.style.display = 'block';
    Q3A1.style.display = 'block';
    Q3A2.style.display = 'block';
    Q3A3.style.display = 'block';
    nextButtonQ34.style.display = 'block';
    console.log('something is happening here TOO');
}

nextButtonQ23.addEventListener('click', nextPage45);

const countingSquire3 = (x) => {
    if (x === 1) {
        playerScore = playerScore;
    console.log(`option is ${x}, a neutral option. No change, playerscore: ${playerScore}`); }
    else if (x === 2) {
        playerScore += 1;
        console.log(`option is ${x}, a right option. SQUIRE adds playerscore: ${playerScore}`); }
    else if (x === 3) {
        playerScore = playerScore;
        playerScore -= 1;
        console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    }

const countPoint3 = (x) => {
    console.log(`PLAYER SCORE IS NOW ${playerScore}`); 
    return () => countingSquire3(x);
}

q3a1Button.addEventListener('click',countPoint3(1));
q3a2Button.addEventListener('click',countPoint3(2));
q3a3Button.addEventListener('click',countPoint3(3));

//page 5 to page 6, game question 4
const nextPage56 = (event) => { 
    Q3.style.display = 'none';
    Q3A1.style.display = 'none';
    Q3A2.style.display = 'none';
    Q3A3.style.display = 'none';
    nextButtonQ34.style.display = 'none';
    console.log('something is happening here');

    Q4.style.display = 'block';
    Q4A1.style.display = 'block';
    Q4A2.style.display = 'block';
    Q4A3.style.display = 'block';
    nextButtonQ45.style.display = 'block';
    console.log('something is happening here TOO');
}

nextButtonQ34.addEventListener('click', nextPage56);

const countingSquire4 = (x) => {
    if (x === 1) {
    playerScore -= 1;
    console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    else if (x === 2) {
        playerScore -= 1;
        console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    else if (x === 3) {
        playerScore = playerScore;
        console.log(`option is ${x}, a neutral option. No change, playerscore: ${playerScore}`); }
    }

const countPoint4 = (x) => {
    console.log(`PLAYER SCORE IS NOW ${playerScore}`); 
    return () => countingSquire4(x);
}

q4a1Button.addEventListener('click',countPoint4(1));
q4a2Button.addEventListener('click',countPoint4(2));
q4a3Button.addEventListener('click',countPoint4(3));

//page 6 to page 7, end screen
const nextPage67 = (event) => { 
    Q4.style.display = 'none';
    Q4A1.style.display = 'none';
    Q4A2.style.display = 'none';
    Q4A3.style.display = 'none';
    nextButtonQ45.style.display = 'none';
    console.log('something is happening here');

    Q5.style.display = 'block';
    Q5A1.style.display = 'block';
    Q5A2.style.display = 'block';
    Q5A3.style.display = 'block';
    nextButtonQ5end.style.display = 'block';
    console.log('something is happening here TOO');
}

nextButtonQ45.addEventListener('click', nextPage67);

const countingSquire5 = (x) => {
    if (x === 1) {
    playerScore -= 1;
    console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    else if (x === 2) {
        playerScore -= 1;
        console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore: ${playerScore}`); }
    else if (x === 3) {
        playerScore += 1;

        console.log(`option is ${x}, a right option. SQUIRE adds playerscore: ${playerScore}`); }
    }

const countPoint5 = (x) => {
    console.log(`PLAYER SCORE IS NOW ${playerScore}`); 
    return () => countingSquire5(x);
}

q5a1Button.addEventListener('click',countPoint5(1));
q5a2Button.addEventListener('click',countPoint5(2));
q5a3Button.addEventListener('click',countPoint5(3));

const moveToEndScreen = () => {
console.log('can anyone see this');

gameBox.style.display = 'none';
endScreen.style.display = 'block';
}
nextButtonQ5end.addEventListener('click',moveToEndScreen);
    
const backToStart = () => {
    endScreen.style.display = 'none';
    introBox.style.display = 'block';
    console.log(`ending the game, score is ${playerScore}`);
    playerScore = 5;
    console.log(`restarting the game, score is ${playerScore}`);
}

replayButton.addEventListener('click', backToStart);


 /*----- render functions -----*/
const render = () => {};

 /*----- functions -----*/

const diffCallback = () => {
    //please write a difficulty selector function
    // to return an element, to assign to the variable
}

const scoreLogic = (x) => {
if (x === 'wrong') {
playerScore -= 1; }}

const main = () => {
diffButton();
render();
 };

 /*----- questions -----*/
// an array of object questions.
// each object has the q number, options as objects (options, correct/wrong stattus) 
let QnA = [
{qNumber: 1, 
option1: ['1) Provide your real name: "Hi, I am (real name)"','wrong'],
option2: ['2) Provide a ficticious name instead: "Hi, I am Gandalf Bai"','correct'],
option3: ['3) Get to the point: "Hi, how can I help you?"','correct']},

{qNumber: 2,
    option1: ['1) Not very sure of the job but I am open to opportunities: "Ok, why not?"','correct'],
    option2: ['2) The HR company will need to contact me so it is better to provide my number: "ok, my number is [actual number]"','wrong'],
    option3: ['3) Not sure of the job, but use a friends number first. Will inform the friend after too, of this good opportunity: "sure, my number is [a friends number]"','wrong']},

{qNumber: 3,
    option1: ['1) Answer in a range: "40-45"','correct'],
    option2: ['2) Decline to answer now: "Maybe I can inform the company specificallly?"','correct'],
    option3: ['3) Share actual age, as the company will require this detail: "42" ','wrong']},

{qNumber: 4,
    option1: ['1) I could do with the flexible working arrangement and money. Click to download.','wrong'],
    option2: ['2) I am not sure what is in the file, downloading is the only way to find out.','wrong'],
    option3: ['3) I am not sure what is in the file, and downloading unknown files can be bad for my phone.','correct']},
    
{qNumber: 5,
    option1: ['1) Pick up call immediately as HR wants to talk to me.','wrong'],
    option2: ['2) You are not free, now and you ask for another time for call back.','wrong'],
    option3: ['3) You decide this looks too suspicious.','correct']},
]

 //* main operating
main();

