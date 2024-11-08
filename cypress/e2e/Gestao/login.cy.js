/// <reference types="Cypress" />

describe('Teste de login', () => {
  /*beforeEach(() => {
    cy.loginSav()
  });

  
  it.only('Deve fazer login com sucesso', () => {
    cy.visit("https://hmg-sav.wooza.com.br/alliedigital/modules-dashboard")
    cy.get('.title').should('have.text','Selecione um módulo')
    // Adicione outras verificações ou interações com a página, se necessário
    })*/
  const cpf = Cypress.env('cpf')
  const senha = Cypress.env('senha')
   
     it('validar entrada na tela inicial', () => {
  
      cy.visit("https://hmg-sav.wooza.com.br/alliedigital/modules-dashboard")
      cy.wait(5000)
      cy.get('#mat-input-2').type(cpf)
      cy.get('#mat-input-0').type(senha)
      cy.get('.mat-button-wrapper').click()
      cy.get('.title', { timeout: 10000 }).should('be.visible')
      cy.wait(30000)
      //selecione ponto de venda
      cy.get('#mat-select-value-1',{timeout:50000}).should('be.visible').click({force: true})
      cy.get('#mat-option-1 > .mat-option-text',{timeout:50000}).should('be.visible').click({force: true})
      cy.get('.mat-dialog-actions > .mat-focus-indicator > .mat-button-wrapper').click()
      cy.get('.title').should('have.text','Selecione um módulo')
      // Verifica se cada item específico está presente
      cy.get('.content-dashboard',{timeout:20000}) 
      .find('img')
      .should('have.length', 6,{timeout:40000}) 
        
    const itensEsperados = [
      'Vendas',
      'Financeiro',
      'Gestão',
      'Informativo',
      'Operacional',
      'Catálogo'
    ];

    itensEsperados.forEach(item => {
      cy.get('.content-dashboard') //lista de elementos
        .contains(item) // Verifica se os itens estão presentes na lista
        .should('exist')
  })
})
})