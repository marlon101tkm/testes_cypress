describe('Teste com lista de listas',function(){

  it('se carregou',()=>{
    cy.visit('https://todolistme.net')
    
  })

  it('se criou nova lista',()=>{

    cy.get('#addlist')
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
    .type('Nova Lista',{ delay: 100 })
    .get('[type="submit"]')
    .click()

    cy.get('#lists')
    .should('contain','Nova Lista')
  
   
  })




  it('se editou nome da lista de listas ',()=>{
    cy.get('#lists')
    .contains('Nova Lista')
    .dblclick()
    .get('#updatebox')
    .type('Outra Lista',{ delay: 100 })
    .get('[type="submit"]')
    .click()

    cy.get('#lists')
    .should('not.contain','Nova Lista')
    .and('contain','Outra Lista')

  })
    

  it('se excluiu uma lista ',()=>{

    cy.get('#lists')
        .contains('Outra Lista')
        .parent()
        .children('.delete')
        .click({ force: true })
        cy.get('#lists')
        .should('not.contain','Outra Lista')

  })

      
  it('se copiou lista',()=>{

    cy.get('#addlist')
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
    .type('Nova Lista',{ delay: 100 })
    .get('[type="submit"]')
    .click()

    cy.get('#lists')
    .should('contain','Nova Lista')

    cy.get('#lists')
    .contains('Nova Lista')
    .parent()
    .children('.copylist')
    .click({ force: true })
    .get('[type="submit"]')
    .click()



    cy.get('#lists')
    .should('contain','Copy of Nova Lista')
    .and('contain','Copy of Nova Lista')


  })

     
})