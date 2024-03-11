describe("E2E Test", () => {
  it("Visit home page and check all components", () => {
    cy.visit("localhost:4173");
    cy.get("[data-cy=search-input]").should("exist").type("example");
    cy.get("[data-cy=search-btn]").should("exist").click();

    cy.get("[data-cy=examplecode]").should("exist").click();
    cy.get("[data-cy=amhello]").should("exist");
  });
});
