var Letter = require("./letter.js");

function Word(word){
    this.word = word;
    // this.letters = [];
    var newWord = "";
    this.stringMerge = function(){
        for(i=0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            console.log("Here: " + JSON.stringify(newLetter));
            // console.log(newLetter.characterReturn[0]);
            newWord += newLetter + " ";
            // console.log(newLetter);
            // this.letters.push(newLetter.characterReturn);
        }
        // console.log(newWord);
    }.bind(this);

    this.character = function(letter){
        for(i=0; i<word.length; i++) {
            if(letter = this.letters[i]) {
                this.letters.splice(i, 1, letter);
            }
        }
        console.log(this.letters);
        Letter.characterCheck(letter);
    }
    this.stringMerge();
};

module.exports = Word;