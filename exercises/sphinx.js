class Sphinx {
  constructor() {
    this.name = null;
    this.riddles =[];
    this.heroesEaten = 0;
    this.rage;
  }
  collectRiddle(riddle){
    if (this.riddles.length >= 3) {
      this.riddles.push(riddle)
      this.riddles.shift()
    } else {
    this.riddles.push(riddle)
    }
  }
  attemptAnswer(guess){
    var answerFinder = this.riddles.findIndex(i => i.answer === guess)
   if (answerFinder === -1) {
    this.heroesEaten++ 
  }
  else if (answerFinder !== -1)
    { var correctAnswerLocation = this.riddles.findIndex(i => i.answer === guess) 
    this.riddles.splice(correctAnswerLocation, 1)
    if (this.riddles.length === 0)
      {return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`}
    else {
    return 'That wasn\'t that hard, I bet you don\'t get the next one'}}
}}

module.exports = Sphinx;