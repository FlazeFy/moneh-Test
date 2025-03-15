// Components
import '../../components/template'

describe('Moneh API Testing - Tag', () => {
    // Template
    const page = 1
    const method = 'get'
    const ord = 'desc'
    const is_paginate = true

    it(method.toUpperCase() + ' - All Tag', () => {
        cy.request(`api/v1/tag/${ord}?page=${page}`).as(method + 'AllTag')
        cy.get('@' + method + 'AllTag').then(dt => {
            cy.templateGet(200, dt, is_paginate)

            // Get item holder
            const resultItem = dt.body
            expect(resultItem).to.have.property('data')
            const dataArr = resultItem.data.data
            expect(dataArr).to.be.an('array')

            // Get list key / column
            const stringFields = ['tags_slug','tags_name']

            // Validate column
            cy.templateValidateColumn(dataArr, stringFields, 'string', false)
        })
    })
})