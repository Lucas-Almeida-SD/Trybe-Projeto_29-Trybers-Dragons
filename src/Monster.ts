import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  private _strength = 63;

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    let newlifePoints = this._lifePoints - attackPoints;
    if (newlifePoints <= 0) newlifePoints = -1;
    this._lifePoints = newlifePoints;
    return newlifePoints;
  }
}

export default Monster;
