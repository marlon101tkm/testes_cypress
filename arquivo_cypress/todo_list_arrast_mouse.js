describe('Teste de arrastar com o mouse',function(){


  it('se carregou',()=>{
    cy.visit('https://todolistme.net')
    
  })
  it('marcou como feita arrastando  tarefa',()=>{
    cy.get('#newtodo')
    .type('fazer trabalho{enter}',{ delay: 100 })

    cy.get('#mytodos li:last')
      .trigger('mousedown', { which: 1})
      .trigger('mousemove', { pageX: 300, pageY: 600})
      .trigger('mouseup',{force: true});

      cy.get('#mydonetodos ')
      .should('contain','fazer trabalho')

      cy.get('#mytodos ')
      .should('not.contain','fazer trabalho')
  })





  it('reaordenou tarefa',()=>{
    cy.get('#newtodo')
    .type('fazer trabalho{enter}',{ delay: 100 })
   
    cy.get('#mytodos li:last')
      .trigger('mousedown', { which: 1})
      .trigger('mousemove', { pageX: 300, pageY: 200})
      .trigger('mouseup',{force: true});

      cy.get('#mytodos li:first')
      .should('contain','fazer trabalho')

      cy.get('#mytodos li:last')
      .should('not.contain','fazer trabalho')


  })

  
  it('reordenou lista',()=>{
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

    cy.get('#lists li:last')
      .trigger('mousedown', { which: 1})
      .trigger('mousemove', { pageX: 840, pageY: 180})
      .trigger('mouseup',{force: true});

    cy.get('#lists li:last')
     .should('not.contain','Nova Lista')

      


  })



})