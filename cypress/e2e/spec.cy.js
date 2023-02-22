describe('Test Case 1', () => {
  it('Gets, H2 Titles and asserts', () => {
    cy.visit('https://www.99.co')

    cy.contains("h2", "Featured Projects");
    cy.contains("h2", "Popular Projects");
    cy.contains("h2", "Find your property value instantly");
    cy.contains("h2", "Listings with videos");
    cy.contains("h2", "View these via video call");
    cy.contains("h2", "Popular listings");
    cy.contains("h2", "Featured stories");
    cy.contains("h2", "Listings found only on 99");
    cy.contains("h2", "Latest New Launches");
    cy.contains("h2", "Explore 99.co");
  })
})

describe('Test Case 2', () => {
  it('Gets, Link Popular Project', () => {
    cy.visit('https://www.99.co')

    cy.get('[data-cy="projectsListingCard"]').click({ multiple: true });
  })
})

describe('Test Case 3', () => {
  it('Gets, Filter Price Range', () => {
    cy.visit('https://www.99.co')

    cy.contains('Rent').click()
    cy.contains('Price range').click()
    cy.contains('price_min').click()
    cy.contains('$0').click()
    cy.contains('price_max').click()
    cy.contains('$500').click()
    cy.contains('Search').invoke('removeAttr', 'target').click()
    cy.url('href').should('eq', 'https://www.99.co/singapore/rent?price_max=500');
  })

  it('Gets, Filter Property Type', () => {
    cy.visit('https://www.99.co')

    cy.contains('Rent').click()
    cy.contains('Property type').click()
    cy.contains('HDB').click()
    cy.contains('Search').invoke('removeAttr', 'target').click()
    cy.url('href').should('eq', 'https://www.99.co/singapore/rent?main_category=hdb');
  })

  it('Gets, Filter Bedrooms', () => {
    cy.visit('https://www.99.co')

    cy.contains('Rent').click()
    cy.contains('Bedrooms').click()
    cy.contains('Studio').click()
    cy.contains('Search').invoke('removeAttr', 'target').click()
    cy.url('href').should('eq', 'https://www.99.co/singapore/rent?rooms=0');
  })

  it('Gets, Filter Rental Type', () => {
    cy.visit('https://www.99.co')

    cy.contains('Rent').click()
    cy.contains('Rental type').click()
    cy.contains('Master room').click()
    cy.contains('Search').invoke('removeAttr', 'target').click()
    cy.url('href').should('eq', 'https://www.99.co/singapore/rent?rental_type=room&room_type=master');
  })
})