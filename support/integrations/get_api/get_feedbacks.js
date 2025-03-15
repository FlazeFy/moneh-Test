// Components
import '../../components/template'

describe('Moneh API Testing - Feedback', () => {
    // Template
    const page = 1
    const is_paginate = true
    const method = 'get'
    const ord = 'desc'

    it(method.toUpperCase() + ' - All Feedback', () => {
        const ord_obj = 'created_at'

        cy.request(`api/v1/feedbacks/${ord_obj}/${ord}?page=${page}`).as(method + 'AllFeedbacks')
        cy.get('@' + method + 'AllFeedbacks').then(dt => {
            cy.templateGet(200, dt, is_paginate)

            // Get item holder
            const resultItem = dt.body
            expect(resultItem).to.have.property('data')
            const dataArr = resultItem.data.data
            expect(dataArr).to.be.an('array')

            // Get list key / column
            const stringFields = ['feedbacks_desc','created_at']
            const intFields = ['feedbacks_rate']

            // Validate column
            cy.templateValidateColumn(dataArr, stringFields, 'string', false)
            cy.templateValidateColumn(dataArr, intFields, 'number', false)
        })
    })
})