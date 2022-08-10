import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Lakimn');
const player2 = new Character('Nightmare');
const player3 = new Character('Noob');

Array(12).forEach(() => player1.levelUp());

const monster1 = new Monster();
const monster2 = new Dragon();

export { 
  player1,
  player2,
  player3,
  monster1,
  monster2,
};