Feature: Hotels filtering results
  As a user
  I can filter results on results page
  So the number of results cards is another then it was.

  Background:
    Given I navigate to the 'hotels' results page using 'minimum' profile
    Given results page url should contain the right items
    Given I open 'Filters Panel'

  @filtering @desktop @wip
  Scenario: Hotels stars filter
    Then the 'show-all-button' field should be not visible
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'stars' field in gadget
    And I move 'left' of 'stars' slider on '120' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'stars' field text in gadget and the remembered value should be different
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'stars' field in gadget
    And I move 'right' of 'stars' slider on '-80' pixels
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'stars' field text in gadget and the remembered value should be different
    When I click on 'show-all-button' button
    And the displayed number of filtered results should be the same as remembered all results number
    And the 'show-all-button' field should be not visible

  @filtering @desktop @wip
  Scenario: Hotels guest rating filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'guest-rating' field in gadget
    And I move 'left' of 'guest-rating' slider on '60' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'guest-rating' field text in gadget and the remembered value should be different
    When I clear 'guest-rating' filter
    And the displayed number of filtered results should be the same as remembered all results number
    And the 'guest-rating' field text in gadget and the remembered value should be the same

  @filtering @desktop @wip
  Scenario: Hotels price filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'price' field in gadget
    And I move 'left' of 'price' slider on '60' pixels
    Then the displayed number of filtered results should be less or equals to remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'price' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'price' field in gadget
    And I move 'right' of 'price' slider on '-60' pixels
    Then the displayed number of filtered results should be less or equals to remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'price' field text in gadget and the remembered value should be different
    When I clear 'price' filter
    And the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Hotels board basis filter
    When I remember the text value of 'filters-button' field
    And I complete 'board-basis' field with value 'Room Only'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I complete 'board-basis' field with value 'Breakfast Included (B&B)'
    Then the displayed number of filtered results should be more then remembered filtered results number
    And the displayed number of filtered results should be less or equals to remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'board-basis' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Hotels distance filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'distance' field in gadget
    And I move 'left' of 'distance' slider on '-100' pixels
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    And the 'distance' field text in gadget and the remembered value should be different
    When I clear 'distance' filter
    And the displayed number of filtered results should be the same as remembered all results number
    And the 'distance' field text in gadget and the remembered value should be the same

  @filtering @desktop
  Scenario: Hotels free facilities filter
    When I remember the text value of 'filters-button' field
    And I complete 'free-facilities' field with value 'Free Wifi'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I complete 'free-facilities' field with value 'Free Internet'
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'free-facilities' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Hotels hotel facilities filter
    When I remember the text value of 'filters-button' field
    And I complete 'hotel-facilities' field with value 'Internet'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I complete 'hotel-facilities' field with value 'Restaurant'
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'hotel-facilities' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Hotels family facilities filter
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'family-facilities' checkboxlist
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'family-facilities' filter
    And the 'filters-button' field text and the remembered value should be the same

  @filtering @desktop
  Scenario: Hotels leisure facilities filter
    When I remember the text value of 'filters-button' field
    And I complete 'leisure-facilities' field with value 'Swimming pool'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I complete 'leisure-facilities' field with value 'Gym / Fitness Centre'
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'leisure-facilities' filter
    Then the displayed number of filtered results should be the same as remembered all results number

  @filtering @desktop
  Scenario: Hotels business facilities filter
    When I remember the text value of 'filters-button' field
    And I complete 'business-facilities' field with value 'Business Centre'
    Then the displayed number of filtered results should be less then remembered all results number
    And the displayed number of all results should be the same as remembered all results number
    When I remember the text value of 'filters-button' field
    And I complete 'business-facilities' field with value 'Meeting facilities'
    Then the displayed number of filtered results should be less then remembered filtered results number
    And the displayed number of all results should be the same as remembered all results number
    When I clear 'business-facilities' filter
    Then the displayed number of filtered results should be the same as remembered all results number