require("cypress-xpath");
require('cypress-xpath');
require('cypress-file-upload');

Cypress.Commands.add('loginSav',(cpf = "03932098307",
  senha = "039320")=>{
    cy.session(cpf,()=>{
      cy.intercept(
        "GET",
        "https://www.googletagmanager.com/gtm.js?id=GTM-MNZGF2V",
        (req) => {
          req.reply("");
        }
      ).as("googleTagManager");
  
      cy.visit("https://hmg-sav.wooza.com.br/alliedigital/auth/login");
  
      cy.wait("@googleTagManager");
  
      cy.on("uncaught:exception", (err, runnable) => {
        if (err.message.includes("Cannot read properties")) {
          return false;
        }
        return true;
      });
  
      // Digita o CPF correto no campo de entrada
      cy.get("#mat-input-2").should("be.visible").type(cpf);
      cy.wait(5000);
      cy.wait(5000);
      // Digita a senha correta no campo de entrada
      cy.get("#mat-input-0").type(senha);
      cy.get("form.ng-tns-c229-1 > .mat-focus-indicator").click();
  
      cy.intercept(
        "POST",
        "https://hmg-sav-api.wooza.com.br/rede/api/usuariorede/consultar"
      ).as("home");
  
      cy.wait("@home", { timeout: 40000 })
        .its("response.statusCode")
        .should("eq", 200);
    
    }),
    {
      validate(){
  cy.url().should("https://hmg-sav.wooza.com.br/alliedigital/modules-dashboard")
  },
      cacheAcrossSpecs: true}
  })