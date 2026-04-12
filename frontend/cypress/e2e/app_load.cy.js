describe('Scoutech Home Page', () => {
 it('successfully loads and shows live matches', () => {
  cy.visit('http://localhost:5173')

  cy.get('nav').should('contain', 'SCOUTECH')

  cy.contains('Analyze Match', { timeout: 10000 }).should('be.visible')
 })
})