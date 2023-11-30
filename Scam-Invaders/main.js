/*----- constants -----*/
//N/A
/*----- state variables -----*/

let startScore = 8;
let playerScore = startScore;

let allowedTime = 8;

/*----- cached elements  -----*/

const contButton1 = document.getElementById('contButton1');
console.log(contButton1);
const introBox = document.querySelector('.intro_box');
const diffNameBox = document.querySelector('.diff_name_box');
let playerName ='';
const nameSubmitButton = document.getElementById('name_button');

const gameScreen = document.querySelector('.game_screen');
const gameBox = document.querySelector('.game_box');
const startButton = document.getElementById('startButton');
const ansSubmitButton = document.querySelector('.submitButton');

const q1a1Button = document.getElementById('Q1A1');
const q1a2Button = document.getElementById('Q1A2');
const q1a3Button = document.getElementById('Q1A3');
const Q1 = document.getElementById('Q1');
const Q1A1 = document.getElementById('Q1A1');
const Q1A2 = document.getElementById('Q1A2');
const Q1A3 = document.getElementById('Q1A3');
const nextButtonQ12 = document.getElementById('nextButtonQ12');
const quoteNameSpecialQ = document.getElementById('quoteName');

const Q1M1 = document.getElementById('Q1M1');
const Q1M2 = document.getElementById('Q1M2');
const Q1M3 = document.getElementById('Q1M3');

const q2a1Button = document.getElementById('Q2A1');
const q2a2Button = document.getElementById('Q2A2');
const q2a3Button = document.getElementById('Q2A3');
const Q2 = document.getElementById('Q2');
const Q2A1 = document.getElementById('Q2A1');
const Q2A2 = document.getElementById('Q2A2');
const Q2A3 = document.getElementById('Q2A3');
const nextButtonQ23 = document.getElementById('nextButtonQ23');

const q3a1Button = document.getElementById('Q3A1');
const q3a2Button = document.getElementById('Q3A2');
const q3a3Button = document.getElementById('Q3A3');
const Q3 = document.getElementById('Q3');
const Q3A1 = document.getElementById('Q3A1');
const Q3A2 = document.getElementById('Q3A2');
const Q3A3 = document.getElementById('Q3A3');
const nextButtonQ34 = document.getElementById('nextButtonQ34');

const q4a1Button = document.getElementById('Q4A1');
const q4a2Button = document.getElementById('Q4A2');
const q4a3Button = document.getElementById('Q4A3');
const Q4 = document.getElementById('Q4');
const Q4A1 = document.getElementById('Q4A1');
const Q4A2 = document.getElementById('Q4A2');
const Q4A3 = document.getElementById('Q4A3');
const nextButtonQ45 = document.getElementById('nextButtonQ45');

const q5a1Button = document.getElementById('Q5A1');
const q5a2Button = document.getElementById('Q5A2');
const q5a3Button = document.getElementById('Q5A3');
const Q5 = document.getElementById('Q5');
const Q5A1 = document.getElementById('Q5A1');
const Q5A2 = document.getElementById('Q5A2');
const Q5A3 = document.getElementById('Q5A3');
const nextButtonQ5end = document.getElementById('nextButtonQ5end');

const endScreen = document.querySelector('.end_Screen');
const endTitle = document.querySelector('.end_title');
const pointsNthanks = document.getElementById('pointsNthanks');
const replayButton = document.getElementById('replayButton');

const secondsLeft = document.querySelector('.timer_sec');
const quoteButtons = document.getElementsByClassName('quote');

const questionClass = document.getElementsByClassName('question');
const optionClass = document.getElementsByClassName('option');
const messagesClass = document.getElementsByClassName('messages');
const endPics = document.getElementsByClassName('endpics');
const endWin = document.getElementById('endStateWin');
const endMed = document.getElementById('endStateMed');
const endLose = document.getElementById('endStateLose');

/*----- Event listeners and Render functions -----*/

//page 1 to page 2
const nextPage12 = () => {
    introBox.style.display = 'none';
    console.log('introbox status: ', introBox.style.display);
    diffNameBox.style.display = 'block';
    console.log('namebox status: ', diffNameBox.style.display);
}

contButton1.addEventListener('click', nextPage12);
nameSubmitButton.addEventListener('click', recordName);

//page 2 to page 3, Game start, question 1 ==================================
const nextPage23 = () => {
    diffNameBox.style.display = 'none';
    console.log('namebox status: ', diffNameBox.style.display);
    gameScreen.style.display = 'block';
    gameBox.style.display = 'block';

    // Display = None consolidator function here
    QnOptnMsgReset();
    nextButtonQ5end.style.display = 'none';
 
    Q1.style.display = 'block';
    Q1A1.style.display = 'block';
    Q1A2.style.display = 'block';
    Q1A3.style.display = 'block';
    nextButtonQ12.style.display = 'block';
    //special just for this option!
    if (playerName !='' ) {quoteNameSpecialQ.innerText = `Hi, I am ${playerName}.`;}

    Q1M1.style.display = 'block';
    Q1M2.style.display = 'block';
    Q1M3.style.display = 'block';

    activateTimer(allowedTime);

    console.log('gamebox status: ', gameScreen.style.display);
}

startButton.addEventListener('click', nextPage23);

q1a1Button.addEventListener('click', countPoint(1, 1));
q1a2Button.addEventListener('click', countPoint(1, 2));
q1a3Button.addEventListener('click', countPoint(1, 3));

//page 3 to page 4, game question 2====================================
const nextPage34 = (event) => {
 
    QnOptnMsgReset(); 
    nextButtonQ12.style.display = 'none';
    console.log('Q1 off');
 
    Q2.style.display = 'block';
    Q2A1.style.display = 'block';
    Q2A2.style.display = 'block';
    Q2A3.style.display = 'block';
    nextButtonQ23.style.display = 'block';
    Q2M1.style.display = 'block';
    Q2M2.style.display = 'block';
    Q2M3.style.display = 'block';
    console.log('Q2 on');

    activateTimer(allowedTime);
    resetOptionButtons();
}

nextButtonQ12.addEventListener('click', nextPage34);

q2a1Button.addEventListener('click', countPoint(2, 1));
q2a2Button.addEventListener('click', countPoint(2, 2));
q2a3Button.addEventListener('click', countPoint(2, 3));

//page 4 to page 5, game question 3====================================
const nextPage45 = (event) => {
    
    QnOptnMsgReset();
    nextButtonQ23.style.display = 'none';
    console.log('Q2 off');

    Q3.style.display = 'block';
    Q3A1.style.display = 'block';
    Q3A2.style.display = 'block';
    Q3A3.style.display = 'block';
    nextButtonQ34.style.display = 'block';
    Q3M1.style.display = 'block';
    Q3M2.style.display = 'block';
    Q3M3.style.display = 'block';
    console.log('Q3 on');

    activateTimer(allowedTime);
    resetOptionButtons();
}

nextButtonQ23.addEventListener('click', nextPage45);

q3a1Button.addEventListener('click', countPoint(3, 1));
q3a2Button.addEventListener('click', countPoint(3, 2));
q3a3Button.addEventListener('click', countPoint(3, 3));

//page 5 to page 6, game question 4===================================
const nextPage56 = (event) => {
    QnOptnMsgReset();
    nextButtonQ34.style.display = 'none';
    console.log('Q3 off');

    Q4.style.display = 'block';
    Q4A1.style.display = 'block';
    Q4A2.style.display = 'block';
    Q4A3.style.display = 'block';
    nextButtonQ45.style.display = 'block';
    Q4M1.style.display = 'block';
    Q4M2.style.display = 'block';
    Q4M3.style.display = 'block';
    Q4M4.style.display = 'block';
    console.log('Q4 on');

    activateTimer(allowedTime);
    resetOptionButtons();
}

nextButtonQ34.addEventListener('click', nextPage56);

q4a1Button.addEventListener('click', countPoint(4, 1));
q4a2Button.addEventListener('click', countPoint(4, 2));
q4a3Button.addEventListener('click', countPoint(4, 3));

//page 6 to page 7, end screen=========================================
const nextPage67 = (event) => {
    QnOptnMsgReset();
    nextButtonQ45.style.display = 'none';
    console.log('Q4 off');

    Q5.style.display = 'block';
    Q5A1.style.display = 'block';
    Q5A2.style.display = 'block';
    Q5A3.style.display = 'block';
    nextButtonQ5end.style.display = 'block';
    Q5M1.style.display = 'block';
    Q5M2.style.display = 'block';
    Q5M3.style.display = 'block';
    console.log('Q5 on');

    activateTimer(allowedTime);
    resetOptionButtons();
}

nextButtonQ45.addEventListener('click', nextPage67);

q5a1Button.addEventListener('click', countPoint(5, 1));
q5a2Button.addEventListener('click', countPoint(5, 2));
q5a3Button.addEventListener('click', countPoint(5, 3));

nextButtonQ5end.addEventListener('click', moveToEndScreen);
replayButton.addEventListener('click', backToStart);

/*----- functions -----*/
//*P1
//page move functions          DONE    ABOVE
//game scoring function        DONE    CONSOLIDATED
//show final score function    DONE
//restart function             DONE

//*P2
//difficulty/variety function  N/A
//timer function               DONE    
//option reset function        DONE    CONSOLIDATED
//optimize pg display function DONE    CONSOLIDATED
//overall main function        N/A

//*P3
//input & return name function DONE
//name-to-other use functions  DONE

//* Future
//Question & option load-in    ICE                 
//Messages load-in             ICE

// game scoring functions (part 1)
function countPoint(q, x) {
    console.log(`LOG: PLAYER SCORE IS NOW ${playerScore}`);
    return () => countingSquire(q, x);
}

function countingSquire(q, x) {
    for (let i = 0; i < quoteButtons.length; i++) {
        quoteButtons[i].disabled = true;
    }

    if (q === 1) {

        console.log('This is Q1');
        if (x === 1) {
            aWrongOption(x);
        }
        else if (x === 2) {
            aGoodOption(x);
        }
        else if (x === 3) {
            aNeutralOption(x);
        }
    }

    else if (q === 2) {
        console.log('This is Q2');
        if (x === 1) {
            aGoodOption(x);
        }
        else if (x === 2) {
            aVeryWrongOption(x);
        }
        else if (x === 3) {
            aWrongOption(x);
        }
    }

    else if (q === 3) {
        console.log('This is Q3');
        if (x === 1) {
            aGoodOption(x);
        }
        else if (x === 2) {
            aGoodOption(x);
        }
        else if (x === 3) {
            aWrongOption(x);
        }
    }

    else if (q === 4) {
        console.log('This is Q4');
        if (x === 1) {
            aVeryWrongOption(x);
        }
        else if (x === 2) {
            aVeryWrongOption(x);
        }
        else if (x === 3) {
            aGreatOption(x);;
        }
    }

    else if (q === 5) {
        console.log('This is Q5');
        if (x === 1) {
            aVeryWrongOption(x);
        }
        else if (x === 2) {
            aWrongOption(x);
        }
        else if (x === 3) {
            aGreatOption(x);
        }
    }
}

// game scoring functions (part 2)
function aGreatOption(x) {
    playerScore += 2;
    console.log(`option is ${x}, a great option. SQUIRE adds playerscore by 2: ${playerScore}`);
    console.log('this is the aGreatOption speaking');
}

function aGoodOption(x) {
    playerScore += 1;
    console.log(`option is ${x}, a right option. SQUIRE adds playerscore by 1: ${playerScore}`);
    console.log('this is the aRighttOption speaking');
}

function aNeutralOption(x) {
    playerScore = playerScore;
    console.log(`option is ${x}, a neutral option. No change, playerscore: ${playerScore}`);
    console.log('this is the aNeutralOption speaking');
}

function aWrongOption(x) {
    playerScore -= 1;
    console.log(`option is ${x}, a wrong option. SQUIRE reduces playerscore by 1: ${playerScore}`);
    console.log('this is the aWrongOption speaking');
}

function aVeryWrongOption(x) {
    playerScore -= 2;
    console.log(`option is ${x}, a very wrong option. SQUIRE reduces playerscore by 2: ${playerScore}`);
    console.log('this is the aVeryWrongOption speaking');
}


//show final score function    
function moveToEndScreen() {
    console.log('Moving to the last screen');
    console.log(pointsNthanks);

    if (playerScore > 11) {
        endTitle.innerText = 'Congratulations!';
        endPicsReset();
        endWin.style.display = 'block';
        pointsNthanks.innerText = `${playerName}, you successfully defended against a scammer, evading their best tricks!`;
        pointsNthanks.innerHTML += '<br/>';
        pointsNthanks.innerHTML += `<strong>Your score: ${playerScore} out of 15</strong>`;
    } else if (playerScore > 8 && playerScore < 12) {
        endTitle.innerText = 'Decent effort!';
        endPicsReset();
        endMed.style.display = 'block';
        pointsNthanks.innerText = `${playerName}, you sensed something is amiss...and resisted some scammy moves!`;
        pointsNthanks.innerHTML += '<br/>';
        pointsNthanks.innerHTML += `<strong>Your score: ${playerScore} out of 15</strong>`;
    } else {
        endTitle.innerText = 'Oh no, try again!';
        endPicsReset();
        endLose.style.display = 'block';
        pointsNthanks.innerText = `${playerName}, you fell for the scam and gave important personal information away...`;
        pointsNthanks.innerHTML += '<br/>';
        pointsNthanks.innerHTML += `<strong>Your score: ${playerScore} out of 15</strong>`;
    }

    gameBox.style.display = 'none';
    endScreen.style.display = 'block';
}

//restart function             
function backToStart() {
    endScreen.style.display = 'none';
    introBox.style.display = 'block';
    console.log(`ending the game, score is ${playerScore}`);
    playerScore = startScore;
    for (let i = 0; i < quoteButtons.length; i++) {
        console.log(`button id ${i} is now disabled: ${quoteButtons[i].disabled}`);
        quoteButtons[i].disabled = false;
        console.log(`button id ${i} is now disabled: ${quoteButtons[i].disabled}`);
    }
    console.log(`restarting the game, score is ${playerScore}`);
}

//*P2
//input & return name function 
function recordName() {
    playerName = document.getElementById('playerField').value;
    }

//timer function
function activateTimer(time) {
    secondsLeft.innerText = `${allowedTime}`;
    let clock = setInterval(countDown, 1000);

    function countDown() {
        if (time > 0) {
            secondsLeft.innerText = `${time}`;
            console.log(`time left: ${time}`);
            time -= 1;
        }
        /*             else if ( ) {
                    clearInterval(clock);
                    } */
        else if (time === 0) {
            secondsLeft.innerText = `${time}`;
            console.log('time is up ');

            const buttons = document.getElementsByClassName('quote');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
            clearInterval(clock);
        }
    }
}

//option reset function 
function resetOptionButtons() {
    for (let i = 0; i < quoteButtons.length; i++) {
/*         console.log(`button id ${i} is now disabled: ${quoteButtons[i].disabled}`);*/
        quoteButtons[i].disabled = false;
/*         console.log(`button id ${i} is now disabled: ${quoteButtons[i].disabled}`);*/    }
}

//optimize pg display function  
function QnOptnMsgReset() {
    for (let i = 0; i < questionClass.length; i++) {
        questionClass[i].style.display = 'none';
    }

    for (let i = 0; i < optionClass.length; i++) {
        optionClass[i].style.display = 'none';
    }

    for (let i = 0; i < messagesClass.length; i++) {
        messagesClass[i].style.display = 'none';
    }
}

function endPicsReset() {
    for (let i = 0; i < endPics.length; i++) {
        endPics[i].style.display = 'none';
    }
}

/*----- questions -----*/
// an array of object questions.
// each object has the q number, options as objects (options, correct/wrong stattus) 
let QnA = [
    {
        qNumber: 1,
        option1: ['1) Provide your real name: "Hi, I am (real name)"', 'wrong'],
        option2: ['2) Provide a ficticious name instead: "Hi, I am Gandalf Bai"', 'correct'],
        option3: ['3) Get to the point: "Hi, how can I help you?"', 'correct']
    },

    {
        qNumber: 2,
        option1: ['1) Not very sure of the job but I am open to opportunities: "Ok, why not?"', 'correct'],
        option2: ['2) The HR company will need to contact me so it is better to provide my number: "ok, my number is [actual number]"', 'wrong'],
        option3: ['3) Not sure of the job, but use a friends number first. Will inform the friend after too, of this good opportunity: "sure, my number is [a friends number]"', 'wrong']
    },

    {
        qNumber: 3,
        option1: ['1) Answer in a range: "40-45"', 'correct'],
        option2: ['2) Decline to answer now: "Maybe I can inform the company specificallly?"', 'correct'],
        option3: ['3) Share actual age, as the company will require this detail: "42" ', 'wrong']
    },

    {
        qNumber: 4,
        option1: ['1) I could do with the flexible working arrangement and money. Click to download.', 'wrong'],
        option2: ['2) I am not sure what is in the file, downloading is the only way to find out.', 'wrong'],
        option3: ['3) I am not sure what is in the file, and downloading unknown files can be bad for my phone.', 'correct']
    },

    {
        qNumber: 5,
        option1: ['1) Pick up call immediately as HR wants to talk to me.', 'wrong'],
        option2: ['2) You are not free, now and you ask for another time for call back.', 'wrong'],
        option3: ['3) You decide this looks too suspicious.', 'correct']
    },
]
