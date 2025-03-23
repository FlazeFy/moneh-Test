describe('Moneh E2E Test - TC-AU-004 - Auth', () => {
    const BASEURL = 'http://localhost:3000'
    const username = 'flazefy'
    const password = 'nopas'
    const date = new Date().toISOString().replace(/:/g, '-')

    it(`User Cant Login With Invalid Credential's Character Length`, () => {
        // Notes : Password should have minimal 6 character 

        // Step 1: Visit Login Page
        cy.visit(`${BASEURL}/login`)

        // Step 2: Fill in Login form
        cy.get('#username-input').type(username)
        cy.get('#password-input').type(password)

        // Evidence - Step 2
        cy.screenshot(`TC-AU-004_Step-2-${date}`)

        // Step 3: Click Submit button
        cy.get('#submit-login-button').click()
        
        // Step 4: After Validation Process, a Failed Pop-Up will appear with text "The password field must be at least 6 characters"
        cy.get('.swal2-popup', { timeout: 5000 }).should('exist')
        .then(() => {
            cy.screenshot(`TC-AU-004_Step-3-${date}`)

            cy.get('.swal2-popup').contains('The password field must be at least 6 characters')
        })

        // Expected Result
        cy.url().should('include', '/')

        // Evidence - Step 4
        cy.screenshot(`TC-AU-004_Step-4-${date}`)
    })
})
