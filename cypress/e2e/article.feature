Feature: Article functionality

Scenario: Publish article without article title
  Given I am logged in
  When I click the "New article" button
  And I fill the article "summary", "description" and "tag" fields
  And I click the "Publish article" button
  Then the article is not published

Scenario: Publish article without article description
  Given I am logged in
  When I click the "New article" button
  And I fill the article "title", "summary" and "tag" fields
  And I click the "Publish article" button
  Then the article is not published

Scenario: Publish article without article summary
  Given I am logged in
  When I click the "New article" button
  And I fill the article "title", "description" and "tag" fields
  And I click the "Publish article" button
  Then the article is not published

Scenario: Publish article without article tag
  Given I am logged in
  When I click the "New article" button
  And I fill the article "title", "summary" and "description" fields
  And I click the "Publish article" button
  Then the article is published
  And I delete article
