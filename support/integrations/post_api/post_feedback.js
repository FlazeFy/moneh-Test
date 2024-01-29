import { generate } from 'random-words'

// Components
import '../../components/template'
import { generateRandNumber } from '../../components/generator'

describe('Moneh API Testing - Feedback', () => {
    const method = 'post'

    it(method.toUpperCase() + ' - Feedback', () => {
        const builder = {
            "feedbacks_rate": generateRandNumber(10, 1),
            "feedbacks_desc": generate({ maxLength: 255 })
        }

        cy.request({
            method: method, 
            url: 'api/v1/feedbacks', 
            form: true,
            body: builder,
        }).as(method + 'Feedback').then(dct => {
            cy.templatePost(dct, builder)
        })
    })
})