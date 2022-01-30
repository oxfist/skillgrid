const _ = require("lodash");

const GENRES = [
  "Open-world game",
  "Side-scrolling shooter",
  "Dating simulator",
  "Tower defense game",
  "Party game",
  "Fighting game",
];

const CLIENTS = [
  "the WWE",
  "Doctors Without Borders",
  "the Transantiago",
  "AGDQ",
  "Video Loco",
  "El Discípulo del Chef",
];

Object.freeze(GENRES);
Object.freeze(CLIENTS);

function generate() {
  const randomGenre = _.sample(GENRES);
  const randomClient = _.sample(CLIENTS);

  return [randomGenre, randomClient];
}

export { generate, GENRES, CLIENTS };
