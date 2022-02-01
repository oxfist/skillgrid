const _ = require("lodash");

const GENRES = [
  "Open-world game",
  "Side-scrolling shooter",
  "Dating simulator",
  "Tower defense game",
  "Party game",
  "Fighting game",
  "Rhythm game",
  "Survival horror game",
];

const CLIENTS = [
  "the WWE",
  "Doctors Without Borders",
  "the Transantiago",
  "AGDQ",
  "Video Loco",
  "El Discípulo del Chef",
  "The Weeknd",
  "David Bowie",
  "Perro Matapacos",
  "Studio Ghibli",
  "Evangelion",
  "Shingeki no Kyojin",
  "the Opus Dei",
  "31 Minutos",
  "Bomberos de Chile",
];

Object.freeze(GENRES);
Object.freeze(CLIENTS);

function generate() {
  const randomGenre = _.sample(GENRES);
  const randomClient = _.sample(CLIENTS);

  return [randomGenre, randomClient];
}

export { generate, GENRES, CLIENTS };
