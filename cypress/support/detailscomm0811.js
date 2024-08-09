

Cypress.Commands.add("details", (password,days,months,years) => {
    cy.get(':nth-child(3) > .top').click()
cy.get('[data-qa="password"]').type(password)
cy.get('[data-qa="days"]').select(days)
cy.get('[data-qa="months"]').select(months)
cy.get('[data-qa="years"]').select(years)
})