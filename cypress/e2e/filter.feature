Feature: Filter posts by tag

Scenario: Should filter posts by a tag
  Given I open the main page
  When I click a random tag
  Then the tag should be active
  And the articles should be filtered by the selected tag