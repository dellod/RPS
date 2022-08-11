
function generatePlayerChoice() {
    return Math.floor(Math.random() * 3)
}

function changePlayerChoice(choice, player_image_name) {
    const player = document.querySelector(player_image_name);

    switch(choice) {
        case 0:
            player.src = "images/rock.png";
            break;
        case 1:
            player.src = "images/paper.png";
            break;
        case 2:
            player.src = "images/scissors.png";
            break;
        default:
            break;
    }
}

function determineWinnerAndUpdateResults(player1Choice, player2Choice) {
    const results_label = document.querySelector(".results");

    if(player1Choice === player2Choice) {
        results_label.textContent = "Tie!";
    }
    else if(player1Choice === 0) {
        if(player2Choice === 1) {
            results_label.textContent = "Player 2 wins!";
        } else if(player2Choice === 2) {
            results_label.textContent = "Player 1 wins!";
        }
    }
    else if(player1Choice === 1) {
        if(player2Choice === 0) {
            results_label.textContent = "Player 1 wins!";
        } else if(player2Choice === 2) {
            results_label.textContent = "Player 2 wins!";
        }
    }
    else if(player1Choice === 2) {
        if(player2Choice === 0) {
            results_label.textContent = "Player 2 wins!";
        } else if(player2Choice === 1) {
            results_label.textContent = "Player 1 wins!";
        }
    }
}

function shootPlayerChoices() {
    const player1Choice = generatePlayerChoice();
    const player2Choice = generatePlayerChoice();
    changePlayerChoice(player1Choice, ".player1-image");
    changePlayerChoice(player2Choice, ".player2-image");
    determineWinnerAndUpdateResults(player1Choice, player2Choice)
}