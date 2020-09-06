class Magician {
  constructor(attack, distance) {
    this.attack = attack;
    this.distance = distance;
  }
  
  set attack(poitns) {
    console.log(this.distance); // undefined
    if (this.distance === 2) this._attack = (poitns / 100) * 90;
    if (this.distance === 3) this._attack = (poitns / 100) * 80;
    if (this.distance === 4) this._attack = (poitns / 100) * 70;
    if (this.distance === 5) this._attack = (poitns / 100) * 60; 
  }


  get attack() {
    return this._attack;
  }
}




const magic = new Magician(200, 10);
console.log(magic);
console.log(magic.attack);
