class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  noticesOgre(ogre){
    if (this.encounterCounter!== 0 && this.encounterCounter/ 3 % 1 === 0) {
      return true
    } else {
      this.notice = false;
      return false
  }}
  
 
  
  

}

module.exports = Human;