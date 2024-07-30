import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "./pages/login.page";
import { MainPage } from "./pages/main.page";
import { user } from "../helpers/helper";

const credentials = require("../fixtures/credentials.json");
const mainPage = new MainPage();
const loginPage = new LoginPage();

Given("I navigate to the main page", () => {
  mainPage.navigate();
});

When("I click the sign in button", () => {
  mainPage.clickSignInButton();
});

When("I fill the login form with valid credentials", () => {
  loginPage.fillSignInForm(credentials.email, credentials.password);
});

When("I fill the login form with invalid email", () => {
  loginPage.fillSignInForm(user.email, credentials.password);
});

When("I fill the login form with invalid password", () => {
  loginPage.fillSignInForm(credentials.email, user.password);
});

When("I submit the login form", () => {
  loginPage.submitLoginForm();
});

Then("I should see the user avatar", () => {
  cy.get(mainPage.userAvatar).should("be.visible");
});

Then("I should see the your feed tab", () => {
  cy.get(mainPage.yourFeedTab).should("be.visible");
});

Then("I should see the login URL", () => {
  cy.url().should("include", "/login");
});

Then("I should see an error message", () => {
  cy.get(loginPage.errorMessage).should(
    "contain",
    "email or password is invalid"
  );
});
