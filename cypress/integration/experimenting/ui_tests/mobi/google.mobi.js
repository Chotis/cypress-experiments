/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.viewport('samsung-note9', 'landscape')
      cy.visit('https://www.google.com/')
    })

    it('Search for a site', () => {
      cy.get('[title="Search"]')
        .type('cypress').should('have.value', 'cypress')
        .type('{enter}')
    })
  
})