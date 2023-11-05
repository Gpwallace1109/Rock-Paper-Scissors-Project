//  Rock, Paper, or Scissors 

// How to get userInput
const getUserChoice = userInput => { 
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { 
        return (userInput);
    }
    else { 
        return ('Error...please select rock, paper, or scissors!');
    }
}

// How to get ComputerChoice
const getComputerChoice = () => { 
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) { 
        case 0: 
        return 'rock';
        case 1: 
        return 'paper';
        case 2: 
        return 'scissors';
        case 3: 
        return 'bomb';
    }
};


// How to determine the Winner 
const determineWinner = (getUserChoice, getComputerChoice) => { 
    if (getUserChoice === getComputerChoice) { 
        return 'This game is a tie!';
    } 
    if (getUserChoice === 'rock') { 
        if (getComputerChoice === 'paper')
        return 'The computer won this round!';
    } else { 
        return 'You won this round!';
    }
    if (getUserChoice === 'paper') { 
        if (getComputerChoice === 'scissors')
        return 'The computer won this round!';
    } else { 
        return 'You won this round!';
    }
    if (getUserChoice === 'scissors') { 
        if (getComputerChoice === 'paper')
        return 'You won this round!';
    } else { 
        return 'The computer won this round!';
    }
    if (getUserChoice === 'bomb') { 
        return 'You win! Bomb explodes all!'
    }

};

// Now to Play Game...
const playGame = () => { 
    const userChoice = getUserChoice('Rock'); 
    const computerChoice = getComputerChoice();
    console.log(`You shot ${userChoice}`); 
    console.log(`The computer shot ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
};

// Call Play Game function...
playGame(); 

