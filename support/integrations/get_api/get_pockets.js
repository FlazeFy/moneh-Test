// Components
import '../../components/template'

describe('Moneh API Testing - Pocket', () => {
    // Template
    const is_paginate = true
    const method = 'get'
    const ord = 'desc'
    const page = 1

    it(method.toUpperCase() + ' - All Pocket', () => {
        cy.request('api/v1/pockets/headers/'+ord+'?page='+page).as(method + 'AllPockets')
        cy.get('@' + method + 'AllPockets').then(pocket => {
            cy.templateGet(200, pocket, is_paginate)
        })
    })
})