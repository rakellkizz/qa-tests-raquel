describe('Busca local - ambiente de teste', () => {
  it('Submete termo e valida resultados', () => {
    cy.visit('http://localhost:8080');          // site local
    cy.get('#q').type('Oracle Cloud');
    cy.get('form#searchForm').submit();
    cy.get('.result').should('have.length', 5);
    cy.get('.result').first().contains('Oracle Cloud');
  });
});
