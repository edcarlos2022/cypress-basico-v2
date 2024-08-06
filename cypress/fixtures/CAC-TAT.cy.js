/// <reference types="Cypress" />

const tresSegundos = 3000

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function(){
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT') 
    })

  it('preenche os campos obrigatórios e envia o formulário', function(){
    cy.clock()

    cy.get('#firstName').type('Ed Carlos')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('edcarlos@hotmail.com')
    cy.get('#support-type > :nth-child(2)').click()
    cy.get('#check > [for="email"]').click()
    cy.get('#open-text-area').type('texto, texto, texto, texto')
    cy.get('.button[type="submit"]').click()
    cy.get('.success').should('be.be.visible')

    cy.tick(tresSegundos)
    cy.get('.success').should('not.be.visible')

  })

  it('preenche os campos obrigatórios e envia o formulário COM DELAY', function(){
    cy.clock()

    const longTest = ('texto, texto, texto, texto,texto, texto, texto, textotexto, texto,texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, textotexto, texto, texto, texto')
    cy.get('#firstName').type('Ed Carlos')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('edcarlos@hotmail.com')
    cy.get('#support-type > :nth-child(2)').click()
    cy.get('#check > [for="email"]').click()
    cy.get('#open-text-area').type(longTest,{delay:0})
    cy.get('.button[type="submit"]').click()
    cy.get('.success').should('be.visible')
    
    cy.tick(tresSegundos)
    cy.get('.success').should('not.be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    cy.clock()

    cy.get('#firstName').type('Ed Carlos')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('edcarlos&hotmail.com')
    cy.get('#support-type > :nth-child(2)').click()
    cy.get('#check > [for="email"]').click()
    cy.get('#open-text-area').type('texto, texto, texto, texto')
    cy.get('.button[type="submit"]').click()
    cy.get('.error').should('be.be.visible')

    cy.tick(tresSegundos)
    cy.get('.error').should('not.be.visible')
  })

  it('Valor não numerico, retorno em branco', function(){
    cy.get('#phone').type('qwgyqwgqywygygqwyqwgyyhb')
    cy.get('#phone').should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    cy.clock()

    cy.get('#firstName').type('Ed Carlos')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('edcarlos&hotmail.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('texto, texto, texto, texto')
    cy.get('.button[type="submit"]').click()
    cy.get('.error').should('be.be.visible')

    cy.tick(tresSegundos)
    cy.get('.error').should('not.be.visible')

   })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function (){
    cy.get('#firstName').type('Ed Carlos').should('have.value', 'Ed Carlos')
    cy.get('#firstName').clear().should('have.value', '')

    cy.get('#lastName').type('da Silva').should('have.value', 'da Silva')
    cy.get('#lastName').clear().should('have.value', '')


    cy.get('#email').type('edcarlos&hotmail.com').should('have.value', 'edcarlos&hotmail.com')
    cy.get('#email').clear().should('have.value', '')

    cy.get('#phone').type('1112345678910').should('have.value', '1112345678910')
    cy.get('#phone').clear().should('have.value', '')    
   })

   it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
   cy.clock()

    cy.get('.button[type="submit"]').click()
    cy.get('.error').should('be.be.visible')

    cy.tick(tresSegundos)
    cy.get('.error').should('not.be.visible')
   })
  
   it('envia o formuário com sucesso usando um comando customizado', function(){
    cy.fillMandatoryFieldsAndSubmit()    
   })

   it('contains', function(){
    cy.clock()

    cy.get('#firstName').type('Ed Carlos')
    cy.get('#lastName').type('da Silva')
    cy.get('#email').type('edcarlos@hotmail.com')
    cy.get('#support-type > :nth-child(2)').click()
    cy.get('#check > [for="email"]').click()
    cy.get('#open-text-area').type('texto, texto, texto, texto')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.be.visible')

    cy.tick(tresSegundos)
    cy.get('.success').should('not.be.visible')
    })

  it('seleciona um produto (YouTube) por seu texto', function(){
      cy.get('#product').select('YouTube').should('have.value','youtube')
    })
    
  it('seleciona um produto (YouTube) por seu texto', function(){
      cy.get('#product').select('mentoria').should('have.value','mentoria')
    })

  it('seleciona um produto (Blog) por seu índice', function(){
    cy.get('#product').select(1).should('have.value','blog')
    })

  it('marca o tipo de atendimento "Feedback"', function(){
      cy.get('input[type="radio"][value="feedback"]').check()
      .should('have.value', 'feedback')
    })

  it('marca cada tipo de atendimento', function(){
    cy.get('input[type="radio"]')
    .should('have.length',3)
    .each(function($radio){
    cy.wrap($radio).check()
    cy.wrap($radio).should('be.checked')
  })
  })

  it('marca ambos checkboxes, depois desmarca o último', function(){
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
    
  }) 

  it('seleciona um arquivo da pasta fixtures', function(){
    cy.get('#file-upload')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input){
     expect($input[0].files[0].name).to.equal('example.json')
    })
  }) 

  it('seleciona um arquivo simulando um drag-and-drop', function(){
    cy.get('#file-upload')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(function($input){
     expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
    cy.get('#privacy a').should('have.attr', 'target','_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link',function(){
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()
      cy.get('#white-background > :nth-child(5)')
   
      cy.contains('Talking About Testing').should('be.visible') 
  })

  it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', function() {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('preenche a area de texto usando o comando invoke', function(){
  const longText = Cypress._.repeat('0123456789', 50)
     
    cy.get('#open-text-area')
    .invoke('val', longText)
    .should('have.value', longText)
  })

  it('encontre o gato', function(){
    cy.get('#cat')
    .invoke('show')
    .should('be.visible')
    cy.get('#title')
    .invoke('text', 'CAT TAT')
    cy.get('#subtitle')
    .invoke('text', 'Eu 🤍 Cahorros 🐶')
    .invoke('text').should('contain', '🐶')
    
  })

})