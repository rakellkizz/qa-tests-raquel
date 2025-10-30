/// <reference types="cypress" />

describe('Portal de Busca - Site Local', () => {
  const BASE = 'http://localhost:8080';

  beforeEach(() => {
    cy.visit(BASE);
  });

  it('abre o site e valida o título e o H1', () => {
    cy.title().should('contain', 'Portal de Busca');
    cy.get('#titulo').should('be.visible').and('contain', 'Bem-vindo ao Portal de Busca');
  });

  it('digita no campo de busca e mostra a mensagem de erro se estiver vazio', () => {
    cy.get('#btn-enviar').click();
    cy.get('#resultado')
      .should('be.visible')
      .and('contain', 'Informe um termo para pesquisar.');
  });

  it('realiza uma busca válida e exibe o resultado', () => {
    cy.get('#busca').type('Oracle Cloud');
    cy.get('#btn-enviar').click();
    cy.get('#resultado')
      .should('be.visible')
      .and('contain', 'Você buscou: Oracle Cloud')
      .and('contain', 'Encontramos 3 resultados');
  });
});
