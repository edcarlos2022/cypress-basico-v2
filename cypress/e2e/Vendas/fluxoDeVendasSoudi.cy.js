
/// <reference types="cypress" />

describe('Comprar somente aparelho', () => {
    beforeEach(() => {
     cy.loginSav()

    })
  
    it('Vendas Soudi', () => {
      
      cy.visit("https://hmg-sav.wooza.com.br/alliedigital/sales/sales-soudi/steps");
      cy.get('.title').should('have.text','Soudi')
      
    })
})