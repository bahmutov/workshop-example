/// <reference types="cypress" />

describe('Example site 3', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('h1', 'cypress-workshop-ci-example').should('be.visible')
  })

  it('navigates to README!', () => {
    cy.visit('/')
    cy.contains('a', 'README').click()
    cy.location('pathname').should('equal', '/README/')
  })

  it('goes directly to README', () => {
    cy.visit('/README')
    cy.wait(10000)
    cy.contains('h2', 'README')
  })

  it('redirects to README/', () => {
    cy.visit('/README/')
    cy.contains('h2', 'README')
  })
})

afterEach(() => {
  cy.wait(1000)
})
