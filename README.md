# realworld-tests-cypress

## SUMMARY
This is the repo of test cases for the conduit.realworld.how website, including cases for the register and login, filters and adding to favorite functionality, automated with the Cypress+Cucumber framework and using the github actions and HTML-reporter for reporting and CI/CD. 

## REQUIREMENTS
- Node.js v20.14.10 or higher
- Cypress v13.13.1 or higher
- Faker.js v8.4.1 or higher
- badeball/cypress-cucumber-preprocessor v20.1.1 or higher
- bahmutov/cypress-esbuild-preprocessor v2.2.2 or higher
- cypress-mochawesome-reporter v3.8.2 or higher

## Steps to Install
### 1. Clone the repository
`git clone https://github.com/styrkink/realworld_tests_cypress_cucumber.git
cd your-repo`
### 2. Install dependencies
`npm install`


## Steps to Launch
### 1. Run Cypress+Cucumber tests in headed mode
`npx cypress open`
### 2. Run Cypress+Cucumber tests in headless mode
`npm run test`
### 3. Run in different browsers
`npm run test:chromium` - for chrome
`npm run test:firefox` - for firefox


## Steps to view the report
### 1. Run with cypress report
`npm run test:cloud`
