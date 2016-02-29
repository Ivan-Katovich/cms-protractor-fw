Feature: Hotels e2e Journey Test
  As a user
  I can complete hotels search gadget with private data and go to the results page with suitable providers
  So there I can go to provider's site

  @journey @desktop @mobile @tabletP @tabletL
  Scenario: Hotels user journey
    When I navigate to the 'super-home' page
    Then the main logo should be visible
    And I select 'hotels' search gadget
    And I complete 'destination' field with value 'Paris'
    And I select 8th day of the next month for the 'check-in'
    And I select 16th day of the next month for the 'check-out'
    And I complete 'guests' field with value 'More options...'
    And I complete 'adults' field with value '4'
    And I complete 'children' field with value '1'
    And I complete 'first-child-age' field with value '8'
    And I click on search button
    Then I should be taken to the 'hotels' results page in the 'same' window
    And results page url should contain the right items
    When I wait for all results load
    Then results page main title should be visible
    When I click on the 1st result card View Deal button
    Then I should be taken to the 'interstitial' page in a 'new' window
    And result card provider ID and Interstitial page provider ID are the same
    And result card provider logo is displayed correct
    And I should be taken to the 'provider's' site in the 'same' window