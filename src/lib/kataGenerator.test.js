import { generate, CLIENTS, GENRES } from "./kataGenerator";

describe("generator", () => {
  it("should return an array with 2 strings", () => {
    const actualResult = generate();

    expect(actualResult.length).toBe(2);
    expect(typeof actualResult[0]).toBe("string");
    expect(typeof actualResult[1]).toBe("string");
  });

  it("should return a genre from the valid genres", () => {
    const actualGenre = generate()[0];

    expect(GENRES).toContain(actualGenre);
  });

  it("should return a client from the valid clients", () => {
    const actualClient = generate()[1];

    expect(CLIENTS).toContain(actualClient);
  });
});
