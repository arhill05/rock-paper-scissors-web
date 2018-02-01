const options = ['paper', 'rock', 'scissors'];

const playGame = (playerChoice) => {
    let response = '';
    let index = Math.floor(Math.random() * 3);
    const computerChoice = options[index];
    switch (computerChoice) {
        case 'paper':
            response = "computer chose paper. ";
            switch (playerChoice) {
                case 'paper':
                    response += 'draw';
                    break;
                case 'rock':
                    response += 'Computer wins';
                    break;
                case 'scissors':
                    response += 'Player wins';
                    break;
            }
            break;
        case 'rock':
            response = "computer chose rock. ";
            switch (playerChoice) {
                case 'paper':
                    response += 'Player wins';
                    break;
                case 'rock':
                    response += 'Draw';
                    break;
                case 'scissors':
                    response += 'Computer wins';
                    break;
            }
            break;
        case 'scissors':
        response = "computer chose scissors. ";
            switch (playerChoice) {
                case 'paper':
                    response += 'Computer wins';
                    break;
                case 'rock':
                    response += 'Player wins';
                    break;
                case 'scissors':
                    response += 'Draw';
                    break;
            }
            break;
        default:
            response = 'error';
    }

    return response;
}

const onPaperClick = () => {
    const result = playGame('paper');
    document.querySelector('#results').innerHTML = result;
}

const onRockClick = () => {
    const result = playGame('rock');
    document.querySelector('#results').innerHTML = result;
}

const onScissorsClick = () => {
    const result = playGame('scissors');
    document.querySelector('#results').innerHTML = result;
}

document.getElementById('paper').onclick = onPaperClick;
document.getElementById('rock').onclick = onRockClick;
document.getElementById('scissors').onclick = onScissorsClick;