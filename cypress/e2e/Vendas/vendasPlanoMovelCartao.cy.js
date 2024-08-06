/// <reference types="cypress" />

describe('Comprar somente aparelho', () => {
    beforeEach(() => {
      cy.loginSav()
   })
     
      it('Comprar somente aparelho', () => {
             
        cy.visit('https://hmg-sav.wooza.com.br/alliedigital/sales/sales-telephony/steps')
        //Telefonia móvel novo numero
        
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle',{timeout:10000}).click()
  
        cy.get('#mat-input-0').type('79951853919')
        cy.get('#mat-input-1').type('Luan Thomas Galvão')
        cy.get('#mat-input-2').type('83010-272')        
        cy.get('#mat-input-3').type('27/04/1993')
        cy.get('#mat-input-4').type('Francisca Ester Agatha')
        //cy.get('#mat-input-5').type(22763154)
        cy.get('#mat-input-9').type(41992053395)
        
        cy.get('.sav-card-content > [fxlayout="row"] > .mat-focus-indicator')
        
        cy.get('#mat-input-8').type(11981331211)
        cy.get('#mat-select-value-3').click()
        cy.get('#mat-option-4 > .mat-option-text').click()
        cy.get('.sav-card-content > [fxlayout="row"] > .mat-focus-indicator').click()
        cy.wait(40000);
        //cy.scrollTo(0,1500);
        cy.get('.btn-list').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .preco > .mat-focus-indicator').click()
        cy.wait(1000)
       // cy.get('.mat-dialog-actions > .mat-focus-indicator').click();
  
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
  
        cy.get('.pt-32 > .mat-focus-indicator').click()
        cy.wait(22000)
  
        cy.get('#mat-radio-6').click()
        
        cy.get('.row-buttons > .mat-focus-indicator').click()
        cy.get('.mat-dialog-actions > .mat-focus-indicator').click()
        cy.wait(60000);
        cy.get('#mat-input-24').type('bruno teste')
        cy.get('#mat-input-25').type(4000000000000010)
        cy.get('#mat-input-26').type(122027)
        cy.get('#mat-input-27').type(123)
        cy.wait(5000);
        cy.get('.ng-star-inserted.ng-dirty > .sav-card-content > .pt-32 > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.wait(80000)
     
      cy.get('.row-button > .mat-focus-indicator').click()
      })
    })