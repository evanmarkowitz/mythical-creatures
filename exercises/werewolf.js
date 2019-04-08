class Werewolf {
  constructor (name, location,victim) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.victim =[]
  
  }
  change() {
    if (this.human === true) {
    this.human = false;
    this.hungry = true} 
    else { this.human = true;
      this.hungry = false};
    if (this.wolf === false) {
      this.wolf = true;
      this.hungry = true;
    } else {
      this.wolf = false;
    }}
  eat(victim) {
    if (this.hungry === true) {
    victim.alive = false; 
    this.human = true; 
    }
  }
}
  


module.exports = Werewolf;