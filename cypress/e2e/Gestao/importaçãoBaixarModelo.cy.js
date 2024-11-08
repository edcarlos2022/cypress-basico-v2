describe('Importações baixar modelo', () => {
    beforeEach(() => {
      cy.loginSav()
    })
      const url = 'https://hmg-sav.wooza.com.br/alliedigital/files/files-imports'
     it('Baixar modelo de importação', () => {
      
      cy.visit(url)
      cy.get('#mat-select-0 > .mat-select-trigger',{timeout:15000}).click()
      cy.get('#mat-option-2 > .mat-option-text',{timeout:15000}).click()
      cy.contains('Etapa 2 - Selecionar rede',{timeout:15000}).click()
      cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-arrow-wrapper',{timeout:15000}).click()
      cy.wait(3000)
      cy.get('#mat-select-value-7,[Alliedigital]',{timeout:15000}).click()
      cy.get('.mat-button-wrapper > span',{timeout:15000}).click({force:true})
      
      cy.intercept('*').as('allRequests');
    cy.wait('@allRequests').then((interception) => {
      console.log(interception);
    })
    
    cy.intercept('GET', '**https://hmg-sav-api.wooza.com.br/rede/api/download/modelo-importacao*').as('apiRequest')
    cy.contains('.mat-button-wrapper > span', 'Baixar modelo de importação').click({ force: true })    
    // Aguarda a requisição ser concluída e verifica o status
    cy.wait('@apiRequest', { timeout: 20000 }).its('response.statusCode').should('eq', 200);

   
       })
    })
