describe('Moneh E2E Test - TC-NAV-001 - Navigation', () => {
    const BASEURL = 'http://localhost:3000'
    const date = new Date().toISOString().replace(/:/g, '-')

    it('Validate The Menu List For A Public User (Not Signed In)', () => {
        // Step 1: Visit Login Page
        cy.visit(`${BASEURL}/`)

        // Step 2: Check if navbar exists
        cy.get('.navbar', { timeout: 5000 }).should('exist')
        cy.screenshot(`TC-NAV-001_Step-2-${date}`)

        // Step 3: Validate menu items
        // Notes : '' item in list menu is button without text
        const listMenu = ['Home', 'Dashboard', 'Feature', 'Visualization', 'Feedback', 'About' ,'']
        cy.get('.navbar a').should('have.length', listMenu.length)
        cy.get('.navbar a').each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                expect(listMenu).to.include(text.trim())
            })
        })
    })
})
