
describe('Minhas Vendas', () => {
    const cpf = (79951853919)
    
    beforeEach(() => {
      cy.loginSav()
    })

    it('Gerenciar vendas', ()=>{
    
        cy.visit('/reports/reports-my-sales/my-sales')
        cy.get('.title').should('have.text','Minhas Vendas')
        cy.wait(5000)
        cy.contains('PEDIDOS:').should('be.visible')
        cy.contains('APROVADOS:').should('be.visible')
        cy.contains('EM PROCESSAMENTO:').should('be.visible')
        cy.contains('PENDENTES :').should('be.visible')
        cy.contains('NÃO APROVADOS:').should('be.visible')
        cy.contains('PALITAGEM:').should('be.visible')
        cy.contains('CONVERSÃO:').should('be.visible')
        cy.get('div[class="mat-select-value ng-tns-c137-8"]').click({force: true})
        cy.get('#mat-option-1').click()
        cy.get('input[data-placeholder="digite aqui o que procura..."]').type(cpf)
        cy.get('.search-area > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click({force:true})
        cy.wait(10000)

        cy.get('.mat-button-wrapper:first').click({force: true})
        cy.get('#table td').should('include.text', 'Luan Thomas Galvão') //Luan Thomas Galvão
              
        cy.get('#mat-checkbox-1').invoke('text').then((text) => {
          const number = text.match(/\d+/) // Extrai o primeiro número encontrado no texto
          cy.log('Número de pedidos: '+ number) // Exibe o número no log do Cypress
        })
        
    })

})