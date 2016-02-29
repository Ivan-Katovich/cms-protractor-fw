Feature: Car-Hire e2e Journey Test
  As a user
  I can complete car-hire search gadget with private data and go to the results page with suitable providers
  So there I can go to provider's site

  @journey @desktop @mobile @tabletP @tabletL
  Scenario: Car-hire user journey
    When I navigate to the 'super-home' page
    Then the main logo should be visible
    And I select 'car-hire' search gadget
    And I complete 'pick-up-from' field with value 'Paris'
    And I select 8th day of the next month for the 'pick-up-date'
    And I complete 'pick-up-time' field with value '12:00'
    And I select 16th day of the next month for the 'drop-off-date'
    And I complete 'drop-off-time' field with value '14:00'
    And I click on search button
    Then I should be taken to the 'car-hire' results page in the 'same' window
    And results page url should contain the right items
    When I wait for all results load
    Then results page main title should be visible
    When I click on the 1st result card View Deal button
    Then I should be taken to the 'interstitial' page in a 'new' window
    And result card provider ID and Interstitial page provider ID are the same
    And result card provider logo is displayed correct
    And I should be taken to the 'provider's' site in the 'same' window