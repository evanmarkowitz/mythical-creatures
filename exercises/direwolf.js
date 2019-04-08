class Direwolf {
  constructor(name, home, size,) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect =[];
    this.huntsWhiteWalkers = true;
    
  }
  protect(stark) {
    stark.safe = true;
    this.huntsWhiteWalkers = false;
    if (this.starksToProtect.length > 1) {
      this.starksToProtect.push(stark)
      this.starksToProtect.pop()

    }
    else if (this.home === stark.location)
    this.starksToProtect.push(stark);
      
  }
  leave(stark) {
    this.starksToProtect.pop();
    stark.safe = false;
  }
}
module.exports = Direwolf;