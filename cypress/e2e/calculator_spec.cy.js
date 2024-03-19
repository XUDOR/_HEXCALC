describe('Calculator Functionality', () => {
  it('loads the calculator', () => {
    cy.visit('http://localhost:3000') // Update with the URL of your app
    cy.get('.display').should('contain', '0') // Assuming the display shows '0' initially
  })

  it('performs addition correctly', () => {
    cy.visit('http://localhost:3000')
    cy.contains('button', '1').click() // Finds a button that contains '1' and clicks it
    cy.contains('button', '+').click() // Finds a button that contains '+' and clicks it
    cy.contains('button', '2').click() // Finds a button that contains '2' and clicks it
    cy.contains('button', '=').click() // Finds a button that contains '=' and clicks it
    cy.get('.display').should('contain', '3') // Check if the display shows '3' as result
  })
})
