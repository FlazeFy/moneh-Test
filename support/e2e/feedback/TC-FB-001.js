describe('Moneh E2E Test - TC-FB-001 - Feedback', () => {
    const BASEURL = 'http://localhost:3000'
    const rate = 9
    const feedback_body = 'lorem ipsum'
    const date = new Date().toISOString().replace(/:/g, '-')

    it('User Can Send Feedback', () => {
        // Step 1: Visit Landing Page
        cy.visit(`${BASEURL}`)

        // Step 2: Find the "SEND FEEDBACK" section and Fill in Feedback form
        cy.get('h1.text-primary').scrollIntoView()
        cy.get('h1.text-primary').should('exist').click({ force: true })

        cy.get('#feedback_rate-input').invoke('val', rate).trigger('input', { force: true })
        cy.get('#feedback_body-input').invoke('val', feedback_body).trigger('input', { force: true })

        // Evidence - Step 2
        cy.screenshot(`TC-FB-001_Step-2-${date}`)

        // Step 3: Click Submit button
        cy.get('#feedback_submit-button').trigger('click', { force: true })
        
        // Step 4: A Success pop up with caption "Feedbacks create" will appear after submit
        cy.get('.swal2-popup', { timeout: 5000 }).should('exist')
        .then(() => {
            cy.screenshot(`TC-FB-004_Step-4-${date}`)
            cy.get('.swal2-popup').contains('Feedbacks create')
        })
    })
})
