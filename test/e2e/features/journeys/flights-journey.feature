Feature: Flights e2e Journey Test
  As a user
  I can complete flights search gadget with private data and go to the results page with suitable providers
  So there I can go to provider's site

  @journey @desktop @mobile @tabletP @tabletL @wip
  Scenario: Return Flights user journey
    When I navigate to the 'super-home' page
    Then the main logo should be visible
    And I select 'flights' search gadget
    And I complete 'flying-from111' field with value 'Manchester'
#    And I click on 'show-cabin-class' button
#    And I click on 'type-of-flight' button
    And I complete 'flying-to' field with value 'Madrid'
    And I select 8th day of the next month for the 'depart'
    And I select 16th day of the next month for the 'return'
    And I complete 'adult' field with value '3'
    And I click on search button
    Then I should be taken to the 'flights' results page in the 'same' window
    And results page url should contain the right items
    When I wait for all results load
    Then results page main title should be visible
    And Flights results card contains '2' flight-legs
    When I click on the 1st result card View Deal button
    Then I should be taken to the 'interstitial' page in a 'new' window
    And result card provider ID and Interstitial page provider ID are the same
    And result card provider logo is displayed correct
    And I should be taken to the 'provider's' site in the 'same' window

  @journey @desktop @mobile @tabletP @tabletL @wip
  Scenario: One way Flights user journey
    When I navigate to the 'super-home' page
    Then the main logo should be visible
    And I select 'flights' search gadget
    And I select 'One way' option in the 'type-of-flight' radiobuttons field
    And I complete 'flying-from' field with value 'Manchester'
    And I complete 'flying-to' field with value 'Madrid'
    And I select 10th day of the next month for the 'depart'
    And I complete 'adult' field with value '3'
    And I click on search button
    Then I should be taken to the 'flights' results page in the 'same' window
    And results page url should contain the right items
    When I wait for all results load
    Then results page main title should be visible
    And Flights results card contains '1' flight-leg
    When I click on the 1st result card View Deal button
    Then I should be taken to the 'interstitial' page in a 'new' window
    And result card provider ID and Interstitial page provider ID are the same
    And result card provider logo is displayed correct
    And I should be taken to the 'provider's' site in the 'same' window