Cypress.Commands.add('componentAPIDefault', (obj, is_paginate) => {
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
