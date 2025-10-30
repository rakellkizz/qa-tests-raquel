describe('Teste local', () => {
  it('verifica se o site abre corretamente', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Bem-vindo').should('be.visible')
  })
})
