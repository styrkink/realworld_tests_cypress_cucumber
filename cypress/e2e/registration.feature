Feature: Registration

Scenario: Sign up with valid data
  Given I open the main page
  When I click the sign-up button
  And I fill the registration form with valid data
  And I submit the registration form
  Then I should see the user avatar
  And I should see the "Your Feed" tab

Scenario: Sign up with empty Username field
  Given I open the main page
  When I click the sign-up button
  And I fill the registration form with valid data
  And I clear the username field
  And I submit the registration form
  Then I should see the URL contain "/register"
  And I should see the error message "username can't be blank"

Scenario: Sign up with empty Email field
  Given I open the main page
  When I click the sign-up button
  And I fill the registration form with valid data
  And I clear the email field
  And I submit the registration form
  Then I should see the URL contain "/register"
  And I should see the error message "email can't be blank"

Scenario: Sign up with empty Password field
  Given I open the main page
  When I click the sign-up button
  And I fill the registration form with valid data
  And I clear the password field
  And I submit the registration form
  Then I should see the URL contain "/register"
  And I should see the error message "password can't be blank"
