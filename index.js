var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");
var guessesRemaining = 10;
var letterGuessed = [];
var word = randomWord();


function randomWord() {
    var allWords = ["CHEETAH", "DOG", "TIGER", "RHINO", "ELEPHANT", "GIRAFFE", "SLOTH", "JAGUAR", "MONKEY", "EMU"];
    var pickWord = Math.floor(Math.random() * 10);
    var newWord = new Word(allWords[pickWord]);
    newWord.stringMerge();
    return newWord;
};

    console.log("---------------------------------------");
    console.log("          Welcome to Hangman!          ");
    console.log("                  --                   ");
    console.log(" You get 10 guesses to guess the word. ");
    console.log("                  --                   ");
    console.log("              Good luck...             ");
    console.log("---------------------------------------\n");

inquirer
    .prompt([
        {
            type: "confirm",
            message: "Are you ready to play?",
            name: "play"
        }
    ]).then(function (answer) {
        if (answer.play === true) {
            newGame();
        } else {
            console.log("Not up for the challenge?!")
        }
    });

    function newGame () {
        if (letterGuessed.length > 0) {
            letterGuessed = [];
        }
        startGame();
    };

    function gameOver() {

    }
    
    function startGame() {
        if(guessesRemaining <= 0) {
            gameOver();
        }
        console.log("\nYour Word: " + word.guessedWord + "\n");
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess A Letter!",
                name: "userLetter"
            }
        ]).then(function (guess) {
            var userGuessUpperCase = guess.userLetter.toUpperCase();
            var guessedAlready = false;

            for (i=0; i < letterGuessed.length; i++) {
                if(userGuessUpperCase === letterGuessed[i]) {
                    guessedAlready = true;
                }
            }

            if(guessedAlready === false) {
                letterGuessed.push(userGuessUpperCase);
            }

            word.character(userGuessUpperCase);
            word.stringMerge();
            startGame();
        })
}