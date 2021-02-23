/// <reference types="Cypress" />

describe("Add Reminder", () => {
  describe("when fill form", () => {
    it("create new reminder", () => {
      cy.visit("http://localhost:3000/");
      cy.contains(new Date().getDate()).click();
      cy.get("[data-testid=input-title]").type("text title");
      cy.get("[data-testid=input-description]").type("text description");
      cy.get("[data-testid=input-time]").type("11:11");
      cy.get("[data-testid=input-city]").type("New York");
      cy.contains("Add").click();
      cy.get("[data-testid=input-weather]").should("be.visible");
      cy.contains("Add").click();
      cy.contains("text title").should("be.visible");
    });
  });
});
