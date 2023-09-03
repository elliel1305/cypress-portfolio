describe('Test Coffee-Cart App', () => {
    it('Add to cart', () => {
        cy.visit("https://coffee-cart.app/")
        cy.get('[data-test="Espresso"]').click() // Click on button
        cy.get('[data-cy="Cappuccino"]').click() // Click on button
        cy.get('[data-cy="Espresso-Macchiato"]').click() // Click on button
        cy.get('[data-cy="Mocha"]').click() // Click on button
        cy.get('[data-cy="Flat-White"]').click() // Click on button
        cy.get('[data-cy="Americano"]').click() // Click on button
        cy.get('[data-cy="Cafe-Latte"]').click() // Click on button
        cy.get('[data-cy="Espresso-Con Panna"]').click() // Click on button
        cy.get('[data-cy="Cafe-Breve"]').click() // Click on button
        cy.get('[aria-label="Cart page"]').click() // Click on button
        cy.get('[aria-label="Cart page"]').contains('cart (9)')
        cy.get('[data-test="checkout"]').contains('Total: $119.00')
        cy.get('.list-item').first().contains('Americano')
        cy.get('.list-item').as("cartItem")
        cy.get('@cartItem').eq(1).contains('Cafe Breve')
        cy.get('.list-item').eq(2).contains('Cafe Latte')
        cy.get('.list-item').eq(3).contains('Cappuccino')
        cy.get('.list-item').eq(4).contains('Espresso')
        cy.get('.list-item').eq(5).contains('Espresso Con Panna')
        cy.get('.list-item').eq(6).contains('Espresso Macchiato')
        cy.get('.list-item').eq(7).contains('Flat White')
        cy.get('.list-item').eq(8).contains('Mocha')
        cy.get('.list-item').first().get(".unit-desc").contains('7')
        cy.get('.list-item').eq(1).get(".unit-desc").contains('15')
        cy.get('.list-item').eq(2).get(".unit-desc").contains('16')
        cy.get('.list-item').eq(3).get(".unit-desc").contains('19')
        cy.get('.list-item').eq(4).get(".unit-desc").contains('10')
        cy.get('.list-item').eq(5).get(".unit-desc").contains('14')
        cy.get('.list-item').eq(6).get(".unit-desc").contains('12')
        cy.get('.list-item').eq(7).get(".unit-desc").contains('18')
        cy.get('.list-item').eq(8).get(".unit-desc").contains('8')
        cy.get('[aria-label="Proceed to checkout"]').click() // Click on button
        cy.get('[for="name"]').type('Ellie')
        cy.get('[for="email"]').type('ellie.gludlow@gmail.com')
        cy.get('[aria-label="Promotion checkbox"]').click() // Click on button
        cy.get('[type="submit"]').click() // Click on button


    })
})