Cypress.Commands.add("corectLogin", (email, password) => {
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add("loginUp", (name,email, password,days,months,years,firstName,lastName, company,address,address2,
    country ,state,city,zipcode, mobileNumber
) => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type(password)
    cy.get('[data-qa="days"]').select(days)
    cy.get('[data-qa="months"]').select (months)
    cy.get('[data-qa="years"]'). select (years)
    cy.get(':nth-child(7) > label').click()
    cy.get(':nth-child(8) > label').click()
    cy.get('[data-qa="first_name"]').type(firstName)
    cy.get('[data-qa="last_name"]').type(lastName)
    cy.get('[data-qa="company"]').type(company)
    cy.get('[data-qa="address"]').type(address)
    cy.get('[data-qa="address2"]').type(address2)
    cy.get('[data-qa="country"]').select(country)
    cy.get('[data-qa="state"]').type(state)
    cy.get('[data-qa="city"]').type(city)
    cy.get('[data-qa="zipcode"]').type(zipcode)
    cy.get('[data-qa="mobile_number"]').type(mobileNumber)
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()

    
})

Cypress.Commands.add("inCorectLogin", (email, password) => {
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
})