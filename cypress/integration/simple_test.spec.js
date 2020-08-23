import {googleSearch, imdbDomain} from '../variables/variables';
import {getAriaLabel} from '../utils/utils';

describe('Simple test', () => {
  it('Search on google', () => {
    cy.visit('https://www.google.com/')
    cy.get('.RNNXgb').then($body => {
      if ($body.get('input[aria-label="Search"]')) {
        getAriaLabel("input", "Search")
          .type(googleSearch)
          .should('have.value', googleSearch)
        cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
        getAriaLabel("input", "Google Search").click({ multiple: true, force: true })
      } else {
        getAriaLabel("input", "Тражи")
          .type(googleSearch)
          .should('have.value', googleSearch)
        cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
        getAriaLabel("input", "Google претрага").click({ multiple: true, force: true })
      }
    cy.contains(imdbDomain).should('be.visible');
    })
  })
})