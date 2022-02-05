import uniqueRandomArray from "unique-random-array";

const GENRES = [
  "Open-world game",
  "Side-scrolling shooter",
  "Dating simulator",
  "Tower defense game",
  "Party game",
  "Fighting game",
  "Rhythm game",
  "Survival horror game",
  "Battle royale game",
  "Sandbox game",
  "Stealth game",
  "JRPG",
  "Soulslike",
  "Endless runner game",
  "Tactical RPG",
  "Grand strategy game",
  "Visual novel",
  "Walking simulator",
  "Cooking game",
];

const CLIENTS = [
  "All Elite Wrestling",
  "Doctors Without Borders",
  "AGDQ",
  "The Weeknd",
  "Studio Ghibli",
  "Evangelion",
  "Shingeki no Kyojin",
  "the Opus Dei",
  "the Church of Scientology",
  "The Pokémon Company",
  "Christopher Nolan",
  "The Office",
  "Gordon Ramsay",
  "Hannibal Lecter",
  "Tom Nook",
  "the Jurassic Park franchise",
  "the Minority Report movie",
  "the Kill Bill franchise",
  "The Hobbit",
  "Filthy Frank",
  "the Nvidia brand",
  "1984",
  // "Perro Matapacos",
  // "31 Minutos",
  // "Video Loco",
  // "El Discípulo del Chef",
  // "Bomberos de Chile",
  // "the Transantiago",
];

Object.freeze(GENRES);
Object.freeze(CLIENTS);

function generate() {
  const getRandomGenre = uniqueRandomArray(GENRES);
  const getRandomClient = uniqueRandomArray(CLIENTS);

  const randomGenre = getRandomGenre();
  const randomClient = getRandomClient();

  return [randomGenre, randomClient];
}

export { generate, GENRES, CLIENTS };
