const game = ()=>{
let pScore = 0;
let cScore = 0;

const startGame = ()=>{
  const playBtn = document.querySelector(".intro button");
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');
  const score = document.querySelector('.score');


  playBtn.addEventListener('click', () =>{
    introScreen.classList.add('fadeOut');
    match.classList.add('fadeIn');
    score.classList.add('fadeIn');
});
};
 
// This i a change to test git
 const playMatch = () => {
   const options = document.querySelectorAll(".options button");
   const playerHand = document.querySelector(".player-hand");
   const computerHand = document.querySelector('.computer-hand');
   const hands = document.querySelectorAll('.hands img');

   hands.forEach(hand => {
     hand.addEventListener('animationend', function(){
       this.style.animation = '';
     });
   })

   //Computer Options
   const computerOptions = ['rock', 'paper', 'scissors'];
   options.forEach(option =>{
     option.addEventListener('click', function(){
    //Computer Choice 
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    //Here is where we call compare hands
    setTimeout(()=>{
       compareHands(this.textContent, computerChoice);
       // Update Images
       playerHand.src = `./assets/${this.textContent}.png`;
       computerHand.src = `./assets/${computerChoice}.png`;
    }, 2000)

     //Animation
     playerHand.style.animation = "shakePlayer 2s ease"
     computerHand.style.animation = "shakeComputer 2s ease"
     });
  });   
 };
 //Counter Score
 const updateScore = () =>{
   const playerScore = document.querySelector('.player-score p');
   const computerScore = document.querySelector('.computer-score p');
   playerScore.textContent = pScore;
   computerScore.textContent = cScore;

 }

 const compareHands = (playerChoice, computerChoice) =>{
     //Update Text
     const winner = document.querySelector('.winner');
     //Checking for a tie
     if(playerChoice === computerChoice){
       winner.textContent = 'It is a tie!';
       return;
     }
     //Check for Rock
     if(playerChoice === 'rock' ){
       if(computerChoice === 'scissors'){
         winner.textContent = 'You Win!';
         pScore++;
         return;
       }else{
         winner.textContent = 'Computer Wins';
         cScore++;
         return;
       }
     }

     //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          return;
        } else {
          winner.textContent = "You Win!";
          pScore++;
          return;
        }
      }
     //Check for Scissor
     if (playerChoice === "scissors") {
       if (computerChoice === "rock") {
         winner.textContent = "Computer Wins";
         cScore++;
        
         
         return;
       } else {
         winner.textContent = "You Win!";
         pScore++;
         return;
       }
     }
}

startGame();
playMatch();

};

game();
