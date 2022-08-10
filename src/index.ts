import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Players--------------------------------------
const player1 = new Character('Lakimn');
const player2 = new Character('Nightmare');
const player3 = new Character('Noob');

for (let index = 0; index < 100; index += 1) { player1.levelUp(); }
// ----------------------------------------------

// Monsters--------------------------------------
const monster1 = new Monster();
const monster2 = new Dragon();
// ----------------------------------------------

// Battle-----------------------------------------
const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);
// ----------------------------------------------

// Run Battles ----------------------------------
const runBattles = (battles: Array<Battle>): void => {
  battles.forEach((battle) => battle.fight());
};
// ----------------------------------------------

export { 
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};