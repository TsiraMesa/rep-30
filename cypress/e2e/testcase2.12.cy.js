import user1 from "../fixtures/corectUser.json"
describe('example', () => {
    before(() => {
        cy.visit("https://automationexercise.com")
       cy.loginUp(user1.name, user1.email, user1.password, user1.days, user1.months, user1.years, user1.firstName,
        user1.lastName, user1.company, user1.address, user1.address2,   
        user1.country, user1.state, user1.city, user1.zipcode, user1.mobileNumber)
    })
    it('step2', () => {
       




        //1. Launch browser
        //2. Navigate to url 'http://automationexercise.com'
        //3. Verify that home page is visible successfully
        cy.contains("AutomationExercise").should("be.visible")
        //4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4)').click()

        //5. Verify 'Login to your account' is visible
        cy.contains("Login to your account").should("be.visible")

        //6. Enter correct email address and password
        cy.corectLogin(user1.email, user1.password)
        

         //8. Verify that 'Logged in as username' is visible
        //cy.contains(" Logged in as ana").should("be.visible")
        //9. Click 'Delete Account' button
        //cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        //10. Verify that 'ACCOUNT DELETED!' is visible
        cy.contains("Logged in as ana").should("be.visible")
        // 9. Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        //10. Verify that 'ACCOUNT DELETED!' is visible
        cy.contains("Account Deleted!").should("be.visible")
    })
})