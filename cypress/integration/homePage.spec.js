describe("home page", () => {
  it("displays main title and show me button", () => {
    cy.visit("/");

    cy.get(".skillgrid").should("contain", "skillgrid");
    cy.get("h1").should("contain", "Game design katas to improve your skills");
    cy.get("button").should("contain", "Show me!");
  });
});
