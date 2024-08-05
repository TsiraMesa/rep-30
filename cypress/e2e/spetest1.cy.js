describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://automationexercise.com')
 
   

  //1. Launch browser
//2. Navigate to url 'http://automationexercise.com'

//3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers"). should("be.visible")

//4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4)'). click()

//5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should("have.text","New User Signup!")


//6. Enter name and email address
cy.get('[data-qa="signup-name"]'). type("tsirames")
cy.get('[data-qa="signup-email"]'). type ("TSirmesablishvili@gmail.com")

//7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()

//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.get(':nth-child(1) > b').should("be.visible")
//9. Fill details: Title, Name, Email, Password, Date of birth
cy.get('#id_gender1').click()
cy.get('[data-qa="password"]'). type("Mmesablishvili123")
cy.get('[data-qa="days"]'). select("14")
cy.get('[data-qa="months"]'). select("2")
cy.get('[data-qa="years"]'). select ("1998")

//10. Select checkbox 'Sign up for our newsletter!'
cy.get(':nth-child(7) > label').click()
//11. Select checkbox 'Receive special offers from our partners!'
cy.get(':nth-child(8) > label').click()
//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
cy.get('[data-qa="first_name"]').type ("tsira")
cy.get('[data-qa="last_name"]').type ("mesablishvili")
cy.get('[data-qa="company"]').type ("JRS")
cy.get('[data-qa="address"]').type ("Tbilisi")
cy.get('[data-qa="address2"]').type ("Tbilisi2")
cy.get('[data-qa="country"]').select ("India")
cy.get('[data-qa="state"]').type ("Tbil")
cy.get('[data-qa="city"]').type ("Telavi")
cy.get('[data-qa="zipcode"]').type ("5248")
cy.get('[data-qa="mobile_number"]').type ("557586963")

//13. Click 'Create Account button'
cy.get('[data-qa="create-account"]').click()

//14. Verify that 'ACCOUNT CREATED!' is visible
cy.get('[data-qa="account-created"]').should("be.visible")
//15. Click 'Continue' button
cy.get('[data-qa="continue-button"]').click()
//16. Verify that 'Logged in as username' is visibl
cy.get(':nth-child(10) > a').should("be.visible")

//17. Click 'Delete Account' button
cy.get('.shop-menu > .nav > :nth-child(5)').click()
  
//18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
cy.get('[data-qa="account-deleted"]') .should("be.visible")

cy.get('[data-qa="continue-button"]').click()
})
})
