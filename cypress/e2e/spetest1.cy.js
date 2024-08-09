describe('template spec', () => {
  it('passes', ()  => {
    
    let random=Math.random()*1000
    cy. log (random)
    let email="ciramesablishvili"+random+"@gmail.com"
    let loginname="Konstantine"+random
    let password= "Konstantine123"
     
    cy.register1(email, loginname, password)
    cy.log("is registerd")
    



  })
})