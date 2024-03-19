describe('Calculator Functionality', () => {
  it('loads the calculator', () => {
    cy.visit('http://localhost:3000') // Update with the URL of your app
    cy.get('.display').should('contain', '0') // Assuming the display shows '0' initially
  })

  it('performs addition correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('.button-1').click() // Adapt selector to match your button for '1'
    cy.get('.button-plus').click() // Adapt selector to match your button for '+'
    cy.get('.button-2').click() // Adapt selector to match your button for '2'
    cy.get('.button-equals').click() // Adapt selector to match your button for '='
    cy.get('.display').should('contain', '3') // Check if the display shows '3' as result
  })
})
