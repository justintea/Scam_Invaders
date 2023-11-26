there should be 3 screens
1. start screen
2. game screen
3. win/lose screen

1 START SCREEN ==========================================
- will have welcome message
- will have game description 
- will have 'Choose difficulty' 
- then make disappear

2 GAME SCREEN ===========================================
- is disappeared first
- after difficulty selected, this screen appears
- 1st message appears
- 2nd message appears 
- some time delay as per message
- 3 options for the player pop up 
- as a player, i want to click 1 of 3 buttons, so that that registers my response
- b/e logic - conversational script

//Game logic
- if bad answer = -1, otherwise no diff. (in other words, players start with full marks/credits)
- questions will go through various stages of QnA from the scammer
- player loses point if 
    give personal info, ic, age
    give financial info
    click on call to call numbers
    download files
    click on links
    send a screenshot
- tabulate points at end of convo

3 WIN/LOSE SCREEN ========================================
- win: 'Congratulations! You successfully defended against a scam!'
- lose: 'You fell for a scam!' (state point losses)
- a retry again button

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
IMPLEMENTATION PLAN

- Sat-Sun: high-level PLAN
- Sun: code foundations of 3 screens, a bit deeper start on the GameScreen
- Mon: draft conversational flow/script, internal points system n tracking, designing archi of questions-answer for easier future updates of questions.
- Mon: GameScreen
- Tues: MVP
- Wed: Build / refine
- Thu: Build / refine
- Fri: Launch
