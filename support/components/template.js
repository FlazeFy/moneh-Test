Cypress.Commands.add('templateGet', (obj, is_paginate) => {
    let dataType

    // Builder
    if(is_paginate){
        dataType = 'object'
    } else {
        dataType = 'array'
    }

    // Test
    expect(obj.status).to.equal(200)
    expect(obj.body.message).to.be.a('string')
    expect(obj.body.data).to.be.a(dataType)

    if(is_paginate){
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