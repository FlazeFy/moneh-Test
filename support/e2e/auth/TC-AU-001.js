describe('Moneh E2E Test - TC-AU-001 - Auth', () => {
    const BASEURL = 'http://localhost:3000'
    const username = 'flazefy'
    const password = 'test123'
    const date = new Date().toISOString().replace(/:/g, '-')

    it('User Can Login With Valid Credential', () => {
        // Step 1: Visit Login Page
        cy.visit(`${BASEURL}/login`)

        // Step 2: Fill in Login form
        cy.get('#username-input').type(username)
        cy.get('#password-input').type(password)

        // Evidence - Step 2
        cy.screenshot(`TC-AU-001_Step-2-${date}`)

        // Step 3: Click Submit button
        cy.get('#submit-login-button').click()
        
        // Step 4: After Validation Process, user redirected to dashboard
        // Expected Result
        cy.url().should('include', '/dashboard')

        // Evidence - Step 4
        cy.screenshot(`TC-AU-001_Step-4-${date}`)
    })
})
