import Character from './Character';

const player1 = new Character('Lakimn');
const player2 = new Character('Nightmare');
const player3 = new Character('Noob');

Array(12).forEach(() => player1.levelUp());

export { 
  player1,
  player2,
  player3,
};