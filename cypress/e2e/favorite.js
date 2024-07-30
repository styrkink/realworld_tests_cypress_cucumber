import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from './pages/main.page';
import { LoginPage } from './pages/login.page';
import { ProfilePage } from './pages/profile.page';
const credentials = require('../fixtures/credentials.json');

const mainPage = new MainPage();
const loginPage = new LoginPage();
const profilePage = new ProfilePage();

Given('I open the main page', () => {
  mainPage.navigate();
});

When('I try to add an article to favorite', () => {
  mainPage.addToFavorite();
});

Then('I should be redirected to the register page', () => {
  cy.url().should('include', '/register');
});

When('I sign in with valid credentials', () => {
  mainPage.clickSignInButton();
  loginPage.fillSignInForm(credentials.email, credentials.password);
  loginPage.submitLoginForm();
});

When('I open the global feed tab', () => {
  mainPage.openGlobalFeedTab();
});

When('I click on an author\'s name', () => {
  mainPage.clickOnAuthorName();
});

When('I click the follow button', () => {
  cy.get('button.btn.btn-sm').contains('Follow').click();
});

When('I add an article to favorite', () => {
  mainPage.addToFavorite();
});

When('I go to my profile', () => {
  mainPage.goToProfile();
});

When('I open the favorite tab', () => {
  profilePage.openFavoriteTab();
});

Then('I should see the article in favorites', () => {
  cy.get(profilePage.articlePreview).should('be.visible');
});
