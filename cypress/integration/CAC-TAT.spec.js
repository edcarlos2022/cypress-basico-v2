/// <reference types="Cypress" />

const { should } = require("chai")

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function(){
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function() {
    cy.title(),should('be.equal','Central de Atendimento ao Cliente TAT') 
    })

  it('preenche os campos obrigatórios e envia o formulário', function(){
    cy.get('#firstName').type('Ed Carlos')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('edcarlos@hotmail.com')
    cy.get('#support-type > :nth-child(2)').click()
    cy.get('#check > [for="email"]').click()
    cy.get('#open-text-area').type('texto, texto, texto, texto')
    cy.get('.button').click()
   
  })
  })
  