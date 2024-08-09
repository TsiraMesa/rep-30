
Cypress.Commands.add("enter", (name,email) => {
cy.get('[data-qa="signup-name"]').type(name)
cy.get('[data-qa="signup-email"]').type(email)
})