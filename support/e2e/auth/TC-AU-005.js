// Components
import '../../components/template'

describe('Moneh E2E Test - TC-AU-005 - Auth', () => {
    const username = 'flazefy'
    const password = 'test123'
    const date = new Date().toISOString().replace(/:/g, '-')

    it('User Can Sign Out From The Apps', () => {
        // Pre Condition : User Must Logged In To Their Account
        cy.templateE2ELogin(username, password).then(() => {
            // Step 1: After Signed In. In the Navbar, Find and Click "Sign Out" button
            cy.screenshot(`TC-AU-005_Step-1-${date}`)
            cy.get('#navbar').should('exist')
            cy.get('#sign_out-button').scrollIntoView().should('be.visible').click({ force: true })

            // Step 2: In the Pop-Up Sign Out Validation with text "Are you sure want to sign out from this account?", Click "Yes"
            cy.get('#signoutModal', { timeout: 5000 }).should('exist')
            .then(modal => {
                cy.screenshot(`TC-AU-005_Step-2-${date}`)
                cy.wrap(modal).get('.modal-content').contains('Are you sure want to sign out from this account?')
                cy.wrap(modal).get('.modal-content').contains('button', 'Yes').click()
            })
            // Expected Result
            cy.url().should('include', '/')
            // Evidence - Expected Result
            cy.screenshot(`TC-AU-005_Step-2-${date}`)
        })
    })
})
