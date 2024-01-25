// Components
import '../../components/template'

describe('Moneh API Testing - Stats', () => {
    // Template
    const is_paginate = false
    const method = 'get'

    it(method.toUpperCase() + ' - Total Flows By Type', () => {
        cy.request('api/v1/stats/flowtype/desc').as(method + 'TotalFlowsByType')
        cy.get('@' + method + 'TotalFlowsByType').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })
    it(method.toUpperCase() + ' - Total Pockets By Type', () => {
        cy.request('api/v1/stats/pockettype/desc').as(method + 'TotalPocketsByType')
        cy.get('@' + method + 'TotalPocketsByType').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })
    it(method.toUpperCase() + ' - Total Dictionaries By Type', () => {
        cy.request('api/v1/stats/dcttype/desc').as(method + 'TotalDictionariesByType')
        cy.get('@' + method + 'TotalDictionariesByType').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })
    it(method.toUpperCase() + ' - Total Flows By Cat', () => {
        cy.request('api/v1/stats/flowcat/desc').as(method + 'TotalFlowsByCat')
        cy.get('@' + method + 'TotalFlowsByCat').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })
    it(method.toUpperCase() + ' - Dashboard', () => {
        cy.request('api/v1/stats/dcttype/desc').as(method + 'Dashboard')
        cy.get('@' + method + 'Dashboard').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })
})