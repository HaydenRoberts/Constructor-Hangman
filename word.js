var Letter = require("./letter.js");

function Word(word){
    this.word = word;
    this.letters = [];
    this.newWord = "";
    this.guessedWord = "";
    this.stringMerge = function(){
        this.guessedWord = "";
        for(i=0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            // console.log(newLetter);
            // console.log("Here: " + JSON.stringify(newLetter));
            // console.log(newLetter.characterReturn[0]);
            this.newWord += newLetter;
            // console.log(word);
            // console.log("Word" + this.newWord);
            this.letters.push(newLetter);
            // console.log(this.letters);
            this.guessedWord += this.letters[i].characterReturn()
        }

    }.bind(this);

    this.character = function(character){
        for(i=0; i<this.letters.length; i++) {
            var letter = this.letters[i];
            letter.guess(character);
        }
        
        // console.log(this.letters);
    }
};

module.exports = Word;