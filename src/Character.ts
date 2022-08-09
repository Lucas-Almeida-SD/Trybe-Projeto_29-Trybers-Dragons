import Archetypes, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetypes;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _energyClone: Energy;

  constructor(name: string) {
    this._dexterity = Character.generateRandomNumber();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage('');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.generateRandomNumber();
    this._defense = Character.generateRandomNumber();
    this._energy = { 
      type_: this._archetype.energyType,
      amount: Character.generateRandomNumber(),
    };
    this._energyClone = this._energy;
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    this._energyClone = JSON.parse(JSON.stringify(this._energy));
    return this._energyClone;
  }

  public receiveDamage(attackPoints: number): number {
    const attackValue = attackPoints - this.defense;
    return this.updateLifePoints(attackValue);
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  public levelUp(): void {
    this.updateMaxLifePoints();
    this._lifePoints = this._maxLifePoints;
    this._strength += 1;
    this._dexterity += 1;
    this._defense += 1;
    this._energy = { ...this._energy, amount: 10 };
  }

  private static generateRandomNumber() {
    return Math.ceil(Math.random() * 10);
  }

  private updateLifePoints(attackValue: number): number {
    if (attackValue > 0) this._lifePoints -= attackValue;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  private updateMaxLifePoints(): void {
    const newMaxLifePoints = this._maxLifePoints 
      + Character.generateRandomNumber();
    
    if (newMaxLifePoints < this.race.maxLifePoints) {
      this._maxLifePoints = newMaxLifePoints;
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
  }
}

export default Character;