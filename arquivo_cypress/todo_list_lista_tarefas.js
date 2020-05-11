describe('Teste com a lista de tarefas',function(){

    it('se carregou',()=>{
      cy.visit('https://todolistme.net')
      
    })
    
  
    
    it('se adicionou nova tarefa ',()=>{
        cy.get('#newtodo')
        .type('fazer trabalho{enter}',{ delay: 100 })
       

        cy.get('#newtodo')
        .type('outra tarefa{enter}',{ delay: 100 })
       

      cy.get('#mytodos')
        .should('contain','fazer trabalho')
        .and('contain','outra tarefa')
        

    })

    it( 'se alterou nome tarefa tarefa',()=>{

      cy.get('#mytodos')
        .contains('fazer trabalho')
        .dblclick()
        .get('#updatebox')
        .type('fazer faxina')
        .get('[type="submit"]')
        .click()

        cy.get('#mytodos')
        .should('not.contain','fazer trabalho')

    })

    it('se marcou tarefa como feita',()=>{

      cy.get('#mytodos')
        .contains('fazer faxina')
        .parent()
        .children('[type="checkbox"]')
        .click()

        cy.get('#mytodos')
        .should('not.contain','fazer faxina')

        cy.get('#mydonetodos')
        .should('contain','fazer faxina')
        

    })


    it('se excluiu tarefa nao feita',()=>{
      cy.get('#mytodos')
        .contains('outra tarefa')
        .parent()
        .children('img')
        .click({ force: true })
  
        cy.get('#mytodos')
        .should('not.contain','outra tarefa')
  
    })



    it('se excluiu tarefa feita',()=>{
      cy.get('#mydonetodos')
        .contains('fazer faxina')
        .parent()
        .children('img')
        .click({ force: true })

        cy.get('#mydonetodos')
        .should('not.contain','fazer faxina')

    })


    

    it('se excluiu todas da lista de feitas',()=>{
        
      cy.get('#mytodos  li:first')
      .children('[type="checkbox"]')
      .click()

      cy.wait(500)

      cy.get('#mytodos  li:first')
      .children('[type="checkbox"]')
      .click()

      cy.wait(500)

      cy.get('#mytodos  li:first')
      .children('[type="checkbox"]')
      .click()
        
      cy.get('#belowdoneitemspanel')
        .children('a')
        .children('img')
        .click()

  

       cy.get('#mydonetodos')
         .should('not.have.class')
 

           
    })

   

    
    

    

    
   
    

})
