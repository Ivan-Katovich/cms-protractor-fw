Feature: Flights filtering results
  As a user
  I can filter results on results page
  So the number of results cards is another then it was.

  Background:
    Given I navigate to the 'flights' results page using 'minimum' profile
    Given results page url should contain the right items
    Given I open 'Filters Panel'
    Given I clear 'cabin-class' filter

  @filtering @desktop
  Scenario: Flights stops filter
    Then the 'show-all-button' field should be not visible
    When I remember the text value of 'filters-button' field
    And I complete 'stops' field with value 'One stop'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I click on 'show-all-button' button
    Then the displayed number of filtered results should be the same as remembered all results number
    And the 'show-all-button' field should be not visible

  @filtering @desktop
  Scenario: Flights outbound take-off filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-take-off' field in gadget
    And I move 'left' of 'outbound-take-off' slider on '50' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'outbound-take-off' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-take-off' field in gadget
    And I move 'right' of 'outbound-take-off' slider on '-40' pixels
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'outbound-take-off' field text in gadget and the remembered value should be different
    When I clear 'outbound-take-off' filter
    And the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Flights inbound take-off filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-take-off' field in gadget
    And I move 'left' of 'inbound-take-off' slider on '50' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'inbound-take-off' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-take-off' field in gadget
    And I move 'right' of 'inbound-take-off' slider on '-40' pixels
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'inbound-take-off' field text in gadget and the remembered value should be different
    When I clear 'inbound-take-off' filter
    And the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Flights outbound duration filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-duration' field in gadget
    And I move 'left' of 'outbound-duration' slider on '50' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'outbound-duration' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-duration' field in gadget
    And I move 'right' of 'outbound-duration' slider on '-40' pixels
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'outbound-duration' field text in gadget and the remembered value should be different
    When I clear 'outbound-duration' filter
    And the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Flights inbound duration filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-duration' field in gadget
    And I move 'left' of 'inbound-duration' slider on '50' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'inbound-duration' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-duration' field in gadget
    And I move 'right' of 'inbound-duration' slider on '-40' pixels
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'inbound-duration' field text in gadget and the remembered value should be different
    When I clear 'inbound-duration' filter
    And the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Flights via airport filter
    When I open 'via-airport' filters field
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'via-airport' checkboxlist
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I select 3st checkbox in 'via-airport' checkboxlist
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I select 5st checkbox in 'via-airport' checkboxlist
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'via-airport' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Flights airlines filter
    When I open 'airlines' filters field
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'airlines' checkboxlist
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I select 3st checkbox in 'airlines' checkboxlist
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I select 5st checkbox in 'airlines' checkboxlist
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'airlines' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Flights cost filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'cost' field in gadget
    And I move 'left' of 'cost' slider on '50' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'cost' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'cost' field in gadget
    And I move 'right' of 'cost' slider on '-40' pixels
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'cost' field text in gadget and the remembered value should be different
    When I clear 'cost' filter
    And the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Flights cabin class filter
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'cabin-class' checkboxlist
    Then the displayed number of filtered results should be less or equals to remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    When I clear 'cabin-class' filter
    Then the displayed number of filtered results should be the same as remembered all results number