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

function newGame() {
    if (letterGuessed.length > 0) {
        letterGuessed = [];
    }
    guessesRemaining = 10;
    randomWord();
    word = randomWord();
    startGame();
};

function loseGame() {
    console.log("\n----------------");
    console.log("   You Lose!!     ");
    console.log("----------------\n");
    newGame();
}

function winGame() {
    console.log("\n----------------");
    console.log("   You Win!!     ");
    console.log("----------------\n");
    newGame();
}

function checkGame() {
    for (i = 1; i < word.getWord().length; i++) {
        if (word.getWord() === ' _ ') {

        } else {
            winGame();
        }
    }
}

function startGame() {
    console.log("\nGuesses left: " + guessesRemaining);
    console.log("Letters Guessed: " + letterGuessed + "\n");
    console.log("\nYour Word: " + word.getWord() + "\n");
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
            var found = word.character(userGuessUpperCase);
            // console.log("Found: " + found);

            for (i = 0; i < letterGuessed.length; i++) {
                if (userGuessUpperCase === letterGuessed[i]) {
                    guessedAlready = true;
                }
            }

            if (guessedAlready === false) {
                letterGuessed.push(userGuessUpperCase);
            }

            if (found === 0) {
                if (guessedAlready === true) {
                    console.log("\nYou Already Guessed That Letter!\n");
                } else {
                    // console.log("None correct");
                    guessesRemaining--;
                }
            }
            if (word.wordFound() === true) {
                winGame();
            } else {
                word.getWord();
                if (guessesRemaining <= 0) {
                    loseGame();
                } else {
                    startGame();
                }
            }
            // word.character(userGuessUpperCase);
        })
}