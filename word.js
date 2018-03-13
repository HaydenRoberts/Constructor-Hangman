var Letter = require("./letter.js");

function Word(word){
    this.word = word;
    this.letters = [];
    this.newWord = "";
    this.guessedWord = "";
    this.stringMerge = function() {
        this.guessedWord = "";
        for(i=0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.newWord += newLetter;
            this.letters.push(newLetter);
            this.guessedWord += this.letters[i].characterReturn();
        }
    }.bind(this);

    this.character = function(character) {
        for(i=0; i<this.letters.length; i++) {
            var letter = this.letters[i];
            letter.guess(character);
        }
    }
};

module.exports = Word;