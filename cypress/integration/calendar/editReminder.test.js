/// <reference types="Cypress" />

describe("Edit Reminder", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.contains(new Date().getDate()).click();
    cy.get("[data-testid=input-title]").type("text title");
    cy.contains("Add").click();
  });

  describe("when fill form", () => {
    it("create new reminder", () => {
      cy.contains("text title").type(" edited");
      cy.get("[data-testid=input-description]").type("text description");
      cy.get("[data-testid=input-time]").type("11:11");
      cy.get("[data-testid=input-city]").type("New York");
      cy.contains("Edit").click();
      cy.get("[data-testid=input-weather]").should("be.visible");
      cy.contains("Edit").click();
      cy.contains("text title edited").should("be.visible");
    });
  });
});
