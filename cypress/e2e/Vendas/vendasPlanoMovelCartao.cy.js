  /// <reference types="cypress" />

  describe('Comprar somente aparelho', () => {
    
  const cpf = '33435321008'
  const senha = '334353'

    it('Comprar somente aparelho', () => {
    cy.visit("https://hmg-sav.wooza.com.br/alliedigital/modules-dashboard")
    cy.wait(10000)
    cy.get('#login-form > .title').should('have.text', 'Entre na sua conta')
    cy.get('#mat-input-2',{timeout:15000}).should('not.be.disabled').type(cpf)
    cy.get('#mat-input-0').type(senha)
    cy.get('.mat-button-wrapper').click()
    cy.get('.title', { timeout: 10000 }).should('be.visible')
    cy.wait(30000)
    cy.get('#mat-dialog-title-0').should('have.text', 'Selecione o ponto de venda:')
    cy.get('.mat-form-field-infix').should('be.visible').click()
    cy.wait(2000)
    cy.get('#mat-option-0 > .mat-option-text').click()
    cy.get('.mat-dialog-actions > .mat-focus-indicator').click()
    cy.wait(10000)
    cy.get(':nth-child(1) > .mat-card').click()
      
    cy.wait(8000)
    cy.get(':nth-child(1) > .mat-card').click()
    cy.wait(8000)
    cy.get('.boxes > :nth-child(1)').click()
          //cy.wait(5000)
    cy.get('#mat-radio-3').click()
    cy.get('#mat-input-3').type(26690151077)
    cy.wait(8000)
    cy.get('#mat-input-4').clear()
    cy.get('#mat-input-4').type('bruno teste')
    cy.get('#mat-input-5').type(22763154)
    cy.get('#mat-input-7').type('silva teste')
    cy.get('#mat-input-8').type(11981331211)
    cy.get('input[formcontrolname="birthDate"]',{timeout:5000}).type("01/01/2000")
    cy.get('#mat-select-value-3').click()
    cy.get('#mat-option-4 > .mat-option-text').click()
    cy.get('.sav-card-content > [fxlayout="row"] > .mat-focus-indicator').click()
    
    cy.wait(15000)

    cy.scrollTo(0,1500,{ ensureScrollable: false })
    cy.wait(3000)
    cy.get(':nth-child(3) > .btn-div > .mat-focus-indicator',{timeout:20000})
    .scrollIntoView()
    .click({force:true})  
    cy.wait(1000)
      
    cy.get('#mat-input-18').type(73990745000)
    cy.wait(8000)
    cy.get('#mat-input-19').clear()
    cy.get('#mat-input-19').type(739907450)
    cy.get('#mat-input-20').type(12122000)
    cy.get('#mat-input-23').type('detro')
    cy.get('#mat-input-11').clear()
    cy.get('#mat-input-11').type('teste@wooza.com.br')
    cy.get('#mat-input-14').type(123)
    cy.get('#mat-input-22').clear()
    cy.get('#mat-input-22').type(89554024917864513524)
   
    cy.get('button[type="submit"].mat-flat-button.mat-accent',{timeout:10000}).contains('Continuar').click({force:true});
    cy.wait(8000)
    cy.get('button[color="accent"]')
      .contains('Selecionar')
      .scrollIntoView({ ensureScrollable: false })
      .click({ force: true })
      cy.get('#mat-input-14').scrollIntoView().should('be.visible').type("121")
      cy.get('.pt-32 > .mat-focus-indicator > .mat-button-wrapper').click()
    
      cy.wait(8000)
      //escolha do cartão de crédito
      cy.get('[fxlayout="column"] > .title',{timeout:15000}).contains('Telefonia Móvel')
      cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-label-content',{timeout:10000}).click({force:true})
      cy.wait(5000)
      
      //botão contratar tela informe dados de pagamento
      cy.get('.row-buttons > .mat-focus-indicator').click()
      cy.get('.mat-dialog-actions > .mat-focus-indicator > .mat-button-wrapper',{timeout:10000}).click({force:true})
      //dados do cartão:
      cy.wait(100000)
      cy.get('.h6').should('be.visible')
      cy.get('#mat-dialog-title-2',{timeout:20000}).contains('Insira os dados do cartão')
      cy.get('#mat-input-24',{timeout:50000}).type('Teste da Silva',{force:true})
      cy.get('#mat-input-25',{timeout:10000}).type('4111 1111 1111 1111',{force:true})
      cy.get('#mat-input-26',{timeout:10000}).type('09/2026',{force:true})
      cy.get('#mat-input-27',{timeout:10000}).type('123',{force:true})
      cy.wait(5000)
      cy.get('.ng-untouched.ng-star-inserted > .sav-card-content > .pt-32 > .mat-focus-indicator',{timeout:15000}).click({force:true})
  })
 
    //cy.get('button[color="accent"]').contains('Selecionar').scrollIntoView().should('be.visible').click({force: true});
    //cy.get('.mat-form-field.ng-tns-c129-56 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible').type("teste Ed Carlos")

    //cy.get('#mat-input-25,[numero]').type("4111 1111 1111 1111")
    //cy.get('#mat-input-26,[validade]').type("09/2026")
   // cy.get('#mat-form-field-label-73').contains("Código de Segurança (CVV)").type("123")
    //cy.get('.ng-pristine.ng-star-inserted > .sav-card-content > .pt-32 > .mat-focus-indicator,[Continuar]').click()


    })
  