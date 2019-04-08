class Ogre {
  constructor (name, home){
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0 
    this.encounterCounter = 0;
    
  }
  encounter(human) {
    human.encounterCounter++
    this.encounterCounter++
    if (human.encounterCounter!== 0 && human.encounterCounter/ 3 % 1 === 0) {
      this.swings++
    }
    if (human.encounterCounter!== 0 && human.encounterCounter/ 6 % 1 === 0) {
      human.knockedOut = true;
    }  
  }
  swingAt(humans){
    this.swings++
  }
  apologize(human) {
    human.knockedOut = false;
  }
  
} 

module.exports = Ogre;