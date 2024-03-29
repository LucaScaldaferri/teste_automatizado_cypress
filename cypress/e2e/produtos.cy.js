/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar produto da lista', () => {
        cy.get('.product-block').first().click()
    });

    it('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 5
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it.('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('.product-block', '3', 'M', 'Blue')
    });

});