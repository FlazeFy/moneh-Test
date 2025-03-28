describe('Moneh E2E Test - TC-UM-001 - User Manual', () => {
    const BASEURL = 'http://localhost:3000'
    const date = new Date().toISOString().replace(/:/g, '-')

    it('User Can See The About Apps', () => {
        // Step 1: Visit Landing Page
        cy.visit(`${BASEURL}`)
        cy.get('#navbar').should('exist')

        // Step 2: In the Navbar, Find and Click "About" button
        cy.get('#about-button').click()
        cy.url().should('include', '/about')
        cy.screenshot(`TC-UM-001_Step-2-${date}`)

        // Step 3: In the About Page. User can see the About Apps and About Creator information
        const list_content = ['About Moneh','About Creator']
        list_content.forEach(dt => {
            cy.get('.container-white').contains('h1', dt).parents('.container-white').within(() => {
                cy.get('h5').should('exist')
            })
        })
    })
})
