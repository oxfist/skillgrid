describe("kata generation", () => {
  it("changes the main title when clicking Show Me!", () => {
    cy.visit("/");

    cy.get("button").click();
    cy.get("h1.main-title").should(
      "not.have.text",
      "Game Design Katas to Improve your Skills"
    );
  });

  it("changes button text when clicking Show Me!", () => {
    cy.visit("/");

    cy.get("button").click();
    cy.get("button .shuffle-text").should("have.text", "New Kata");
  });
});
