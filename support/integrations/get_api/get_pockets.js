// Components
import '../../components/template'

describe('Moneh API Testing - Pocket', () => {
    // Template
    const is_paginate = true
    const method = 'get'

    it(method.toUpperCase() + ' - All Pocket', () => {
        cy.request('api/v1/pockets/headers/desc?page=1').as(method + 'AllPockets')
        cy.get('@' + method + 'AllPockets').then(pocket => {
            cy.componentAPIDefault(pocket, is_paginate)
        })
    })
})