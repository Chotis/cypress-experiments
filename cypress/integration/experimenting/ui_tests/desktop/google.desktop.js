/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com/')
    })

    it('Search for a site', () => {
      // https://on.cypress.io/type
      cy.get('[title="Search"]')
        .type('cypress').should('have.value', 'cypress')
        .type('{enter}')
    })
  
})