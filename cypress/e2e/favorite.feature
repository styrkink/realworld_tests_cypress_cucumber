Feature: Favorite functionality

Scenario: Add to favorite article as unauthorised user
  Given I open the main page
  When I try to add an article to favorite
  Then I should be redirected to the register page

Scenario: Add to favorite article as authorised user
  Given I open the main page
  When I sign in with valid credentials
  And I open the global feed tab
  And I add an article to favorite
  And I go to my profile
  And I open the favorite tab
  Then I should see the article in favorites