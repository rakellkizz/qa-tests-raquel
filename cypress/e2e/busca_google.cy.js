describe('Busca simples no Google', () => {
  it('Pesquisa e valida resultados', () => {
    cy.visit('https://www.google.com');

    // Campo de busca (o Google usa uma <textarea> como input)
    cy.get('textarea[name="q"]').type('Oracle Cloud{enter}');

    // Área de resultados deve aparecer
    cy.get('#search').should('be.visible');

    // Deve existir algum resultado com "Oracle"
    cy.contains('#search a h3', /oracle/i).should('exist');
  });
});
