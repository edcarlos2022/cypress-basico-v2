/// <reference types="Cypress" />

import moment from 'moment'

describe('ranking de vendas', () => {
  const cpf = Cypress.env('cpf');
  const senha = Cypress.env('senha')

  beforeEach(() => {
  cy.loginSav()
    })

    
  it('historico de vendas', () => {
    cy.visit('https://hmg-sav.wooza.com.br/alliedigital/reports/reports-sales-log')
    // Clica no menu Gestão
    
    
    cy.get('.title', {timeout: 10000}).should('be.visible').should('contain.text', 'Histórico de Vendas')

    
      })
  })

