describe('First test', function () {
  it('does not do much', function () {
    expect(true).to.equal(true)
    cy.visit('https://google.com')
    cy.pause() // enters into step-through mode for all following commands
    cy.contains('type').click()
    cy.url().should('include', '/go')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@gmail.com')
  })
})
