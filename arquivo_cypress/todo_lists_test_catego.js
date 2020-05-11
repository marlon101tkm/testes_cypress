describe('Teste categoria',function(){

    it('se carregou',()=>{
        cy.visit('https://todolistme.net')
       // cy.visit('https://www.checkli.com/checklists/view/5eaf7585d317e')
      })

      
      it('se adicionou categoria ',()=>{
            cy.get('#adddivider')
            .click()

            cy.get('#inplaceeditor')
            .should(($div)=>{
              expect($div).to.exist
            })
            .children()
            .children()
            .get('#updatebox')
            .should(($div)=>{
              expect($div).to.exist
            })
            .type('Nova Categoria',{ delay: 100 })
            .get('[type="submit"]')
            .click()


            cy.get('.categories')
            .should('contain','Nova Categoria')

      })


      it('se editou nome da categoria de listas ',()=>{
        cy.get('#lists')
        .contains('Nova Categoria')
        .dblclick()
        .get('#updatebox')
        .type('Outra Categoria',{ delay: 100 })
        .get('[type="submit"]')
        .click()
    
        cy.get('.categories')
        .should('not.contain','Nova Categoria')
        .and('contain','Outra Categoria')
    
      })



      it('se excluiu uma categoria ',()=>{

        cy.get('.categories')
            .contains('Outra Categoria')
            .parent()
            .children('.delete')
            .click({ force: true })
            cy.get('.categories')
            .should('not.contain','Outra Categoria')
    
      })

})