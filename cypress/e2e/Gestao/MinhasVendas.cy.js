
describe('Minhas Vendas', () => {
    const cpf = Cypress.env('cpf');
    const senha = Cypress.env('senha');
    beforeEach(() => {
      cy.loginSav()
    })

    it('Gerenciar vendas', ()=>{
    
        cy.visit('/reports/reports-my-sales/my-sales')
        cy.get('.title').should('have.text','Minhas Vendas')
        cy.contains('PEDIDOS:').should('be.visible')
        cy.contains('APROVADOS:').should('be.visible')
        cy.contains('EM PROCESSAMENTO:').should('be.visible')
        cy.contains('PENDENTES :').should('be.visible')
        cy.contains('NÃO APROVADOS:').should('be.visible')
        cy.contains('PALITAGEM:').should('be.visible')
        cy.contains('CONVERSÃO:').should('be.visible')

    })

})