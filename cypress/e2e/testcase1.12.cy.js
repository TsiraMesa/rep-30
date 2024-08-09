import user from "../fixtures/newuser0811.json"
describe('example', () => {
  before( () => {
    cy.visit("https://automationexercise.com/login") 
    cy.login(user.email, user.password)   //qomandidan camogebuli
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
   

  })
  it('step1', ()  => {
  
cy.visit("https://automationexercise.com")

//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'

//3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
//4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should("be.visible")
//6. Enter name and email address
cy.enter(user.name,user.email)

//7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.contains("Enter Account Information").should("be.visible")

//9. Fill details: Title, Name, Email, Password, Date of birth 
cy.details(user.password, user.days, user.months, user.years)


//10. Select checkbox 'Sign up for our newsletter!'
cy.get('#newsletter').click()
//11. Select checkbox 'Receive special offers from our partners!'
cy.get('#optin').click()
//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
//Zipcode, Mobile Number
cy.fullDetails(user.firstName, user.lastName, user.company, user.address, user.address2, user.country, 
  user.state, user.city,user.zipcode,user.mobileNumber)

//13. Click 'Create Account button'
cy.get('[data-qa="create-account"]').click()

//14. Verify that 'ACCOUNT CREATED!' is visible
cy.contains("Account Created!").should("be.visible")
//15. Click 'Continue' button
cy.get('[data-qa="continue-button"]').click()
//16. Verify that 'Logged in as username' is visible
cy.contains(" Logged in as tsirrA").should("be.visible")
  })
}) // kkkk
