Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

describe("HSBC CreditCard test ", () => {
  beforeEach(() => {
      
      cy.visit('https://www.hsbc.co.in/')
  })

  it("HSBS credit cars test", () => {
      
      cy.get('span[class="header-main-navigation-title"]').contains('Banking').click({ force: true })

      
      cy.get('h2[class="doormat-heading"]').contains('Credit Cards').click({ force: true })

     
      cy.get('h1').contains('Credit cards')
      cy.screenshot()

      
      cy.get('img#chp_main_image_3').should('be.visible')
      cy.get('span[class="link text"]').contains('HSBC Taj Credit Card')
      cy.get('div[class="item-content-text"]').contains('The Rarest Key. Experience the ultimate in luxury, from tailored stays at Taj Hotels to unrivalled privileges that match your lifestyle.')
      cy.screenshot()
      
      cy.get('span[class="link text"]').contains('HSBC Taj Credit Card').click({ force: true })

      cy.url().should('include', 'https://www.hsbc.co.in/credit-cards/products/taj/')

      cy.get('h1').contains('HSBC Taj Credit Card')

      cy.get('div.header-logo>a>img').click()

      cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')

  })
})
