/// <reference types="Cypress" />

describe('Termo de coleta', () => {
    const cpf = Cypress.env('cpf');
    const senha = Cypress.env('senha');
    beforeEach(() => {
      cy.loginSav()
    })

    it('exportar relatórios da tela fechamentos',()=>{
      cy.visit('/reports/retail-closure/list')
      //cy.get('.title').should('have.text', 'Fechamentos')
      cy.get(':nth-child(1) > .cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon',{timeout:20000}).click()
          
      })

    it('realizar fechamento varejo', ()=>{
    cy.visit('/reports/retail-closure/new')
    cy.get('.sav-card-header > :nth-child(1) > span').should('contain', 'Gerar Novo Fechamento')
    
    cy.get('.form-grid-custom',{timeout:20000}) 
    .find('div')
    .should('have.length', 113,{timeout:40000}) 
      
  const itensEsperados = [
    'Rede',
    'PDVs',
    'Data Inicial',
    'Data Final',
    'ND',
    //'Pedido Compra jund' esse não está dentro do elemento, tem verificar a parte
    'Status SAV'
  ];

  itensEsperados.forEach(item => {
    cy.get('.form-grid-custom') //lista de elementos
      .contains(item) // Verifica se os itens estão presentes na lista
      .should('exist')
})
    //cy.get('.actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon',{timeout:20000}).click()
    //seguir com os preenchimentos
    })
  
})