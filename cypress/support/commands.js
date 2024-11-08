require("cypress-xpath");
require('cypress-file-upload');
import 'cypress-file-upload';

Cypress.Commands.add('loginSav',(cpf = "33435321008",
  senha = "334353")=>{
    cy.session(cpf,()=>{
      cy.intercept(
        "GET",
        "https://www.googletagmanager.com/gtm.js?id=GTM-MNZGF2V",
        (req) => {
          req.reply("");
        }
      ).as("googleTagManager");
  
      cy.visit("https://hmg-sav.wooza.com.br/alliedigital/auth/login");
  
      cy.wait("@googleTagManager", { timeout: 10000 })
  
      cy.on("uncaught:exception", (err, runnable) => {
        if (err.message.includes("Cannot read properties")) {
          return false;
        }
        return true;
      });
  
      // Digita o CPF correto no campo de entrada
      cy.get("#mat-input-2").should("be.visible").type(cpf);
      cy.wait(10000);
      
      // Digita a senha correta no campo de entrada
      cy.get("#mat-input-0").type(senha);
      cy.get(".mat-button-wrapper,[Entrar]").click();
  
      cy.intercept(
        "POST",
        "https://hmg-sav-api.wooza.com.br/rede/api/usuariorede/consultar"
      ).as("home");
  
      cy.wait("@home", { timeout: 40000 })
        .its("response.statusCode")
        .should("eq", 200)
    
    }),
    {
      validate(){
  cy.url().should("https://hmg-sav.wooza.com.br/alliedigital/modules-dashboard")
  },
      cacheAcrossSpecs: true}
  })

 // cypress/support/commands.js

Cypress.Commands.add('generateImei', () => {
  const generateRandomDigit = () => Math.floor(Math.random() * 10);

  let imei = '';
  for (let i = 0; i < 14; i++) {
    imei += generateRandomDigit();
  }

  // Calcula o dígito verificador usando o algoritmo de Luhn
  const calculateCheckDigit = (imei) => {
    let sum = 0;
    for (let i = 0; i < 14; i++) {
      let digit = parseInt(imei[i]);
      if (i % 2 === 1) digit *= 2;
      if (digit > 9) digit -= 9;
      sum += digit;
    }
    return (10 - (sum % 10)) % 10;
  };

  const checkDigit = calculateCheckDigit(imei);
  imei += checkDigit;

  return imei;
})

Cypress.Commands.add(
  'loginSamsung',
  (cpf = "317.348.115-10", senha = "Mudar135!") => {
    cy.session(
      cpf,
      () => {
        cy.intercept(
          "GET",
          "https://www.googletagmanager.com/gtm.js?id=GTM-MNZGF2V",
          (req) => {
            req.reply("");
          }
        ).as("googleTagManager");

        cy.visit("https://hmg-sav.wooza.com.br/samsung/auth/login");

        cy.wait("@googleTagManager");

        cy.on("uncaught:exception", (err) => {
          if (err.message.includes("Cannot read properties")) {
            return false;
          }
          return true;
        });

        // Digita o CPF correto no campo de entrada
        cy.get("#mat-input-2").should("be.visible").type(cpf);

        // Digita a senha correta no campo de entrada
        cy.get("#mat-input-0").type(senha);
        cy.get("form.ng-tns-c229-1 > .mat-focus-indicator").click()    
        
        // Aguardar e interceptar a requisição para a API de usuário
        cy.intercept(
          "POST",
          "https://hmg-sav-api.wooza.com.br/rede/api/usuariorede/consultar"
        ).as("home");

        cy.wait("@home", { timeout: 40000 })
          .its("response.statusCode")
          .should("eq", 200);

      }
    )

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignora erros que possuem "this._SBA4B_origAddEventListener"
      if (err.message.includes('this._SBA4B_origAddEventListener is not a function')) {
        return false; // Impede o Cypress de falhar o teste
      }
      
      // Se o erro não for o que estamos ignorando, o Cypress lida com ele
      return true;
    })
    
  })
         
