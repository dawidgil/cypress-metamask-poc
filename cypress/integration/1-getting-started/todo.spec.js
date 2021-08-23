/// <reference types="cypress" />


describe('login to switchboard', () => {
    before(() => {
        cy.setupMetamask({});
    })
    it('should login and try to reinitialize session', () => {
        cy.visit('http://switchboard-dev.energyweb.org');
        cy.contains('USE METAMASK').click();
        cy.acceptMetamaskAccess();
        cy.metamaskSign();
        cy.contains('app-card', 'Assets').should('be.exist');
        // cy.get('app-loading').should('not.exist');
    });


})
