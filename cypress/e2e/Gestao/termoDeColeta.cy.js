/// <reference types="Cypress" />

describe('Termo de coleta', () => {
    const cpf = Cypress.env('cpf');
    const senha = Cypress.env('senha');
    beforeEach(() => {
      cy.loginSav()
    })

    it('gerarTermoDeColeta', ()=>{
      cy.visit('/reports/reports-collection-term')
      cy.get('.title').should('contain', 'Termo de coleta')
      cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
      cy.get('.sav-card-header > div > .mat-focus-indicator').click()
      cy.get('.term-gen-btn > .mat-button-wrapper').click()
      //cy.visit('/reports/reports-collection-term/upload')
    })
  })
