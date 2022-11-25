/// <reference types="cypress" />

context("Main page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
  });

  it("cy.get() - query DOM elements", () => {
    cy.get(".navbar")
      .should("contain", "Commands")
      .within(() => {
        cy.get("a").contains("Commands").click();
      });

    cy.get("ul .dropdown-menu").find("li").contains("Traversal").click();

    cy.get("h1").should("contain", "Traversal");

    cy.location().should((location) => {
      expect(location.href).to.eq(
        "https://example.cypress.io/commands/traversal"
      );
    });

    cy.get("#traversal").find("div").first().next().should("contain", "Home");

    cy.get("#traversal")
      .find("div")
      .first()
      .next()
      .children()
      .should("have.class", "well")
      .find("ol")
      .find("li")
      .should("have.length", "3");
  });
});
