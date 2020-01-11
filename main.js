const getUserChoice = userInput => {
  userInput.toLowerCase();
  if(userInput === 'rock'){
    return userInput;
  }
  else if (userInput === 'paper'){
    return userInput;
  }
  else if(userInput === 'scissors'){
    return userInput;
  }
  else if(userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('Error');
  }
};

const getComputerChoice = () =>{
  var choice;
  choice = Math.floor(Math.random()*3);
  switch(choice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return "scissors";
      break;
  } 
};

const determineWinner = (userChoice,computerChoice) => {
  if(computerChoice === userChoice){
    return 'tie';
  }
  //Rock choice
  else if(userChoice === 'rock'){
    if(computerChoice ==='paper'){
      return 'Computer won';
    }
    else if(computerChoice === 'scissors'){
      return 'You win';
    }
    else{
      return 'draw';
    }
  }
  //Paper choice
  else if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'You Win!';
    }
    else if(computerChoice === 'scissors'){
      return 'Computer Win';
    }
    else{
      return 'draw';
    }
  }
  //scissor case
  else if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'You Win';
    }
    else if(computerChoice === 'rock'){
      return 'Computer Wins';
    }
    else{
      return 'draw';
    }
  }
  else if (userChoice === 'bomb'){
    return 'You Win!';
  }
  
  
};
function playGame(){
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice()
  console.log(`You:${userChoice} Computer:${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
