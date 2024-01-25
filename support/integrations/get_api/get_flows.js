// Components
import '../../components/template'

describe('Moneh API Testing - Flow', () => {
    // Template
    const is_paginate = true
    const method = 'get'
    const ord = 'desc'
    const page = 1

    it(method.toUpperCase() + ' - All Flow', () => {
        cy.request('api/v1/flows/'+ord+'?page='+page).as(method + 'AllFlows')
        cy.get('@' + method + 'AllFlows').then(flow => {
            cy.templateGet(flow, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Summary', () => {
        const flowType = 'spending'

        cy.request('api/v1/flows/summary/'+flowType).as(method + 'Summary')
        cy.get('@' + method + 'Summary').then(flow => {
            cy.templateGet(flow, false)
        })
    })
})