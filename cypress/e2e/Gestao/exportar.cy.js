
/// <reference types="Cypress" /> 
describe('Exportar relatório', () => {
  const cpf = (79951853919)
  
  beforeEach(() => {
    cy.loginSav()
  })
 
  it('Exportar', () => {
    cy.visit('https://hmg-sav.wooza.com.br/alliedigital/reports/reports-my-sales/my-sales')
    cy.get('.title').contains('Minhas Vendas')
    cy.contains('PEDIDOS:',{timeout:20000}).should('be.visible')
    cy.contains('APROVADOS:').should('be.visible')
    cy.contains('EM PROCESSAMENTO:').should('be.visible')
    cy.contains('PENDENTES :').should('be.visible')
    cy.contains('NÃO APROVADOS:').should('be.visible')
    cy.contains('PALITAGEM:').should('be.visible')
    cy.wait(1000);
    cy.contains('CONVERSÃO:').should('be.visible')
    cy.wait(1000)
    cy.get('#mat-select-2 > .mat-select-trigger').click()
    cy.get('#mat-option-1 > .mat-option-text').click()
    cy.get('#mat-input-0').type(cpf)
    cy.get('.search-area > .mat-focus-indicator').click()
    cy.get('.title-page',{timeout:1000}).contains('MINHAS VENDAS | Telefonia')    
    
    cy.intercept('*').as('allRequests');
    cy.wait('@allRequests').then((interception) => {
      console.log(interception);
    })
    
    cy.intercept('GET', '**/gestao/api/relatorio/pedidos-minhas-vendas-xls*').as('apiRequest')
    cy.contains('span.mat-button-wrapper', 'Exportar').click({ force: true })    
    // Aguarda a requisição ser concluída e verifica o status
    cy.wait('@apiRequest', { timeout: 20000 }).its('response.statusCode').should('eq', 200);
    


    
    

 })
})