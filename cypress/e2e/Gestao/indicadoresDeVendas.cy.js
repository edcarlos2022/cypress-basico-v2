/// <reference types="Cypress" />

import moment from 'moment';

describe('indicadores de vendas', () => {
  beforeEach(() => {
    cy.loginSav()
  })
  it('Indicadores de vendas', () => {
        // Clica no menu Gestão
    cy.visit('https://hmg-sav.wooza.com.br/alliedigital/reports/reports-sales-indicators')
    cy.get('.title').should('have.text', 'Indicadores de Vendas')

          })
  })







