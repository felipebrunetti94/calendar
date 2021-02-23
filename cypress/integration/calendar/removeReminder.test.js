/// <reference types="Cypress" />

describe("Remove Reminder", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains(new Date().getDate()).click();
    cy.get("[data-testid=input-title]").type("text title");
    cy.contains("Add").click();
  });

  describe("when click form", () => {
    it("remove reminder", () => {
      cy.contains("text title").click();

      cy.contains("Remove").click();
      cy.contains("text title").should("not.exist");
    });
  });
});
