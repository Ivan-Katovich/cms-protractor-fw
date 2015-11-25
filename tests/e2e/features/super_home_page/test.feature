Feature: Home page check
  As a user
  I can go to the home page
  So I can see

  @test @desktop @mobile
  Scenario: Car-hire e2e scenarios from TSM home page with default parameters to car-hire results page
    When I navigate to the 'super-home' page
    And I wait for page loaded
    Then the main logo should be visible
    And say hello world
    When I select 'car-hire' search gadget
    Then car-hire driver's age text should be 'Age 25 to 75'
    And label of the 'pick-up-from' field should be 'Pick up from'
    And label of the 'pick-up-time' field should be 'Pick up time'
    When I select '3'rd option in the 'pick-up-time' dropdown field
    And I complete 'pick-up-from' field with value 'Manchester'
    And I complete 'pick-up-time' field with value '10:00'
    And I click on search button
    Then I should be taken to the 'car-hire' results page
    When I wait for all results load
    And results page main title should be visible

