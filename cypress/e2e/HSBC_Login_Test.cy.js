
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("HSBC Login Test ", () => {

    beforeEach(() => {
        cy.visit('https://www.hsbc.co.in/')
    })

    it("Load the HSBC page for login test", () => {
        
        cy.viewport(1600, 1000)

        cy.get('div[class="header-logo lg-2"]').should('be.visible')

        cy.get('title').contains('HSBC India - Credit Cards, NRI Services, Saving and Deposit')

        cy.get('a[class="selected-item login-button only-one-link"]').click({ multiple: true, force: true })

        cy.get('h2[class="pull-left heading t28l"]>span').should('be.visible')

        cy.get('button#username_submit_btn').should('be.visible')
        cy.screenshot()

         cy.get('input#username').type('testingofpage@gmail.com')

         cy.get('input#rememberMe').check()
        cy.screenshot()

        cy.get('span[class="icon icon-circle-help-solid help-icon"]').should('be.visible')
        cy.screenshot()
        cy.get('span[class="icon icon-circle-help-solid help-icon"]').click({ force: true })

        cy.get('h3').contains('Username')

        cy.wait(1500)

        cy.get('span[class="icon icon-delete"]').should('be.visible')

        cy.get('span[class="icon icon-delete"]').click({ force: true })


    })
})
   



     

      




  
   
  














