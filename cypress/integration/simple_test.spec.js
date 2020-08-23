import {googleSearch, imdbDomain} from '../variables/variables';

describe('Simple test', () => {
  it('Search on google', () => {
    cy.visit('https://www.google.com/')
    cy.get('.RNNXgb').then($body => {
      if ($body.get('input[aria-label="Search"]')) {
        cy.get('input[aria-label="Search"]')
        .type(googleSearch)
        .should('have.value', googleSearch)
        cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
        cy.get('input[aria-label="Google Search"]').click({ multiple: true, force: true })
      } else {
        cy.get('input[aria-label="Тражи"]')
          .type(googleSearch)
          .should('have.value', googleSearch)
        cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
        cy.get('input[aria-label="Google претрага"]').click({ multiple: true, force: true })
      }
    cy.contains(imdbDomain)
    })
  })
})