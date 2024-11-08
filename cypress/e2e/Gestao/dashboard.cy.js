/// <reference types="Cypress" />

describe('Teste de login', () => {
    beforeEach(() => {
      cy.loginSav()
    })
    it('Validar tela dashboard', ()=>{

        cy.visit('reports/reports-sales-dashboard')
        cy.get('.title').should('have.text', 'Dashboard')
    })
})


