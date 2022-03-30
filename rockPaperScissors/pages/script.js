
// const winDecider = true;
let playerWinCount = 0;
let computerWinCount = 0;
// function computerPlay(choices) 
// {
//     return choices[Math.floor(Math.random()*choices.length)]

// }
// computerPlay(['rock','paper','scissors']);


// function playRound(playerSelection, computerSelection)
//  {
     
// switch(true)
// {
//     case playerSelection===computerSelection:
        
//         return ('Computer\'s selection: '+computerSelection+
//         "\nIt's a draw"+
//         '\n ------------------------------'+
//             '\nYour Wins: ' +playerWinCount+' Computer\'s wins: '+computerWinCount+
//             '\n ------------------------------'); ;
//         break;
//     case playerSelection === 'rock' && computerSelection === 'paper':
//         computerWinCount++;
//         return ('Computer\'s selection: '+computerSelection+
//         " \nYou lose, paper beats rock"+
//         '\n ------------------------------'+
//             '\nYour Wins: ' +playerWinCount+' Computer\'s wins: '+computerWinCount+
//             '\n ------------------------------'); ;
//         break;
//         case playerSelection === 'paper' && computerSelection === 'rock':
//             playerWinCount++;
//             return ('Computer\'s selection: '+computerSelection+
//             "\n You win, paper beats rock"+
//             '\n ------------------------------'+
//             '\nYour Wins: ' +playerWinCount+' Computer\'s wins: '+computerWinCount+
//             '\n ------------------------------'); ;
//         break;
//         case playerSelection === 'scissors' && computerSelection === 'paper':
//             playerWinCount++;
//             return ('Computer\'s selection: '+computerSelection+
//             " \nYou win, scissors beats paper"+
//             '\n ------------------------------'+
//             '\nYour Wins: ' +playerWinCount+' Computer\'s wins: '+computerWinCount+
//             '\n ------------------------------'); ;
//         break;
//         case playerSelection === 'scissors' && computerSelection === 'rock':
//             computerWinCount++;
//             return ('Computer\'s selection: '+computerSelection+
//             " \nYou lose, rock beats scissors"+
//             '\n ------------------------------'+
//             '\nYour Wins: ' +playerWinCount+' Computer\'s wins: '+computerWinCount+
//             '\n ------------------------------'); ;
//         break;
//         case playerSelection === 'paper' && computerSelection === 'scissors':
//             computerWinCount++;
//             return ('Computer\'s selection: '+computerSelection+
//             " \nYou lose, scissors beats paper"+
//             '\n ------------------------------'+
//             '\nYour Wins: ' +playerWinCount+' Computer\'s wins: '+computerWinCount+
//             '\n ------------------------------'); ;
//         break;
//         case playerSelection === 'rock' && computerSelection === 'scissors':
//             playerWinCount++;
//             return('Computer\'s selection: '+ computerSelection+ 
//             " \nYou win, rock beats scissors" + 
//             '\n ------------------------------'+
//             '\nYour Wins: ' +playerWinCount+' Computer\'s wins: '+computerWinCount+
//             '\n ------------------------------'); 
        
// }
//   }
  
//   const playerSelection = prompt('Rock, Paper, Scissors!').toLowerCase();
//   const computerSelection = computerPlay(['rock','paper','scissors']);
//   console.log(playRound(playerSelection, computerSelection))
//   function game ()
//   {
//     for (let i = 1; i < 5; i++)
//     {       
//         const playerSelection = prompt('Rock, Paper, Scissors!').toLowerCase(); 
//         const computerSelection = computerPlay(['rock','paper','scissors']);
//          console.log(playRound(playerSelection, computerSelection));
        
//     }
//   }
//   game();
//   if (playerWinCount>computerWinCount)
//   {
//       console.log('Hurray!! You win :)')
//   }
//   else if (playerWinCount===computerWinCount)
//   {
//       console.log('it\'s a draw :3')
//   }
// else{
//     console.log('Ohh No!!You lose :(')
// }