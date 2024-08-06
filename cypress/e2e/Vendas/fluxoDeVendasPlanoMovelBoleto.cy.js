
/// <reference types="cypress" />

describe('Comprar somente aparelho', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://www.googletagmanager.com/gtm.js?id=GTM-MNZGF2V', (req) => {
            req.reply('')
        }).as('googleTagManager')
  
      cy.visit('https://hmg-sav.wooza.com.br/alliedigital/auth/login');
  
      cy.wait('@googleTagManager')
  
      cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Cannot read properties')) {
          return false;
        }
        return true;
      });
    });
  
    it('Comprar somente aparelho', () => {
     
  
      // Digita o CPF correto no campo de entrada
      cy.get('#mat-input-2').should('be.visible').type('33435321008');
  
      // Digita a senha correta no campo de entrada
      cy.get('#mat-input-0').type('334353');
      cy.wait(3000);
      // Clica no botão de login
      cy.get('form.ng-tns-c229-1 > .mat-focus-indicator').click();
      
      cy.wait(30000);
      // Clica no trigger do seletor
      //cy.get('.mat-form-field-infix').click();
      cy.get('.mat-form-field-infix').should('be.visible').click();
      cy.wait(2000);
      cy.get('#mat-option-0 > .mat-option-text').click();
      cy.get('.mat-dialog-actions > .mat-focus-indicator').click();
      cy.wait(10000);
      cy.get(':nth-child(1) > .mat-card').click();
  
      cy.wait(8000);
      cy.get(':nth-child(1) > .mat-card').click();
      cy.wait(8000);
      cy.get('.boxes > :nth-child(1)').click();
      cy.wait(5000);
      cy.get('#mat-radio-3').click();
  
      cy.get('#mat-input-3').type(26690151077);
      cy.wait(8000);
      cy.get('#mat-input-4').clear();
      cy.get('#mat-input-4').type('bruno teste');
      cy.get('#mat-input-5').type(22763154);
      cy.get('#mat-input-6').type(12122000);
      cy.get('#mat-input-7').type('silva teste');
      
      cy.get('#mat-input-8').type(11981331211);
      cy.get('#mat-select-value-3').click();
      cy.get('#mat-option-4 > .mat-option-text').click();
      cy.get('.sav-card-content > [fxlayout="row"] > .mat-focus-indicator').click();
      cy.wait(25000);
      //cy.scrollTo(0,1500);
      cy.get('.btn-list').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .preco > .mat-focus-indicator').click();
      cy.wait(1000);
     // cy.get('.mat-dialog-actions > .mat-focus-indicator').click();
  
      cy.get('#mat-input-18').type(73990745000);
      cy.wait(8000);
      cy.get('#mat-input-19').clear();
      cy.get('#mat-input-19').type(739907450);
      cy.get('#mat-input-20').type(12122000);
      cy.get('#mat-input-23').type('detro');
      cy.get('#mat-input-11').clear();
      cy.get('#mat-input-11').type('teste@wooza.com.br');
      cy.get('#mat-input-14').type(123);
      cy.get('#mat-input-22').clear();
      cy.get('#mat-input-22').type(89554024917864513524);
    });
  });