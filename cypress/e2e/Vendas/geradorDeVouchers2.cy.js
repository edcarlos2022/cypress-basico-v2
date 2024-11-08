/// <reference types="cypress" />

const { should } = require("chai");
const sinon = require('sinon'); // para pop-ups como de impressão

describe('CRIAR TRADEIN', () => {
    const cpf = '317.348.115-10';
    const senha = 'Mudar135!';

    it('Criar voucher', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Retorna false para impedir que o Cypress falhe o teste
            return false;
        });

        cy.visit("https://hmg-sav.wooza.com.br/samsung/modules-dashboard");
        cy.wait(8000);
        cy.get('#mat-input-2').type(cpf);
        cy.get('#mat-input-0').type(senha);
        cy.get('.mat-button-wrapper').click();

        cy.get('.title', { timeout: 10000 }).should('be.visible');
        cy.wait(30000);
        cy.get('.title').should('have.text', 'Selecione um módulo');

        cy.wait(10000);
        cy.get(':nth-child(1) > .mat-card > .icon-card', { timeout: 50000 }).should('be.visible').click({ force: true });
        cy.get(':nth-child(2) > .mat-card > .icon-card', { timeout: 50000 }).should('be.visible').click({ force: true });
        cy.get('.mat-radio-label-content', { timeout: 40000 }).should('exist');
        cy.wait(15000);

        cy.get('.loading-container', { timeout: 30000 }).should('not.be.visible');
        cy.get('.mat-radio-label-content', { timeout: 30000 }).should('be.visible').click({ force: true });

        cy.get('app-negociation-trade-in-step-1.ng-star-inserted > .row-buttons > .mat-focus-indicator > .mat-button-wrapper', { timeout: 20000 }).click({ force: true });

        cy.generateImei().then((imei) => {
            cy.get('#mat-input-3', { timeout: 20000 }).type(imei, { force: true });
            cy.log('IMEI gerado:', imei);
            cy.wait(3000);
            cy.get('#cdk-step-content-1-0 > .mat-vertical-content > .navigation-steps > .mat-stepper-next > .mat-button-wrapper').click({ force: true });
            cy.wait(3000);

            cy.get('div.title', { timeout: 20000 }).contains('Samsung').click({ force: true });
            cy.wait(8000);
            cy.get('input[data-test-id="input-select"]', { timeout: 40000 }).type('Galaxy J5', { force: true });
            cy.wait(7000);
            cy.get('[data-test-id="option-Galaxy J5"]', { timeout: 20000 }).click({ force: true });

            cy.wait(3000);
            cy.get('[data-test-id="radio-16"]', { timeout: 20000 }).click({ force: true });
            cy.wait(3000);
            cy.get('app-negociation-trade-in-step-2.ng-star-inserted > .row-buttons > .mat-focus-indicator > .mat-button-wrapper', { timeout: 20000 }).click({ force: true });
            cy.wait(7000);

            cy.get('[data-test-id="radio-Sim"]:first', { timeout: 40000 }).should('be.visible').click({ force: true });
            cy.get('[data-test-id="radio-Excelente"]:first', { timeout: 40000 }).should('be.visible').click({ force: true });
            cy.get('[data-test-id="radio-Excelente"]', { timeout: 40000 }).eq(1).should('be.visible').click({ force: true });
            cy.get('[data-test-id="radio-Sim"]', { timeout: 40000 }).eq(1).should('be.visible').click();
            cy.get('[data-test-id="radio-Sim"]:last', { timeout: 40000 }).should('be.visible').click();

            cy.wait(10000);
            cy.get('[data-test-id="button-continue-step-3"]').click({ force: true });
            cy.wait(15000);
            cy.get('.resume-value > .mat-focus-indicator > .mat-button-wrapper', { timeout: 10000 }).click({ force: true });

            cy.get('#mat-input-5', { timeout: 10000 }).type('799.518.539-19', { force: true });
            cy.wait(8000);

            cy.get('#mat-dialog-0 > app-modal-pedido-trade-in > div').scrollTo('center', { ensureScrollable: false });
            cy.wait(8000);
            cy.get('#mat-input-16').type('J5');
            cy.wait(4000);
            cy.get('#mat-option-9 > .mat-option-text', { timeout: 20000 }).click({ force: true });
            cy.wait(8000);

            // Upload de imagens
            for (let i = 0; i < 6; i++) {
                cy.get('input[type="file"]', { timeout: 8000 }).eq(i).attachFile('imagem.png');
                cy.wait(7000);
                cy.get('button.mat-flat-button', { timeout: 8000 }).contains('Cortar imagem').click({ force: true });
                cy.wait(12000);
            }

            // Imprimir termo
            cy.contains('Imprimir Termo', { timeout: 20000 }).should('be.visible').click({ force: true });
            cy.wait(7000);
                
                // Ação que aciona a função de impressão
                cy.contains('Imprimir Contrato', { timeout: 20000 }).click();
                cy.get('body').click(500, 500); // usando coordenadas específicas
                cy.get('body').type('{esc}');
                
                cy.window().then((win) => {
                  cy.stub(win, 'close').as('closeWindow');
                  cy.get('print-section').click(); // Simula o evento de fechamento
                  cy.get('@closeWindow').should('be.calledOnce');
                });

        // Opcional: Realiza outras verificações enquanto a janela de impressão está "bloqueada"

           
           // cy.contains('Imprimir Contrato', { timeout: 20000 }).click();
            cy.wait(3000);
            cy.get('body').type('{esc}');
            
            cy.get('body').type('{esc}');
            cy.get('.mat-dialog-actions > .mat-flat-button > .mat-button-wrapper').click();
            cy.wait(7000);

            cy.get('.btn-more-images', { timeout: 8000 }).attachFile('imagem.png');
            cy.wait(7000);
            cy.get('button.mat-flat-button', { timeout: 8000 }).contains('Cortar imagem').click({ force: true });
            cy.get('span.mat-button-wrapper', { timeout: 25000 }).contains('Finalizar Compra').click({ force: true });
        });
    });
});

