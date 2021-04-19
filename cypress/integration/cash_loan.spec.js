/// <reference types="cypress" />
import { state } from '../support/state'
import { transformData } from '../support/helpers'

describe('Cash loan form', () => {
  it('Should have initial value of 20 000 zł', () => {
    cy.visit('/ranking-kredytow-gotowkowych')
    .get('#credit-value').should('have.value', '20 000 zł');
  });

  it('After Should increment value by 5000 on plus click', () => {
    cy.get('button[data-field="credit-value"][data-type="plus"]').click()
    .get('#credit-value').should('have.value', '25 000 zł');
  })

  it('Should POST selected values', () => {
    cy.get('#credit-value').then(($elem) => {
      state.creditValue = transformData($elem)
    }).then(() => {
      cy.get('#credit-period').then(($elem) => {
        state.creditPeriod = transformData($elem)
      })
    }).then(() => {
      cy.get('#creditSubmit').click()
      cy.url().should('include', state.creditValue);
      cy.url().should('include', state.creditPeriod);
    });
  });
});