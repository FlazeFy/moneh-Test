Cypress.Commands.add('templateGet', (code, obj, is_paginate) => {
    let dataType

    // Builder
    if(is_paginate){
        dataType = 'object'
    } else {
        dataType = 'array'
    }

    // Test
    expect(obj.status).to.equal(code)
    expect(obj.body.message).to.be.a('string')

    if(is_paginate == false && code == 200){
        expect(obj.body.data).to.be.a(dataType)
    }

    if(is_paginate == true && code == 200){
        expect(obj.body.data.data).to.be.a('array')
    }
});

Cypress.Commands.add('templatePost', (obj, builder) => {
    // Test
    expect(obj.status).to.equal(200)
    expect(obj.body.message).to.be.a('string')
    expect(obj.body.data.rows_affected).to.eq(1)
    
    Object.entries(builder).forEach(([key, value]) => {
        expect(obj.body.data.data[key]).to.eq(value)
    });
});

Cypress.Commands.add('templateValidateColumn', (data, obj, dataType) => {
    // Test
    data.forEach((item) => {
        obj.forEach((field) => {
            expect(item).to.be.an('object')
            expect(item).to.have.property(field).that.is.a(dataType)

            if(dataType == "number"){
                expect(item[field] % 1).to.equal(0)
            }
        });
    });
});

Cypress.Commands.add('templateValidateColumn', (data, obj, dataType, nullable) => {
    const dataArray = Array.isArray(data) ? data : [data];

    dataArray.forEach((item) => {
        expect(item).to.be.an('object')
        obj.forEach((field) => {
            expect(item).to.have.property(field)
            if (nullable && item[field] === null) {
                expect(item[field]).to.be.null
            } else {
                expect(item[field]).to.be.a(dataType)

                if(dataType === "number"){
                    if(Number.isInteger(item[field])){
                        expect(item[field] % 1).to.equal(0)
                    } else {
                        expect(item[field] % 1).to.not.equal(0)
                    }
                }
            }
        });
    });
});

Cypress.Commands.add('templateValidateContain', (data, list, target) => {
    data.forEach((item, idx) => {
        expect(item).to.be.an('object')
        expect(list,`Column ${target} with value = ${item[target]} must contain in list. Index Data : ${idx}`).to.include(item[target])
    });
});

Cypress.Commands.add('templateE2ELogin', (username, password) => {
    const BASEURL = 'http://localhost:3000'
    const date = new Date().toISOString().replace(/:/g, '-')

    // Pre Condition : User Must Logged In To Their Account
    cy.visit(`${BASEURL}/login`)
    cy.get('#username-input').type(username)
    cy.get('#password-input').type(password)
    cy.get('#submit-login-button').click()
    cy.url().should('include', '/dashboard')
})

Cypress.Commands.add('templateE2ELoginAPI', (username, password) => {
    return cy.request({
        method: 'POST', 
        url: 'api/v1/login',
        body: {
            username: username,
            password: password,
        },
    }).then(res => {
        expect(res.status).to.equal(200)
        const token = res.body.data.token
        return token
    });
});