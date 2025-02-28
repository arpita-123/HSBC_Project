Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('ATM Locator Test Scenarios', () => {

  beforeEach(() => {
      cy.visit('https://www.hsbc.co.in/')
  })
  it('Login Test', () => {

    cy.wait(10000)
    
    cy.get('img[alt="HSBC India Bank"]').should('be.visible') 

   cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit' to equal 'HSBC India - Credit Cards, NRI Services, Saving')

   cy.get('a[role="button"]').click({ force: true })

   cy.get('').should('be.visible') 

   



     

      




  })
   
  


} )












