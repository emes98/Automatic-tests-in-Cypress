/// <reference types="cypress" />

describe("Learning the 'get' method", () => {
  it("get", () => {
    cy.visit("https://example.cypress.io/");

    cy.get(".banner-alt")
      .should("have.length", 3)
      .eq(1)
      .next()
      .contains("Promise");

    cy.get("ul.home-list").find("li").eq(5);
    cy.get("ul.home-list").children("li").eq(1).contains("find");
    cy.get("ul.home-list > li:nth-child(2)");

    cy.get("ul.home-list").contains("Cookies");
  });
});
