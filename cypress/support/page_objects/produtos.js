class produtos {

    visitarUrl(url){
        cy.visit(url)
    }

    buscarProdutos(produto){
        cy.get('[type="text"]').eq(1).type(produto)
        cy.get('[type="submit"]').eq(1).click()
    }

   addprodutocarrinho(cor, tamanho, quantidade){
    cy.get(`.button-variable-item-${tamanho}`).click()
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
   }

   verificarAddProduto(numeroProduto, nomeProduto){
    cy.get(`tbody > :nth-child(${numeroProduto}) > .product-name`).should('contain', nomeProduto)
   }
}

export default new produtos()