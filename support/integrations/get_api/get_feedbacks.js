// Components
import '../../components/template'

describe('Moneh API Testing - Feedback', () => {
    // Template
    const page = 1
    const method = 'get'
    const ord = 'desc'
    const ord_obj = 'created_at'

    it(method.toUpperCase() + ' - All Feedback', () => {
        cy.request('api/v1/feedbacks/'+ord_obj+'/'+ord+'?page='+page).as(method + 'AllFeedbacks')
        cy.get('@' + method + 'AllFeedbacks').then(tag => {
            cy.templateGet(tag, true)
        })
    })
})