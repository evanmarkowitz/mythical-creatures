class Wizard {
  constructor (wiz, isRested) {
    this.name = wiz.name;
    if (wiz.bearded ===  undefined) {
      this.bearded = true
    } else {this.bearded = false } 
    this.isRested = true; 
    this.counter = 0; 
  } 


  incantation(string) {
    return string.toUpperCase();
  }
  cast(){
    this.counter++
    if (this.counter < 2) {
    return 'Magic Bullet';
  } else {
    return 'I SHALL NOT CAST!';
  }
  }

}

module.exports = Wizard;