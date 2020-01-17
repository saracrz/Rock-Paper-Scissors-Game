const game = ()=>{
let pScore = 0;
let cScore = 0;

const startGame = ()=>{
  const playBtn = document.querySelector(".intro button");
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');

  playBtn.addEventListener('click', () =>{
    introScreen.classList.add('fadeOut');
    match.classList.add('fadeIn');
});
};
 
//Play Match
 const playMatch = () => {
   const options = document.querySelectorAll('.options button');
   const playerHand = document.querySelectorAll('.player-hand');
   const computerHand = document.querySelector('.computer-hand');
   //Computer Options
   const computerOptions = ['rock', 'paper', 'scissors'];

   options.forEach(option =>{
     option.addEventListener('click', function(){
    //Computer Choice 
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    //Here is where we call compare hands
    compareHands(this.textContent, computerChoice);
    // Update Images
     playerHand.src = `./assets/${this.textContent}.png`;
     computerHand.src = `./assets/${computerChoice}.png`;
     });
  });   
 };

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
         winner.textContent = 'Player Wins'
         return;
       }else{
         winner.textContent = 'Computer Wins';
         return;
       }
     }

     //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          return;
        } else {
          winner.textContent = "Player Wins";
          return;
        }
      }
     //Check for Scissor
     if (playerChoice === "scissors") {
       if (computerChoice === "rock") {
         winner.textContent = "Computer Wins";
         return;
       } else {
         winner.textContent = "Player Wins";
         return;
       }
     }
}

startGame();
playMatch();

};

game();
