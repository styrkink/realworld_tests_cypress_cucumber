import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "./pages/main.page";

const mainPage = new MainPage();

Given("I open the main page", () => {
  mainPage.navigate();
});

When("I click a random tag", () => {
  mainPage.clickRandomTag();
});

Then("the tag should be active", () => {
  mainPage.verifyActiveTag();
});

Then("the articles should be filtered by the selected tag", () => {
  mainPage.verifyFilteredArticles();
});
