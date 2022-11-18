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

// function that plays five rounds and declares a winner of the match
function game() {

   // declare initial variables
   let computerWins = 0;
   let playerWins = 0;
   let ties = 0;

   let matchresult;

   // cycle through 5 rounds of play and increment results to display after
   for (let round = 0; round < 5; round++) {

      let playerChoice = prompt('Player, choose paper, rock or scissors: ').toLowerCase();
      let computerChoice = getComputerChoice();

      console.log(`Player you chose: ${playerChoice}`);
      console.log(`The computer chose: ${computerChoice}`);

      matchresult = playRound(computerChoice, playerChoice);

      console.log(`The result is: ${matchresult}`);

      if (matchresult === 'computer wins') {
         ++computerWins;
      } else if (matchresult === 'player wins') {
         ++playerWins;
      } else if (matchresult === 'tie') {
         ++ ties;
      }
   }

   // display match results
   console.log(`Player Wins: ${playerWins}`);
   console.log(`Computer Wins: ${computerWins}`);
   console.log(`Ties: ${ties}`);
}

//game();
