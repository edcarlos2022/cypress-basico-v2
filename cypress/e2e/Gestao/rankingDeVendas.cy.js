/// <reference types="Cypress" />

import moment from 'moment'

describe('Ranking de vendas', () => {
  beforeEach(() => {
    cy.loginSav()
  })

   it('Indicadores de vendas', () => {
    cy.visit('https://hmg-sav.wooza.com.br/alliedigital/reports/reports-sales-ranking')
    cy.get('.title').should('contain', 'Ranking de Vendas')

          });
  });




