//  random choice generating function for computer
const getComputerChoice = () => {

   let choice = Math.ceil(Math.random() * 3);
   
   switch (choice) {
      case 1 :
         return 'rock';
         break;
      case 2 :
         return 'paper';
         break;
      case 3 :
         return 'scissors';
         break;
      default:
         return 'error';
         break;
   }
}


// function that plays a single round for user and computer. It should take two variables and compare the values to eachother's 
function playRound(computerChoice, playerChoice) {

   // check if values are the same first, then if they are diffrent.

   if (playerChoice === computerChoice) {
      return 'tie';
   } else if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
         return 'computer wins';
      } else {
         return 'player wins';
      }
   } else if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
         return 'computer wins';
      } else {
         return 'player wins';
      }
   } else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
         return 'computer wins';
      } else {
         return 'player wins';
      }
   }

}

// declare initial variables
   let computerWins = 0;
   let playerWins = 0;
   let ties = 0;
   let rounds = 0;

   let choice;

   let roundResult;
   let matchresult;

// function that plays five rounds and declares a winner of the match
function gameFunction() {

   overallResult.textContent = '';
  
   //let playerChoice = prompt('Player, choose paper, rock or scissors: ').toLowerCase();
   let playerChoice = choice;
   let computerChoice = getComputerChoice();

   playerChose.textContent = playerChoice;
   computerChose.textContent = computerChoice;

   roundResult = playRound(computerChoice, playerChoice);

   if (roundResult === 'computer wins') {
      ++computerWins;
   } else if (roundResult === 'player wins') {
      ++playerWins;
   } else if (roundResult === 'tie') {
      ++ties;
   }; 
   
   ++rounds;

    // display match results
   playerScore.textContent = playerWins;
   computerScore.textContent = computerWins;
   roundTies.textContent = ties;
   roundNum.textContent = rounds;

   if (rounds >= 5) {

      if (computerWins > playerWins) {
         matchresult = 'You have lost the game, Computer wins the match!';
      } else if (playerWins > computerWins) {
         matchresult = 'You are triumphant! Player wins the match.';
      } else if (playerWins === computerWins) {
         matchresult = 'Looks like you are both winners!.. Rematch, maybe?';
      };

      overallResult.textContent = matchresult;

      computerWins = 0;
      playerWins = 0;
      ties = 0;
      rounds = 0;

   };
}


   const rockCard = document.querySelector('#rock');
   rockCard.addEventListener('click', () => {choice = rockCard.id});
   rockCard.addEventListener('click', gameFunction);

   const paperCard = document.querySelector('#paper');
   paperCard.addEventListener('click', () => {choice = paperCard.id});
   paperCard.addEventListener('click', gameFunction);

   const scissorsCard = document.querySelector('#scissors');
   scissorsCard.addEventListener('click', () => {choice = scissorsCard.id});
   scissorsCard.addEventListener('click', gameFunction);

   const playerScore = document.querySelector('.playerScore');

   const computerScore = document.querySelector('.computerScore');

   const roundNum = document.querySelector('.roundNum');

   const roundTies = document.querySelector('.roundTies');

   const playerChose = document.querySelector('.playerChose');

   const computerChose = document.querySelector('.computerChose');

   const overallResult = document.querySelector('.overallResult');
   


