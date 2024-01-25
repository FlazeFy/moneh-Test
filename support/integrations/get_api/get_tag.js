// Components
import '../../components/template'

describe('Moneh API Testing - Tag', () => {
    // Template
    const page = 1
    const method = 'get'
    const ord = 'desc'

    it(method.toUpperCase() + ' - All Tag', () => {
        cy.request('api/v1/tag/'+ord+'?page='+page).as(method + 'AllTag')
        cy.get('@' + method + 'AllTag').then(tag => {
            cy.templateGet(tag, true)
        })
    })
})