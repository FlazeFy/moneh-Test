// Components
import { generateRandBool, generateRandDctType } from '../../components/generator'
import '../../components/template'

describe('Moneh API Testing - Dictionary', () => {
    // Template
    const is_paginate = generateRandBool()
    const page = 1
    const method = 'get'
    let dctType = 'all'

    if(!is_paginate){
        dctType = generateRandDctType()
    }

    it(method.toUpperCase() + ' - Dictionary By Type', () => {
        cy.request('api/v1/dct/'+dctType+'?page='+page).as(method + 'DictionaryByType')
        cy.get('@' + method + 'DictionaryByType').then(dct => {
            cy.templateGet(dct, is_paginate)
        })
    })
})