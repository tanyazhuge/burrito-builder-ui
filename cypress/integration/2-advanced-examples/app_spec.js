describe('OrderForm and App', () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/orders', {fixture:'orders'})
        .visit('http://localhost:3000/')
    })

    it('Should confirm that header is present', () => {
        cy.get('h1')
        .contains('Burrito Builder') 
    });

    it('Should have a form with a submit order button', () => {
        cy.get('form')
        cy.get('button')
        .contains('Submit Order')
    });

    it('Should be able to submit a form', () => {
        cy.get('form')
        cy.get('.nameInput').type('Ana')
        cy.get('.ingBut').click({ multiple: true })
        cy.get('.submit').click()
    
    });

  });