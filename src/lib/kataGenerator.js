import uniqueRandomArray from "unique-random-array";

import genres from "../genres.json";
import clients from "../clients.json";

const GENRES = genres.genres;
const CLIENTS = clients.clients;

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
