describe('Testes  de navegação de paginas ',function(){


    
      beforeEach(() => {
           cy.visit('https://todolistme.net')
      })


      it('se link ajuda ',()=>{
       cy.contains('Help/About')
       .click()

       cy.url().should('include', '/todo_list_about.php')
        
      })


      it('se link pilosofia',()=>{
        cy.contains('Philosophy')
        .click()
        cy.url().should('include', '/todo_list_philosophy.php')
         
       })

       

       it('se link blog',()=>{
        cy.contains('Blog')
        .click()
        cy.url().should('include', 'http://blog.todolistme.net')
         
       })


       it('se link Updates',()=>{
        cy.contains('Updates')
        .click()
        cy.url().should('include', '/todo_list_updates.php')
         
       })

       it('se link mobile',()=>{
        cy.contains('Mobile')
        .click()
        cy.url().should('include', '/mobile.php')
         
       })
})