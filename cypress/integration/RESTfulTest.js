describe('RESTful API testing', () => {
    it('returns JSON', () => {
      cy.request('/user')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json')
    })
    //List users
    it('Get User List',()=>{
        cy.request('GET','/users').then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.data[0].first_name).equal('George');
            expect(response.body).to.not.be.null;
            expect(response.body.data).to.have.length(6);
        })

    });
    //Response: 404 with no response
    it('Single user not found',()=>{
        cy.request({method:'GET',url:'/users/23',failOnStatusCode: false}).its('status').should('eq',404);
    });

 
});
describe('Registration API call', () => {
    //POST-Successful registration
    it('POST-Successful registration', () => {
        cy.request({
            method:'POST',
            url: '/register',
            body:{
                "email": "eve.holt@reqres.in",
                "password": "pistol"            
            }
        }).as('request')

        cy.get('@request').then(response => {
            expect(response.status).equal(200)
            expect(response.body).have.property('token').to.eq('QpwL5tke4Pnpja7X4');
        })
    });
    //POST-Unsuccessful registratio
    it('POST-Unsuccessful registration', () => {
        cy.request({
            method:'POST',
            url: '/register',
            body:{
                "email": "sydney@fife"
            },
            failOnStatusCode: false
        }).as('request')

        cy.get('@request').then(response => {
            expect(response.status).equal(400)
            expect(response.body).to.deep.equals({ error: 'Missing password' }) 
        })
    });
});