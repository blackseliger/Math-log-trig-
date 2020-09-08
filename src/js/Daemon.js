/* eslint-disable no-useless-constructor */
import Character from './Character';

export default class Daemon extends Character {
  constructor(attack, distance, stoned) {
    super(attack, distance, stoned);
  }
}
