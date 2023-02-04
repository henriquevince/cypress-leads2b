describe('Plataforma Leads2B: teste prospectando e acessando página de funil de vendas', () => {
    it('Teste 2: prospectando a empresa e acessando o funil de vendas. Deve acessar, logar na plataforma Leads, acessar a seção de consulta de CNPJ Pro, buscar empresa e listar por opção lista, prospectar e acessar o funil de vendas', () => {
      
      Cypress.on('uncaught:exception', (err, runnable) => { //Algumas requisições retornando 403 (motivo não localizado), não impactaram nos testes, usado este comando para o Cypress ignorar esses erros de requisição.
        return false;
      });
      
      cy.visit('https://app.leads2b.com/#/') //Acessa url da plataforma
      //cy.get('.text-gray-700').click() //Clica na opção de logar
  
      var dadosLogin = { //Armazena os dados de login
        email: 'henriquevince@outlook.com',
        senha: '123456'
      }
  
      cy.get('form > :nth-child(1) > span > .a-input-text_wrapper > .a-input-text_input').click().type(dadosLogin.email) //Clica no campo e-mail e preenche com dadosLogin.email
  
      cy.get('div.mt-4 > [value=""] > .input-password-container > .input-password--wrapper > .a-input-text_wrapper > .a-input-text_input') //Clica no campo senha e preenche com dadosLogin.senha
      .click().type(dadosLogin.senha)
  
      cy.get('i[class="fa icon-arrow-right-line mr2"]').click() //Clica no botão de login
  
      cy.visit('https://app.leads2b.com/#/consulta-cnpj') //Acessa página de consulta CNPJ pro, usei cy.visit pois não achei nenhuma maneira de localizar o href="#/consulta-cnpj" 
  
      cy.wait(5000) //Aguarda os aproximados 5000ms da requisição do login
  
      cy.contains('button:nth-child(2) span' , 'Segmentos de mercado').click() //Seleciona busca segmento de mercado
  
      cy.get('input[placeholder="Ex: petshop"]').click() //Clica no select de segmento
  
      cy.contains('li[class="pl2 pt2 pb2"]' , 'Abatedouros').click() //Seleciona segmento "Abatedouros"
  
      cy.get('.a-btn--primary').click() //Clica botão "Buscar"

      cy.wait(4000) //Aguarda 4s após a requisição de busca

      cy.get('input[name="checkboxFilterPurchased"]').click()
    
      cy.get('.grid-active > :nth-child(1)').click() //Clica no item da lista especificado em nth-child()
  
      cy.get('div[class="main-button"]').click() //Salva empresa para prospectar
  
      cy.wait(5000) //Aguarda 5s para dar tempo de exibir o front da tela pré-prospect
  
      cy.get('button[class="a-btn mt-2 w-100 py-2 a-btn--success-secondary]').click() //Acessa página de funil de vendas    
    })
  })