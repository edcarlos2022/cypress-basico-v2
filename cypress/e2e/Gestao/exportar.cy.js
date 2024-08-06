/// <reference types="Cypress" />
 
describe('Exportar relatório', () => {
  const cpf = Cypress.env('cpf');
  const senha = Cypress.env('senha');
  beforeEach(() => {
    cy.loginSav()
  })
 
  it('Exportar', () => {
    cy.visit('https://hmg-sav.wooza.com.br/alliedigital/reports/reports-my-sales/my-sales')
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
    cy.get('.header-select > .mat-focus-indicator').should('be.visible')    
// Verifique se o arquivo foi baixado corretamente
//cy.readFile('c:/Downloads').then((fileContent) => {
  
})
 
})