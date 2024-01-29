import { generate } from 'random-words'

// Components
import '../../components/template'
import { getSlug } from '../../components/converter'

describe('Moneh API Testing - Tag', () => {
    const method = 'post'

    it(method.toUpperCase() + ' - Tag', () => {
        const name = generate({ maxLength: 36 })

        const builder = {
            "tags_slug": getSlug(name),
            "tags_name": name
        }

        cy.request({
            method: method, 
            url: 'api/v1/tag', 
            form: true,
            body: builder,
        }).as(method + 'Tag').then(dct => {
            cy.templatePost(dct, builder)
        })
    })
})