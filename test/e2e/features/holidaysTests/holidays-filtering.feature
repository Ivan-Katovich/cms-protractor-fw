Feature: Holidays filtering results
  As a user
  I can filter results on results page
  So the number of results cards is another then it was.

  Background:
    Given I navigate to the 'holidays' results page using 'minimum' profile
    Given results page url should contain the right items
    Given I open 'Filters Panel'

  @filtering @desktop
  Scenario: Holidays price filter
    Then the 'show-all-button' field should be not visible
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'price' field in gadget
    And I move 'left' of 'price' slider on '60' pixels
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    And the 'price' field text in gadget and the remembered value should be different
    And the 'show-all-button' field should be visible
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'price' field in gadget
    And I move 'right' of 'price' slider on '-60' pixels
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    And the 'price' field text in gadget and the remembered value should be different
    When I click on 'show-all-button' button
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered
    And the 'show-all-button' field should be not visible
    And the 'price' field text in gadget and the remembered value should be different

  @filtering @desktop
  Scenario: Holidays board basis filter
    When I remember the text value of 'filters-button' field
    And I complete 'board-basis' field with value 'Room Only'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    And I clear 'board-basis' filter
    Then displayed offers number should be the same as remembered
    And displayed properties number should be the same as remembered

  @filtering @desktop
  Scenario: Holidays stars filter
    When I remember the text value of 'filters-button' field
    And I complete 'stars' field with value '3'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I complete 'stars' field with value '5'
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered
    When I remember the text value of 'filters-button' field
    When I clear 'stars' filter
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered

  @filtering @desktop
  Scenario: Holidays guest rating filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'guest-rating' field in gadget
    And I move 'left' of 'guest-rating' slider on '60' pixels
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    And the 'guest-rating' field text in gadget and the remembered value should be different
    When I clear 'guest-rating' filter
    Then displayed offers number should be the same as remembered
    And displayed properties number should be the same as remembered
    And the 'guest-rating' field text in gadget and the remembered value should be the same

  @filtering @desktop
  Scenario: Holidays free facilities filter
    When I remember the text value of 'filters-button' field
    And I complete 'free-facilities' field with value 'Free Wifi'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I complete 'free-facilities' field with value 'Free Internet'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I clear 'free-facilities' filter
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered

  @filtering @desktop
  Scenario: Holidays hotel facilities filter
    When I remember the text value of 'filters-button' field
    And I complete 'hotel-facilities' field with value 'Internet'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I complete 'hotel-facilities' field with value 'Accessible'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I complete 'hotel-facilities' field with value 'Airport Transfer'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I clear 'hotel-facilities' filter
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered

  @filtering @desktop
  Scenario: Holidays leisure facilities filter
    When I remember the text value of 'filters-button' field
    And I complete 'leisure-facilities' field with value 'Swimming pool'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I complete 'leisure-facilities' field with value 'Gym / Fitness Centre'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I complete 'leisure-facilities' field with value 'Tennis Courts'
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I clear 'leisure-facilities' filter
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered

  @filtering @desktop
  Scenario: Holidays departure airports filter
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'departure-airports' checkboxlist
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I select 2st checkbox in 'departure-airports' checkboxlist
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered
    When I clear 'departure-airports' filter
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered

  @filtering @desktop
  Scenario: Holidays outbound takeoff filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-takeoff' field in gadget
    And I move 'left' of 'outbound-takeoff' slider on '40' pixels
    Then displayed offers number should be less or equals to remembered
    And displayed properties number should be less or equals to remembered
    And the 'outbound-takeoff' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-takeoff' field in gadget
    And I move 'right' of 'outbound-takeoff' slider on '-40' pixels
    Then displayed offers number should be less or equals to remembered
    And displayed properties number should be less or equals to remembered
    And the 'outbound-takeoff' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-takeoff' field in gadget
    When I clear 'outbound-takeoff' filter
    Then displayed offers number should be more or equals to remembered
    And displayed properties number should be more or equals to remembered
    And the 'outbound-takeoff' field text in gadget and the remembered value should be different

  @filtering @desktop
  Scenario: Holidays inbound takeoff filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-takeoff' field in gadget
    And I move 'left' of 'inbound-takeoff' slider on '40' pixels
    Then displayed offers number should be less or equals to remembered
    And displayed properties number should be less or equals to remembered
    And the 'inbound-takeoff' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-takeoff' field in gadget
    And I move 'right' of 'inbound-takeoff' slider on '-40' pixels
    Then displayed offers number should be less or equals to remembered
    And displayed properties number should be less or equals to remembered
    And the 'inbound-takeoff' field text in gadget and the remembered value should be different
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-takeoff' field in gadget
    When I clear 'inbound-takeoff' filter
    Then displayed offers number should be more or equals to remembered
    And displayed properties number should be more or equals to remembered
    And the 'inbound-takeoff' field text in gadget and the remembered value should be different

  @filtering @desktop
  Scenario: Holidays outbound duration filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'outbound-duration' field in gadget
    And I move 'left' of 'outbound-duration' slider on '40' pixels
    Then displayed offers number should be less or equals to remembered
    And displayed properties number should be less or equals to remembered
    And the 'outbound-duration' field text in gadget and the remembered value should be different
    When I clear 'outbound-duration' filter
    Then displayed offers number should be the same as remembered
    And displayed properties number should be the same as remembered
    And the 'outbound-duration' field text in gadget and the remembered value should be the same

  @filtering @desktop
  Scenario: Holidays inbound duration filter
    When I remember the text value of 'filters-button' field
    And I remember the text value of 'inbound-duration' field in gadget
    And I move 'left' of 'inbound-duration' slider on '40' pixels
    Then displayed offers number should be less or equals to remembered
    And displayed properties number should be less or equals to remembered
    And the 'inbound-duration' field text in gadget and the remembered value should be different
    When I clear 'inbound-duration' filter
    Then displayed offers number should be the same as remembered
    And displayed properties number should be the same as remembered
    And the 'inbound-duration' field text in gadget and the remembered value should be the same

  @filtering @desktop
  Scenario: Holidays airlines filter
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'airlines' checkboxlist
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I select 3st checkbox in 'airlines' checkboxlist
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered
    When I remember the text value of 'filters-button' field
    When I clear 'airlines' filter
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered

  @filtering @desktop
  Scenario: Holidays providers filter
    When I remember the text value of 'filters-button' field
    And I select 1st checkbox in 'providers' checkboxlist
    Then displayed offers number should be less then remembered
    And displayed properties number should be less or equals to remembered
    When I remember the text value of 'filters-button' field
    And I select 2st checkbox in 'providers' checkboxlist
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered
    When I remember the text value of 'filters-button' field
    When I clear 'providers' filter
    Then displayed offers number should be more then remembered
    And displayed properties number should be more or equals to remembered




