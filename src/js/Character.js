/* eslint-disable linebreak-style */
class Character {
  constructor(attack, distance, stoned = false) {
    this.attack = attack;
    this.distance = distance;
    this.stoned = stoned;
  }

  set attack(damage) {
    // eslint-disable-next-line no-return-assign
    return this.attackDamage = damage;
  }

  get attack() {
    this.attackDamage *= (1 - 0.1 * (this.distance - 1));
    if (this.stoned) this.attackDamage -= (Math.log2(this.distance) * 5);
    return Math.round(this.attackDamage);
  }
}

export default Character;
