describe('Moneh E2E Test - TC-ST-001 - Stats', () => {
    const BASEURL = 'http://localhost:3000'
    const date = new Date().toISOString().replace(/:/g, '-')

    it('User Can See Summary Apps', () => {
        // Step 1: Visit Landing Page
        cy.visit(`${BASEURL}`)

        // Step 2: Find the visualization section and you will see total user, money flow, wallet, and wishlist
        cy.get('#visualization').scrollIntoView().should('exist').click({ force: true })
        const check_caption = ['User Use','money flow', 'wallet', 'wishlist']
        check_caption.forEach(dt => {
            cy.get('#visualization').should('contain.text', dt)
        })
        cy.get('#visualization b').each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                const number = parseInt(text.trim(), 10)
                expect(number).to.be.a('number').and.to.be.greaterThan(0)
            })
        })
       
        // Evidence - Step 2
        cy.screenshot(`TC-FB-001_Step-2-${date}`)
    })
})
