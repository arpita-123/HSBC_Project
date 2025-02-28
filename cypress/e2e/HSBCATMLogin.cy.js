Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('ATM Locator Test Scenarios', () => {

  beforeEach(() => {
      cy.visit('https://www.hsbc.co.in/')
  })
  it('Login Test', () => {
    
      cy.get('img[alt="HSBC Logo"]').should('be.visible');

      cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving');

     

      




  })
   
  


} )