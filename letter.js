var Letter = function(letter) {
    this.letter = letter;
    this.guessedCorrectly = false;

    this.characterReturn = function(){
        if(this.guessedCorrectly === true) {
            // console.log(this.letter);
            return this.letter;
        } else {
            return " _ ";
        }
    }

    this.guess = function(C){
        if(C === this.letter) {
            this.guessedCorrectly = true;
        }
    }
};

module.exports = Letter;