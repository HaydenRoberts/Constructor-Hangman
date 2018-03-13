var Letter = require("./letter.js");

function Word(word){
    this.word = word;
    this.letters = [];
    this.newWord = "";
    
    this.stringMerge = function() {
        for(i=0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.newWord += newLetter;
            this.letters.push(newLetter);
        }
    }.bind(this);

    this.getWord = function() {
        var guessedWord = "";
        for(i=0; i < this.word.length; i++) {
            guessedWord += this.letters[i].characterReturn();
        }
        return guessedWord;
    }

    this.wordFound = function() {
        if (this.letters.length === 0) {
            return false;
        }
        for(i=0; i<this.letters.length; i++) {
            if (this.letters[i].characterReturn() === " _ "){
                return false;
            }
        }
        return true;
    }

    this.character = function(userGuess) {
        var amountCorrect = 0;
        for(i=0; i<this.letters.length; i++) {
            var letter = this.letters[i];
            amountCorrect = amountCorrect + letter.guess(userGuess);
        }
        return amountCorrect;
    }
};

module.exports = Word;