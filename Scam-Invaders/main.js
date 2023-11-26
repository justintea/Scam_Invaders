 /*----- constants -----*/
 const diffType = ['Easy','Medium','Hard'];
 const difficulty = diffType[1];

 /*----- state variables -----*/
let playerscore = 5 ; 

 /*----- cached elements  -----*/


 /*----- event listeners -----*/
const diffButton = () => 
{ document.querySelector('#medButton').addEventListener('click', handleMode('med'))      };





 /*----- render functions -----*/
const render = () => {};

 /*----- functions -----*/

const main = () => {
diffButton();
render();
 };

 //* main operating
main();
