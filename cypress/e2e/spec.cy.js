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
        cy.get('[data-cy="Espresso-Con Panna"]').click() // Click on button
        cy.get('[data-cy="Cafe-Breve"]').click() // Click on button
        cy.get('[aria-label="Cart page"]').click() // Click on button
        cy.get('[aria-label="Cart page"]').contains('cart (10)')
        cy.get('[data-test="checkout"]').contains('Total: $133.00')
        getCartItem().first().contains('Americano')
        getCartItem().as("cartItem")

      getCartItem().eq(1).contains('Cafe Breve')
        getCartItem().eq(2).contains('Cafe Latte')
        getCartItem().eq(3).contains('Cappuccino')
        getCartItem().eq(4).contains('Espresso')
        getCartItem().eq(5).contains('Espresso Con Panna')
        getCartItem().eq(6).contains('Espresso Macchiato')
        getCartItem().eq(7).contains('Flat White')
        getCartItem().eq(8).contains('Mocha')
        getCartItem().first().get(".unit-desc").contains('7')
        getCartItem().eq(1).get(".unit-desc").contains('15')
        getCartItem().eq(2).get(".unit-desc").contains('16')
        getCartItem().eq(3).get(".unit-desc").contains('19')
        getCartItem().eq(4).get(".unit-desc").contains('10')
        getCartItem().eq(5).get(".unit-desc").contains('14')
        getCartItem().eq(6).get(".unit-desc").contains('12')
        getCartItem().eq(7).get(".unit-desc").contains('18')
        getCartItem().eq(8).get(".unit-desc").contains('8')
        cy.get('[aria-label="Proceed to checkout"]').click() // Click on button
        cy.get('[for="name"]').type('Ellie')
        cy.get('[for="email"]').type('ellie.gludlow@gmail.com')
        cy.get('[aria-label="Promotion checkbox"]').click() // Click on button
        cy.get('[type="submit"]').click() // Click on button


    })
})

function getCartItem (){
    return cy.get('.list-item')
}