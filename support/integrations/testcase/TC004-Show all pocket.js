// Components
import '../../components/template'

describe('Moneh API Testing Suite - TC-004 Show all pocket', () => {
    // Template
    const methodCaseOne = 'post'
    const methodCaseTwo = 'get'
    const page = 1
    const ord = 'desc'
    const is_paginate = true

    it(methodCaseOne.toUpperCase() + ' - Show all flow', () => {
        // Post login
        const builder = {
            "username": 'flazefy',
            "password": 'nopass123',
        }

        cy.request({
            method: methodCaseOne, 
            url: 'api/v1/login',
            form: true,
            body: builder,
        }).then(auth => {
            expect(auth.status).to.equal(200)
            const token = auth.body.token
            cy.wrap(token).as('token_TC004')
        })

        // Get all flow
        cy.get('@token_TC004').then(token => {
            cy.request({
                method: methodCaseTwo,
                url: `api/v1/pockets/headers/${ord}?page=${page}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                cy.templateGet(response, is_paginate)
                const resultItem = response.body

                // Get data on page
                expect(resultItem).to.have.property('data')
                const data = resultItem.data
                expect(data).to.have.property('data')
                const dataArray = data.data
                expect(dataArray).to.be.an('array')

                const stringFields = ['id', 'pockets_name', 'pockets_desc', 'pockets_type']
                const integerFields = ['pockets_limit']

                // Validate column
                cy.templateValidateColumn(dataArray, stringFields, 'string')
                cy.templateValidateColumn(dataArray, integerFields, 'number')
            })
        })
    })
})