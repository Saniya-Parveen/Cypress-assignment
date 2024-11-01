describe('Login Functionality Tests', () => {
    beforeEach(() => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
    it('Displays error when no credentials are entered', () => {
        // Do not enter any credentials
        cy.get('#submit').click()

        // Verify error handling
        cy.get('#error').should('be.visible')
        cy.get('#error').should('contain', 'Your username is invalid!')
    })
})