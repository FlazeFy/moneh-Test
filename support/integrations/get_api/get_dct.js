// Components
import '../../components/template'

describe('Moneh API Testing - Dictionary', () => {
    // Template
    const is_paginate = true
    const page = 1
    const method = 'get'

    it(method.toUpperCase() + ' - Dictionary By Type', () => {
        const dctType = 'flows_category'

        cy.request(`api/v1/dct/${dctType}?page=${page}`).as(method + 'DictionaryByType')
        cy.get('@' + method + 'DictionaryByType').then(dt => {
            // cy.templateGet(200, dt, is_paginate)
            cy.templateGet(200, dt, false)

            // Get item holder
            const resultItem = dt.body
            expect(resultItem).to.have.property('data')
            const dataArr = resultItem.data
            expect(dataArr).to.be.an('array')

            // Get list key / column
            const stringFields = ['dictionaries_name']
            const intFields = ['id']

            // Validate column
            cy.templateValidateColumn(dataArr, stringFields, 'string', false)
            cy.templateValidateColumn(dataArr, intFields, 'number', false)
        })
    })
})