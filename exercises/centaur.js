class Centaur {
  constructor (name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0
    this.cranky = false;
  }
  shoot() {
    if(this.cranky || this.layingDown === true){
      return 'NO!';
    }
    this.counter++
    if (this.counter>2){
      this.cranky = true
    }
    return 'Twang!!!';
  }
  run() {
    this.counter++
    if (this.layingDown === true){
      return 'NO!'
    }
    if
     (this.counter>2){
      this.cranky = true
    }
    return 'Clop clop clop clop!!!';
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!'
    }
    this.cranky = false;
    return 'ZZZZ'
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.cranky === false) {
      this.cranky = true;
      return
    }
    if (this.layingDown === true){
      return 'Not while I\'m laying down!'
    }
    if (this.cranky === true) {
    this.cranky = false;
    }
  }

}
module.exports = Centaur;