/// <reference types="cypress" />
import produtos from "../support/page_objects/produtos";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      produtos.visitarUrl("produtos")
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta ', () => {

    cy.fixture('listaProdutos').then((dados) =>{ 
        produtos.buscarProdutos(dados[0].nomeProduto)
        cy.wait(500)
        produtos.addprodutocarrinho(dados[0].cor, dados[0].tamanho,dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto) 
    });

    cy.fixture('listaProdutos').then((dados) =>{ 
        produtos.buscarProdutos(dados[1].nomeProduto)
        cy.wait(500)
        produtos.addprodutocarrinho(dados[1].cor, dados[1].tamanho,dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto) 
    });

    cy.fixture('listaProdutos').then((dados) =>{ 
        produtos.buscarProdutos(dados[2].nomeProduto)
        cy.wait(500)
        produtos.addprodutocarrinho(dados[2].cor, dados[2].tamanho,dados[2].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto) 
    });

    cy.fixture('listaProdutos').then((dados) =>{ 
        produtos.buscarProdutos(dados[3].nomeProduto)
        cy.wait(500)
        produtos.addprodutocarrinho(dados[3].cor, dados[3].tamanho,dados[3].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto) 
        cy.get('.woocommerce-message > .button').click()
    });

    cy.fixture('listaProdutos').then((dados) =>{ 
        produtos.verificarAddProduto(1, dados[0].nomeProduto)
        produtos.verificarAddProduto(2, dados[1].nomeProduto)
        produtos.verificarAddProduto(3, dados[2].nomeProduto)
        produtos.verificarAddProduto(4, dados[3].nomeProduto)
    });
})
})