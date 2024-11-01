describe('Negetive Login Functionality Tests', ()=> {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('Fails to log in with incorrect credentials', () => {
        // Enter incorrect username
        cy.get('#username').type('invaliduser')
        cy.get('#password').type('wrongpassword')

        // Click login button
        cy.get('#submit').click()

         // Verify error message
        cy.get('#error').should('be.visible')
        cy.get('#error').should('contain', 'Your username is invalid!')
        

    })
})