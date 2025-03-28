// Components
import '../../components/template'

describe('Moneh API Testing - Auth', () => {
    const method = 'post'

    it(method.toUpperCase() + ' - Login User', () => {
        // Post login
        const builder = {
            "username": 'flazefy',
            "password": 'test123',
        }

        cy.request({
            method: method, 
            url: 'api/v1/login',
            body: builder,
        }).then(dt => {
            expect(dt.status).to.equal(200)

            const body = dt.body
            expect(body.data.token).to.be.a('string')
        })
    })

    it(method.toUpperCase() + ' - Sign Out', () => {
        // Post login
        const payload = {
            "username": 'flazefy',
            "password": 'test123',
        }

        cy.templateE2ELoginAPI(payload.username, payload.password).then(token => {
            cy.request({
                method: method,
                url: `/api/v1/logout`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).as('GetSignOut')
            cy.get('@GetSignOut').then(dt => {
                cy.templateGet(200,dt, null)
                expect(dt.body.message).contain('Account sign out')
            })
        })
    })
})