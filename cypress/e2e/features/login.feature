Feature: Login functionality

  Scenario: Login with valid data
    Given I navigate to the main page
    When I click the sign in button
    And I fill the login form with valid credentials
    And I submit the login form
    Then I should see the user avatar
    And I should see the your feed tab

  Scenario: Login with invalid email
    Given I navigate to the main page
    When I click the sign in button
    And I fill the login form with invalid email
    And I submit the login form
    Then I should see the login URL
    And I should see an error message

  Scenario: Login with invalid password
    Given I navigate to the main page
    When I click the sign in button
    And I fill the login form with invalid password
    And I submit the login form
    Then I should see the login URL
    And I should see an error message