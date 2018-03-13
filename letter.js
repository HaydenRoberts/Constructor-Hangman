var Letter = function(letterToFind) {
    this.letterToFind = letterToFind;
    this.guessedCorrectly = false;

    this.characterReturn = function() {
        if(this.guessedCorrectly === true) {
            return this.letterToFind;
        } else {
            return " _ ";
        }
    }

    this.guess = function(userGuess) {
        if(userGuess === this.letterToFind) {
            this.guessedCorrectly = true;
        }
    }
};

module.exports = Letter;