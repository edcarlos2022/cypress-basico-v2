describe('Importações baixar modelo', () => {
    beforeEach(() => {
      cy.loginSav()
    })
      const url = 'https://hmg-sav.wooza.com.br/alliedigital/files/files-imports'
     it('Baixar modelo de importação', () => {
      
      cy.visit(url)
      cy.get('#mat-select-0 > .mat-select-trigger').click()
      cy.get('#mat-option-2 > .mat-option-text').click()
      cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
      cy.get('#mat-option-82 > .mat-option-text').click()
      //selecionando arquivo
      cy.get('.file-input > .mat-icon').click()

     /* // Caminho do arquivo que será importado (coloque o arquivo na pasta cypress/fixtures)
    const filePath = 'path/to/your/file.ext'; // usar o caminho correto

    // Interceptar a requisição de upload, se necessário
    cy.intercept('POST', '/path/to/upload/endpoint').as('uploadFile');

    // Selecionar o input de upload e anexar o arquivo
    cy.get('input[type="file"]').attachFile(filePath);

    // Verificar se o arquivo foi anexado corretamente e enviar o formulário
    cy.get('form').submit();

    // Aguardar e verificar a resposta da requisição de upload
    cy.wait('@uploadFile').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // Verificar se o arquivo foi importado corretamente na interface
    cy.get('.uploaded-file-list').should('contain', 'file.ext'); // Substitua pela verificação adequada
  */
       })
    })
