class Medusa {
  constructor(name, person, ) {
    this.name = name;
    this.statues = [];
    this.person = person;
    
  }
  stare(victim) {
    var i = 0

    this.statues.push(victim);
    if (this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
      
    }
    victim.stoned = true;
   }
}


module.exports = Medusa;