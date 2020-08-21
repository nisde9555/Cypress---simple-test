describe('Simple test', () => {
  it('Search on google', () => {
    cy.visit('https://www.google.com/')
    cy.get('.RNNXgb').then($body => {
      if ($body.get('input[aria-label="Search"]')) {
        cy.get('input[aria-label="Search"]')
        .type('imdb')
        .should('have.value', 'imdb')
        cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
        cy.get('input[aria-label="Google Search"]').click({ multiple: true, force: true })
      } else {
        cy.get('input[aria-label="Тражи"]')
          .type('imdb')
          .should('have.value', 'imdb')
        cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
        cy.get('input[aria-label="Google претрага"]').click({ multiple: true, force: true })
      }
    })
  })
})