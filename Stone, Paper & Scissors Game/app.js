let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // To access
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {  // Generate Computer Choice
    const options = ["rock", "paper", "scissors"]; 
    const randIdx = Math.floor(Math.random() * 3); // To generate random integer from 0, 1, 2
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame(); // Draw Game
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {  // To track the click event
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})