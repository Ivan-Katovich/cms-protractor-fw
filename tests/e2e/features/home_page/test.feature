Feature: Home page check
  As a user
  I can go to the home page
  So I can see

  @test
  Scenario: Hotels e2e scenarios from TSM home page with default parameters to hotels results page
    When I navigate to the Home page
    Then the title should have correct text

