Feature: Car-Hire sorting results
  As a user
  I can sort results on results page
  So the order of results cards is another then it was.

  @sorting @desktop @ignore
  Scenario: Car-hire results sorting
    When I navigate to the 'car-hire' results page using 'minimum' profile
    Given results page url should contain the right items
#    When I open 'Search Gadget'
    Given I open 'Filters Panel'
    Then the 'show-all-button' field should be not visible
    When I remember the text value of 'filters-button' field
    When I complete 'mini' field with value 'true'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    When I complete 'economy' field with value 'true'
    Then the displayed number of filtered results should be less then remembered filtered results number
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number