Feature: Holidays e2e Journey Test
  As a user
  I can complete holidays search gadget with private data and go to the results page with suitable providers
  So there I can go to provider's site

  @journey @desktop @mobile @tabletP @tabletL
  Scenario: Holidays user journey
#    When I navigate to the 'holidays' results page using 'minimum' profile
    When I navigate to the 'super-home' page
    Then the main logo should be visible
    And I select 'holidays' search gadget
    And I complete 'depart-from-main' field with value 'London - All Airports (LON)'
    And I complete 'holiday-destination' field with value 'Madrid'
    And I select 10th day of the next month for the 'depart'
#    And I complete 'depart' field with value 'd:-5/m:+1/y:2017'
    And I select option with value '10' in the 'Popular durations' option group in the 'nights' dropdown field
    And I complete 'adult' field with value '3'
    And I complete 'child' field with value '1'
    And I complete 'first-child-age' field with value '5'
#    And I complete current Search Gadget fields using 'minimum' profile
    And I click on search button
    Then I should be taken to the 'holidays' results page in the 'same' window
    And results page url should contain the right items
    When I wait for all results load
    Then results page main title should be visible
    When I click on the 1st result card View Deal button
    Then I should be taken to the 'interstitial' page in a 'new' window
    And result card provider ID and Interstitial page provider ID are the same
    And result card provider logo is displayed correct
    And I should be taken to the 'provider's' site in the 'same' window