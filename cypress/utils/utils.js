export const getAriaLabel = (tag, search) => cy.get(`${tag}[aria-label="${search}"]`)