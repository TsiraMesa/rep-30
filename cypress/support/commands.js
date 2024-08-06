// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add ("register1", (email,loginname,password) =>{
    cy.visit('https://automationteststore.com/')
    
   cy.log(email, loginname,password)
    // რეგისტრაციის "Login or register"-ის შემოწმება და დაკლიკება.
    cy.get('#customer_menu_top > li') .should("be.visible").click()
    // შემოწმება "I am a new customer." ჩანს
    cy.get('.newcustomer > .heading2').should("have.text","I am a new customer.")
    //გაგრძელება ღილაკზე დაკლიკება
    cy.get('#accountFrm > fieldset > .btn').click()
    //ჩანაწერის შემოწმება რომ ჩანს "Create Account"
    cy.get('.heading1').should("be.visible")
    // "Your Personal Details" მონაცემების შევსება: First Name,Last Name,E-Mail,
    //Telephone,Fax,Company, Address 1,Address 2,City, Region / State,ZIP Code,Country,Login name,Password,
    //Password Confirm,

    cy.get('#AccountFrm_firstname').type("tsiraa")
    cy.get('#AccountFrm_lastname').type("mesablishvili")
    cy.get('#AccountFrm_email').type(email)
    cy.get('#AccountFrm_telephone').type("557764877")
    cy.get('#AccountFrm_fax').type("451263")
    cy.get('#AccountFrm_company').type("XDR")
    cy.get('#AccountFrm_address_1').type("london")
    cy.get('#AccountFrm_address_2').type("london")
    cy.get('#AccountFrm_city').type("london")
    cy.get('#AccountFrm_zone_id').select("Aberdeen")
    cy.get('#AccountFrm_postcode').type("1245")
    cy.get('#AccountFrm_country_id').select("United Kingdom")
    cy.get('#AccountFrm_loginname').type(loginname)
    cy.get('#AccountFrm_password').type(password)
    cy.get('#AccountFrm_confirm').type(password)



    // radio buttons და checboxses მონიშვნა
    cy.get('[for="AccountFrm_newsletter1"]').click()
    cy.get('#AccountFrm_agree').check()
   
    // გაგრძელება ღილაკზე დაწკაპება
    cy.get('.col-md-2 > .btn').click()
      // უნდა ჩანდეს წარწერა " Your Account Has Been Created!"
      cy.get('.maintext').should("be.visible")
      // გაგრძელება ღილაკზე დაკლიკება
      cy.get('.mb40 > .btn').click()

    //1. შემოწმება რეგასტრაციის შემდეგ ჩანს თუ არა "Welcome back tsira" და დაკლიკება.
    cy.get('#customer_menu_top > :nth-child(1)').should("contain","Welcome back tsiraa").click()
     //2 შემოწმება "My Account" ჩანაწერის და "Edit account details" დაკლიკება.
     cy.get('.heading2 > span').should("be.visible")
     cy.get('.side_account_list > :nth-child(3) > a').should("be.visible"). click()
     // მონაცემებში ცვლილების შეტანა: First Name,Last Name,Telephone, Fax
     cy.get('#AccountFrm_firstname').clear()
     cy.get('#AccountFrm_firstname').type("ana")
     cy.get('#AccountFrm_lastname').clear()
     cy.get('#AccountFrm_lastname').type("kupatadze")
     //cy.get('#AccountFrm_email'). type("")sxva validuri meili ar maqvs 
   cy.get('#AccountFrm_telephone').clear()
   cy.get('#AccountFrm_telephone').type("555889966")

   // გაგრძელება 
   cy.get('.col-md-12 > .btn-orange').click()
   // შემოწმება ცვლილებების 
   cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should("contain","Welcome back ana").click()
   cy.get('.side_account_list > :nth-child(3) > a').click()
   cy.get('.col-md-12 > .btn-orange').click()

  //  cvlileba მისამართის 
  cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').click()
  cy.get('.side_account_list > :nth-child(5) > a').click()
  cy.get('.btn > .fa-edit').click()
  cy.get('#AddressFrm_address_1'). clear()
  cy.get('#AddressFrm_address_1').type("ukraine")
  cy.get('#AddressFrm_address_2').clear()
  cy.get('#AddressFrm_address_2').type("ukraine")
  cy.get('#AddressFrm_city'). clear()
  cy.get('#AddressFrm_city').type("kiev")
  cy.get('#AddressFrm_country_id').select("Ukraine")
  cy.get('#AddressFrm_zone_id').select("Rivne")
  cy.get('.col-md-12 > .btn-orange').click()

  //პაროლის შეცვლა
  cy.get('.side_account_list > :nth-child(4) > a').click()
  cy.get('.heading1').should("contain","Change Password")
  cy.get('#PasswordFrm_current_password').type("Konstantine123")
  cy.get('#PasswordFrm_password').type("Markhva123")
  cy.get('#PasswordFrm_confirm').type("Markhva123")
  cy.get('.col-md-12 > .btn-orange').click()



})