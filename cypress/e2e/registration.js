import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "./pages/main.page";
import { RegistrationPage } from "./pages/registration.page";
import { user } from "../helpers/helper";

const mainPage = new MainPage();
const registrationPage = new RegistrationPage();

Given("I open the main page", () => {
  mainPage.navigate();
});

When("I click the sign-up button", () => {
  mainPage.clickSignUpButton();
});

When("I fill the registration form with valid data", () => {
  registrationPage.fillSignUpForm(user);
});

When("I clear the username field", () => {
  cy.get(registrationPage.userNameField).clear();
});

When("I clear the email field", () => {
  cy.get(registrationPage.emailField).clear();
});

When("I clear the password field", () => {
  cy.get(registrationPage.passwordField).clear();
});

When("I submit the registration form", () => {
  registrationPage.submitRegisterForm();
});

Then("I should see the user avatar", () => {
  cy.get(mainPage.userAvatar).should("be.visible");
});

Then('I should see the "Your Feed" tab', () => {
  cy.get(mainPage.yourFeedTab).should("be.visible");
});

Then("I should see the URL contain {string}", (urlPart) => {
  cy.url().should("include", urlPart);
});

Then("I should see the error message {string}", (message) => {
  cy.get(registrationPage.errorMessage).should("contain", message);
});
