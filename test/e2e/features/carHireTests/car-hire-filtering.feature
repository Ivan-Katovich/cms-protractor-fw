Feature: Car-Hire filtering results
  As a user
  I can filter results on results page
  So the number of results cards is another then it was.

  Background:
    Given I navigate to the 'car-hire' results page using 'minimum' profile
    Given results page url should contain the right items
    Given I open 'Filters Panel'

  @filtering @desktop
  Scenario: Car-hire budget filter
    Then the 'show-all-button' field should be not visible
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'budget' field in gadget
    And I move 'left' of 'budget' slider on '50' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'budget' field text in gadget and the remembered value should be different
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'budget' field in gadget
    And I move 'right' of 'budget' slider on '-40' pixels
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'budget' field text in gadget and the remembered value should be different
    When I click on 'show-all-button' button
    And the displayed number of filtered results should be the same as remembered all results number
    And the 'show-all-button' field should be not visible

  @filtering @desktop
  Scenario: Car-hire category filter
    When I remember the text value of 'filters-button' field
    And I complete 'category' field with value 'Mini'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I complete 'category' field with value 'Intermediate'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I complete 'category' field with value 'Standard'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I complete 'category' field with value 'Premium'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less or equals to remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'category' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Car-hire type filter
    When I remember the text value of 'filters-button' field
    And I complete 'type' field with value 'People Carrier / Minibus'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I complete 'type' field with value 'Crossover / SUV'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'type' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Car-hire doors filter
    When I open 'doors' filters field
    And I remember the text value of 'filters-button' field
    And I complete 'doors' field with value '2-3 Doors'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I complete 'doors' field with value '4-5 Doors'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'doors' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Car-hire transmission filter
    When I open 'transmission' filters field
    And I remember the text value of 'filters-button' field
    And I complete 'transmission' field with value 'Manual'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I complete 'transmission' field with value 'Automatic'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be the same as remembered all results number
    And the 'show-all-button' field should be not visible
    When I clear 'transmission' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Car-hire air-conditioning filter
    When I open 'air-conditioning' filters field
    And I remember the text value of 'filters-button' field
    And I complete 'air-conditioning' field with value 'Air Con'
    Then the displayed number of filtered results should be less or equals to remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'air-conditioning' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Car-hire fuel policy filter
    When I open 'fuel-policy' filters field
    And I remember the text value of 'filters-button' field
    And I complete 'fuel-policy' field with value 'Full to Full'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I complete 'fuel-policy' field with value 'Full to Empty'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less or equals to remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'fuel-policy' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Car-hire pick-up location filter
    When I open 'pick-up-location' filters field
    And I remember the text value of 'filters-button' field
    And I complete 'pick-up-location' field with value 'On Airport'
    Then the displayed number of filtered results should be less or equals to remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'pick-up-location' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Car-hire providers filter
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'providers' checkboxlist
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I select 2st checkbox in 'providers' checkboxlist
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I select 3st checkbox in 'providers' checkboxlist
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'providers' filter
    Then the displayed number of filtered results should be the same as remembered all results number