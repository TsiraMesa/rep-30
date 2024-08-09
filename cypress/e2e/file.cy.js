describe('template spec', () => {
    it('login', () => {
      let random=math.rand((Math.random()*100))
      cy. log (random)
      let email ="ciramesa@gmail.com"
      let loginname="AnaMesa"
      let pass = "Konstantine12345"
      cy.register1(email,loginname,pass)
      cy.log ("is registered")
   

 
    })
})