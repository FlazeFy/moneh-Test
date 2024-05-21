// Components
import '../../components/template'

describe('Moneh API Testing Suite - TC-001 Login', () => {
    // Template
    const methodCaseOne = 'post'
    const methodCaseTwo = 'get'
    const is_paginate = false

    it(methodCaseOne.toUpperCase() + ' - Login', () => {
        // Post login
        const builder = {
            "username": 'flazefy',
            "password": 'nopass123',
        }

        cy.request({
            method: methodCaseOne, 
            url: 'api/v1/login',
            body: builder,
        }).then(auth => {
            expect(auth.status).to.equal(200)
            const token = auth.body.token
            cy.wrap(token).as('token_TC001')
        })

        // View dashboard for test auth
        cy.get('@token_TC001').then(token => {
            cy.request({
                method: methodCaseTwo,
                url: 'api/v1/dct/flows_category?page=1',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(csm => {
                cy.templateGet(csm, is_paginate)
            })
        })
    })
})