import { generate } from 'random-words'

// Components
import '../../components/template'
import { generateRandDctType } from '../../components/generator'

describe('Moneh API Testing - Dictionary', () => {
    const method = 'post'

    it(method.toUpperCase() + ' - Dictionary', () => {
        const builder = {
            "dictionaries_type": generateRandDctType(),
            "dictionaries_name": generate({ maxLength: 36 })
        }

        cy.request({
            method: method, 
            url: 'api/v1/dct', 
            form: true,
            body: builder,
        }).as(method + 'Dictionary').then(dct => {
            cy.templatePost(dct, builder)
        })
    })
})