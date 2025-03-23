describe('Moneh E2E Test - TC-AU-003 - Auth', () => {
    const BASEURL = 'http://localhost:3000'
    const username = ' '
    const password = ' '
    const date = new Date().toISOString().replace(/:/g, '-')

    it('User Cant Login With Empty Credential', () => {
        // Step 1: Visit Login Page
        cy.visit(`${BASEURL}/login`)

        // Step 2: Fill in Login form
        cy.get('#username-input').type(username)
        cy.get('#password-input').type(password)

        // Evidence - Step 2
        cy.screenshot(`TC-AU-003_Step-2-${date}`)

        // Step 3: Click Submit button
        cy.get('#submit-login-button').click()
        
        // Step 4: After Validation Process, a Failed Pop-Up will appear with text "The username field is required" and "The password field is required"
        cy.get('.swal2-popup', { timeout: 5000 }).should('exist')
        .then(() => {
            cy.screenshot(`TC-AU-003_Step-3-${date}`)

            const textContains = ['The username field is required','The password field is required']
            textContains.forEach(dt => {
                cy.get('.swal2-popup').contains(dt)
            })
        })

        // Expected Result
        cy.url().should('include', '/')

        // Evidence - Step 4
        cy.screenshot(`TC-AU-003_Step-4-${date}`)
    })
})
