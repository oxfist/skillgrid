describe("kata generation", () => {
  it("changes the main title when clicking Show me!", () => {
    cy.visit("/");

    cy.get("button").click();
    cy.get("h1.main-title").should(
      "not.have.text",
      "Game design katas to improve your skills"
    );
  });

  it("changes button text when clicking Show me!", () => {
    cy.visit("/");

    cy.get("button").click();
    cy.get("button .shuffle-text").should("have.text", "New kata");
  });
});
