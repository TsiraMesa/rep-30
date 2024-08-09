
import user2 from "../fixtures/incorectuser.json"
describe('example', () => {
    before(() => {
        cy.visit("https://automationexercise.com")
    })
    it('step3', () => {

//1. Launch browser
//2. Navigate to url 'http://automationexercise.com'

//3. Verify that home page is visible successfully
cy.contains("AutomationExercise").should("be.visible")
//4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//5. Verify 'Login to your account' is visible
cy.contains("Login to your account").should("be.visible")
//6. Enter incorrect email address and password
cy.inCorectLogin(user2.email,user2.password)

//8. Verify error 'Your email or password is incorrect!' is visible 
cy.contains("Your email or password is incorrect!").should("be.visible")
    })}) //s