//caching the dom
//storing for future use
let userScore = 0;
let computerScore = 0;
let count =0;
//dom variables
//html variables that store the dom elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
    const choices = ['r', 'p', 's'];
    //builtin object math and random is a method that generates a random number between 0 and 1
    const randomNumber = Math.floor(Math.random() * 3);
    // * 3 will always give a number less than 3
    return choices[randomNumber];
}

function convertToWord(letter)
{
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function checkWinner()
{
    const msg = "game restarting in 10 seconds...".fontsize(2).sub();
    if(userScore > computerScore)
    {
        document.getElementById("mytext").innerHTML = "You Win!";
        document.getElementById("msg").innerHTML = "game restarting in 5 seconds...".fontsize(2);
    }
    else if(userScore < computerScore)
    {
        document.getElementById("mytext").innerHTML = "You Lose!";
        document.getElementById("msg").innerHTML = "game restarting in 5 seconds...".fontsize(2);
    }
    else
    {
        document.getElementById("mytext").innerHTML = "It's a draw!";
        document.getElementById("msg").innerHTML = "game restarting in 5 seconds...".fontsize(2);
    }
    setTimeout(function() {refresh()}, 10000);
}
function insertDataWin()
{
    let data = "user-round"+count;
    document.getElementById(data).innerHTML = 1;
    data = "computer-round"+count;
    document.getElementById(data).innerHTML = 0;
    if(count === 5)
        checkWinner();
}
function insertDataLose()
{
    let data = "user-round"+count;
    document.getElementById(data).innerHTML = 0;
    data = "computer-round"+count;
    document.getElementById(data).innerHTML = 1;
    if(count === 5)
        checkWinner();
}
function wins(userChoice, computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_div.innerHTML = convertToWord(userChoice) + " beats "+ convertToWord(computerChoice) + ". You win!";
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    choice_id = "choice_" + userChoice;
    const userChoice_div = document.getElementById(choice_id);

    result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord} . You win!`;
    //add a class to that div to show animations
    //classlists gives you the list of all classes for that element

    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
    count++;
    insertDataWin();
}
function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_div.innerHTML = convertToWord(userChoice) + " beats "+ convertToWord(computerChoice) + ". You win!";
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    choice_id = "choice_" + userChoice;
    const userChoice_div = document.getElementById(choice_id);

    result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)} ${smallCompWord} . You lose :(`;

    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
    count++;
    insertDataLose();
}
function draw(userChoice, computerChoice)
{
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_div.innerHTML = convertToWord(userChoice) + " beats "+ convertToWord(computerChoice) + ". You win!";
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();

    choice_id = "choice_" + userChoice;
    const userChoice_div = document.getElementById(choice_id);

    result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)} ${smallCompWord} . It's a draw, try again!`;

    userChoice_div.classList.add('grey-glow');
    setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 300);
}
function Game(userChoice)
{
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
function main()
{
    rock_div.addEventListener('click', function() {
        Game("r");
    })
    paper_div.addEventListener('click', function() {
        Game("p");
    })
    scissors_div.addEventListener('click', function() {
        Game("s");
    })

}
function refresh(){
    window.location.reload();
}
main();