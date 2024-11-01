describe('Positive Login Functionality Tests', () =>{
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
    it('Successfully logs in with valid credentials', () => {
        // Enter valid credentials
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        //click login button
        cy.get('#submit').click()

        //verify successful login
        cy.url().should('include', '/logged-in-successfully')
        cy.contains('Logged In Successfully').should('be.visible')
        cy.get('.post-title').should('have.text', 'Logged In Successfully')
    })
})