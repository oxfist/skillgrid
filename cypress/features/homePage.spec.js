describe("home page", () => {
  it("displays main title and show me button", () => {
    cy.visit("/");

    cy.get(".skillgrid").should("contain", "skillgrid");
    cy.get("h1").should("contain", "Game Design Katas to Improve Your Skills");
    cy.get("button").should("contain", "Show Me!");
  });
});
