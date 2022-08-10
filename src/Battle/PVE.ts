import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private player1: Fighter,
    private monsters: Array<SimpleFighter>,
  ) {
    super(player1);
  }

  fight(): number {
    for (; this.player1.lifePoints > 0 && this.areMonstersAlive();) {
      this.player1.attack(this.selectAMonster());
      this.selectAMonster().attack(this.player1);
    }

    if (this.player1.lifePoints > 0) return 1;
    return -1;
  }

  private areMonstersAlive(): boolean {
    return this.monsters.every((monster) => monster.lifePoints > 0);
  }

  private selectAMonster(): SimpleFighter {
    const index = Math.floor(Math.random() * this.monsters.length);
    return this.monsters[index];
  }
}

export default PVE;
