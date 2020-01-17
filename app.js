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
      
       const computerNumber = Math.floor(Math.random() * 3);
       const computerChoice = computerOptions[computerNumber];
       
     });
  });   
 };

const compareHands = (playerChoice, computerChoice) =>{
     //Update Text
     const winner = document.querySelector('.winner');
     //Chacking for a tie
     if(playerChoice === computerChoice){
        return winner.textContent = 'It is a tie!';
     }
     //Check for Rock
     if(playerChoice === 'rock' && computerChoice === 'scissors'){
       return winner.textContent = 'You Win!'
     }else {
       return winner.textContent = 'Computer Wins'
     }

     //Check for Paper
     if (playerChoice === "paper" && computerChoice === "scissors") {
         return (winner.textContent = "Computer Wins");
     } else {
         return (winner.textContent = "You Win!");
     } 
     //Check for Scissor
     if (playerChoice === "scissors" && computerChoice === "rock") {
         return (winner.textContent = "Computer Wins");
     } else {
         return (winner.textContent = "You Win!");
     } 

}

startGame();
playMatch();

};

game();
