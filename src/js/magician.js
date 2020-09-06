class Magician {
  constructor(attack, distance) {
    this.attack = attack;
    this.distance = distance;
  }
  
  set attack(poitns) {
    this._attack = poitns / this.distance; // this.distance undefined 
  }


  get attack() {
    return this._attack;
  }
}




const magic = new Magician(200, 10);
console.log(magic);
console.log(magic.attack);
