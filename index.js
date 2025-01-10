let player1_input = document.getElementById('player1')
let player2_input = document.getElementById('player2')
let rollDice_Button = document.getElementById('rollDice')
let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')
let dice1_score = document.getElementById('dice1_score')
let dice2_score = document.getElementById('dice2_score')
let winner = document.getElementById('winner')


// check winner
function displayWinner(dice_value1, dice_value2, player1, player2) {
    if (dice_value1 == dice_value2) {
        winner.innerHTML = `<h3>DRAW</h3>`
    }
    else if (dice_value1 < dice_value2) {
        winner.innerHTML = `<h3>${player2} wins!</h3>`
    }
    else {
        winner.innerHTML = `<h3>${player1} wins!</h3>`
    }
}

// get player names
function getPlayerNames(player1_input, player2_input) {
    let player1 = player1_input.value || 'Player1';
    let player2 = player2_input.value || 'Player2';

    return [player1, player2]
}

function showDiceDetails(dice_value1, dice_value2) {

    // show dice
    dice1.innerHTML = `<img src=Assets/dice${dice_value1}.png>`;
    dice2.innerHTML = `<img src=Assets/dice${dice_value2}.png>`;

    // show score
    dice1_score.innerHTML = `<p>Score: ${dice_value1}</p>`
    dice2_score.innerHTML = `<p>Score: ${dice_value2}</p>`
}

function rollDice() {
    // get player names
    let [player1, player2] = getPlayerNames(player1_input, player2_input)

    // rolling the dice
    dice1.innerHTML = `<img src="Assets/diceroll2.gif" alt="Rolling...">`;
    dice2.innerHTML = `<img src="Assets/diceroll2.gif" alt="Rolling...">`;

    // getting value for dice
    let dice_value1 = Math.floor(Math.random() * 6) + 1
    let dice_value2 = Math.floor(Math.random() * 6) + 1

    // show dice and score
    setTimeout(() => {
        showDiceDetails(dice_value1, dice_value2)
    }, 1000);

    // winner
    setTimeout(() => {
        displayWinner(dice_value1, dice_value2, player1, player2)
    }, 1000)


}

rollDice_Button.addEventListener('click', rollDice)
