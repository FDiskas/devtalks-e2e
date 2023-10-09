describe('App tests', () => {
  beforeEach('Visits the homepage', () => {
    cy.visit('/');
    cy.viewport(800, 600);
    cy.waitForReact();
  });

  it('Locate Bob', () => {
    cy.get('[href="/users"]').click();
    cy.contains('102: Bob').click();

    cy.get('h1').should('have.text', 'Detail for Bob');

    cy.get('h1').should(($h1) => {
      const text = Cypress.$($h1).text();

      expect(text).eql('Detail for Bob');
    });
  });

  it('Locate Bob using cypress-react-selector', () => {
    cy.get('[href="/users"]').click();
    cy.react('ListItem', { props: { data: { name: 'Bob' } } }).click();

    cy.get('h1').should('have.text', 'Detail for Bob');

    cy.get('h1').should(($h1) => {
      const text = Cypress.$($h1).text();

      expect(text).eql('Detail for Bob');
    });
  });

  it('should redirect to home page', () => {
    cy.get('footer > a').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should resize and take a screenshot', () => {
    cy.viewport('iphone-xr', 'portrait');
    cy.url().should('eq', 'http://localhost:3000/');

    cy.screenshot();
  });
});
