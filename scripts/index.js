
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

function shootPlayerChoices() {
    const player1Choice = generatePlayerChoice();
    const player2Choice = generatePlayerChoice();
    changePlayerChoice(player1Choice, ".player1-image");
    changePlayerChoice(player2Choice, ".player2-image");
}