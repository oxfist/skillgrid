describe("clmn home page", () => {
  it("displays main title and show me button", () => {
    cy.visit("/clmn");

    cy.get(".skillgrid").should("contain", "skillgrid");
    cy.get("h1").should("contain", "Katas de game design para regalar");
    cy.get("button").should("contain", "¡A verrr!");
  });
});
