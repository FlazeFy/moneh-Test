// Components
import '../../components/template'

describe('Moneh API Testing - Stats', () => {
    // Template
    const is_paginate = false
    const method = 'get'
    const ord = 'desc'

    it(method.toUpperCase() + ' - Total Flows By Type', () => {
        cy.request('api/v1/stats/flowtype/'+ord).as(method + 'TotalFlowsByType')
        cy.get('@' + method + 'TotalFlowsByType').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Pockets By Type', () => {
        cy.request('api/v1/stats/pockettype/'+ord).as(method + 'TotalPocketsByType')
        cy.get('@' + method + 'TotalPocketsByType').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Dictionaries By Type', () => {
        cy.request('api/v1/stats/dcttype/'+ord).as(method + 'TotalDictionariesByType')
        cy.get('@' + method + 'TotalDictionariesByType').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Flows By Cat', () => {
        cy.request('api/v1/stats/flowcat/'+ord).as(method + 'TotalFlowsByCat')
        cy.get('@' + method + 'TotalFlowsByCat').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Dashboard', () => {
        cy.request('api/v1/stats/dcttype/'+ord).as(method + 'Dashboard')
        cy.get('@' + method + 'Dashboard').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Dct To Module', () => {
        const table = 'flows'
        const column = 'flows_category'

        cy.request('api/v1/stats/dctmod/'+table+'/'+column).as(method + 'TotalDctToModule')
        cy.get('@' + method + 'TotalDctToModule').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Wishlist By Type', () => {
        cy.request('api/v1/stats/wishlisttype/'+ord).as(method + 'TotalWishlistByType')
        cy.get('@' + method + 'TotalWishlistByType').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Wishlist By Priority', () => {
        cy.request('api/v1/stats/wishlistpriority/'+ord).as(method + 'TotalWishlistByPriority')
        cy.get('@' + method + 'TotalWishlistByPriority').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })

    it(method.toUpperCase() + ' - Total Wishlist By Cat', () => {
        cy.request('api/v1/stats/wishlistisachieved/'+ord).as(method + 'TotalWishlistByCat')
        cy.get('@' + method + 'TotalWishlistByCat').then(stats => {
            cy.componentAPIDefault(stats, is_paginate)
        })
    })
})