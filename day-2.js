const {readFileSync, promises: fsPromises} = require('fs');

const contents = readFileSync("input-2.txt", 'utf-8');

let strategy = contents.split(/\r?\n/);


// A = rock, B = paper, C = scissors OPPONENT
// X = rock, Y = paper, Z = scissors MINE
// winner = highest score
// total score = sum of scores for each round
// single round = shape (1 for rock, 2 for paper, 3 for scissors) + outcome of the round (0, 3 or 6)



function determineShape(letter) {
    if (letter === "A" || letter === "X") {
        return "rock"
    } else if (letter === "B" || letter === "Y") {
        return "paper"
    } else if (letter === "C" || letter==="Z") {
        return "scissors"
    }
}

function determineScoreShape (shape) {
    if (shape == "rock") {
        return 1
    } else if (shape == "paper") {
        return 2
    } else {
        return 3
    }
}


function determineScoreWinner(player1, player2) {
    if (player1 == player2) {
        return 3
    } else if (player1 == "rock") {
        if (player2 == "scissors") {
            return 0
        } else {
            return 6
        }
    } else if (player1 == "scissors") {
        if (player2 == "paper") {
            return 0
        } else {
            return 6
        }
    } else if (player1 == "paper") {
        if (player2 == "rock") {
            return 0
        } else {
            return 6
        }
    }
}


let totalScore = 0

strategy = strategy.filter(item => !!item)

strategy.forEach((round) => {
    let roundScore = 0
    let opponentPlay = determineShape(round[0])
    let myPlay = determineShape(round[2])
    roundScore += determineScoreWinner(opponentPlay, myPlay) + determineScoreShape(myPlay)
    totalScore += roundScore
})

console.log(totalScore)

//part 2

let newTotalScore = 0

function chooseShape(opponent, result) {
    //lose
    if (result == "X") {
        if (opponent == "rock") {
            return "scissors"
        } else if (opponent == "paper") {
            return "rock"
        } else {
            return "paper"
        }
    //win
    } else if (result == "Z") {
        if (opponent == "rock") {
            return "paper"
        } else if (opponent == "paper") {
            return "scissors"
        } else {
            return "rock"
        }
    //draw
    } else {
        return opponent
    }
}

strategy.forEach((round) => {
    let roundScore = 0
    let opponentPlay = determineShape(round[0])
    let myPlay = chooseShape(opponentPlay, round[2])
    roundScore += determineScoreWinner(opponentPlay, myPlay) + determineScoreShape(myPlay)
    newTotalScore += roundScore
})

console.log(newTotalScore)