// Components
import '../../components/template'
import { generateAuthToken } from '../../components/generator'

describe('Moneh API Testing - Stats', () => {
    // Template
    const is_paginate = false
    const method = 'get'
    const ord = 'desc'
    const token = generateAuthToken("hardcode")

    const template_stats_expect = (dt) => {
        // Get item holder
        const resultItem = dt.body
        expect(resultItem).to.have.property('data')
        const dataArr = resultItem.data
        expect(dataArr).to.be.an('array')

        // Get list key / column
        const stringFields = ['context']
        const intFields = ['total']

        // Validate column
        cy.templateValidateColumn(dataArr, stringFields, 'string', false)
        cy.templateValidateColumn(dataArr, intFields, 'number', false)
    }

    it(method.toUpperCase() + ' - Total Flows By Type', () => {
        cy.request({
            method: 'get',
            url: 'api/v1/stats/flowtype/'+ord,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).as(method + 'TotalFlowsByType')
        cy.get('@' + method + 'TotalFlowsByType').then(dt => {
            cy.templateGet(200, dt, is_paginate)
            template_stats_expect(dt)            
        })
    })

    it(method.toUpperCase() + ' - Total Pockets By Type', () => {
        cy.request({
            method: 'get',
            url: 'api/v1/stats/pockettype/'+ord,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).as(method + 'TotalPocketsByType')
        cy.get('@' + method + 'TotalPocketsByType').then(dt => {
            cy.templateGet(200, dt, is_paginate)
            template_stats_expect(dt)
        })
    })

    it(method.toUpperCase() + ' - Total Flows By Cat', () => {
        cy.request({
            method: 'get',
            url: 'api/v1/stats/flowcat/'+ord,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).as(method + 'TotalFlowsByCat')
        cy.get('@' + method + 'TotalFlowsByCat').then(dt => {
            cy.templateGet(200, dt, is_paginate)
            template_stats_expect(dt)
        })
    })

    it(method.toUpperCase() + ' - Dashboard', () => {
        cy.request({
            method:'get',
            url: 'api/v1/dashboard',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).as(method + 'Dashboard')
        cy.get('@' + method + 'Dashboard').then(dt => {
            cy.templateGet(200, dt, null)

            // Get item holder
            const resultItem = dt.body
            expect(resultItem).to.have.property('data')
            const dataObj = resultItem.data
            expect(dataObj).to.be.an('object')

            // Get list key / column
            const stringNullableFields = ['last_income','most_expensive_spending','most_highest_income']
            const intNullableFields = ['last_income_value','last_spending_value','most_expensive_spending_value','most_highest_income_value','total_item_income','total_item_spending','my_balance']

            // Validate column
            cy.templateValidateColumn(dataObj, stringNullableFields, 'string', true)
            cy.templateValidateColumn(dataObj, intNullableFields, 'number', true)  
        })
    })

    it(method.toUpperCase() + ' - Total Wishlist By Type', () => {
        cy.request({
            method:'get',
            url: 'api/v1/stats/wishlisttype/'+ord,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).as(method + 'TotalWishlistByType')
        cy.get('@' + method + 'TotalWishlistByType').then(dt => {
            cy.templateGet(200, dt, is_paginate)
            template_stats_expect(dt)
        })
    })

    it(method.toUpperCase() + ' - Total Wishlist By Priority', () => {
        cy.request({
            method: 'get',
            url: 'api/v1/stats/wishlistpriority/'+ord,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).as(method + 'TotalWishlistByPriority')
        cy.get('@' + method + 'TotalWishlistByPriority').then(stats => {
            cy.templateGet(200, stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Wishlist By Cat', () => {
        cy.request({
            method:'get',
            url:'api/v1/stats/wishlistisachieved/'+ord,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).as(method + 'TotalWishlistByCat')
        cy.get('@' + method + 'TotalWishlistByCat').then(dt => {
            cy.templateGet(200, dt, is_paginate)
            template_stats_expect(dt)
        })
    })
})