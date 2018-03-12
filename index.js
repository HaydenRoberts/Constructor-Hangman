var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");
var guessesRemaining = 10;
var letterGuessed = [];

var randomWord = function () {
    var allWords = ["Cheetah", "Dog", "Tiger", "Rhino", "Elephant", "Giraffe", "Sloth", "Jaguar", "Monkey", "Emu"];
    var pickWord = Math.floor(Math.random() * 10);
    Word(allWords[pickWord]);
};

inquirer
    .prompt([
        {
            type: "confirm",
            message: "Are you ready to play?",
            name: "play"
        }
    ]).then(function (answer) {
        if (answer.play === true) {
            startGame()
        } else {
            console.log("Not up for the challenge?!")
        }
    });

function startGame() {
    if (letterGuessed.length > 0) {
        letterGuessed = [];
    }
    randomWord();
    console.log("---------------------------------------");
    console.log("          Welcome to Hangman!          ");
    console.log("                  --                   ");
    console.log(" You get 10 guesses to guess the word. ");
    console.log("                  --                   ");
    console.log("              Good luck...             ");
    console.log("---------------------------------------\n");
    console.log("Your Word: " + Word.word);
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess A Letter!",
                name: "letter"
            }
        ]).then(function (guess) {
            var userGuess = guess.letter;
            Letter(userGuess);
        })
}