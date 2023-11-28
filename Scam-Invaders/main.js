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
/* const difficulty = document.querySelector(diffCallback);
 */const nameInput = document.querySelector('playerName');
//const name submit button

const gameScreen = document.querySelector('.game_screen');

const startButton = document.querySelector('#startButton');
const ansSubmitButton = document.querySelector('.submitButton');

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
    console.log('gamebox status: ', gameScreen.style.display);
}  

startButton.addEventListener('click', nextPage23);

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

