import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { article } from "../helpers/helper";
import { ArticlePage } from "./pages/article.page";
import { MainPage } from "./pages/main.page";
import { LoginPage } from "./pages/login.page";

const credentials = require("../fixtures/credentials.json");
const mainPage = new MainPage();
const loginPage = new LoginPage();
const articlePage = new ArticlePage();

Given("I am logged in", () => {
  mainPage.navigate();
  mainPage.clickSignInButton();
  loginPage.fillSignInForm(credentials.email, credentials.password);
  loginPage.submitLoginForm();
});

When("I click the {string} button", (buttonName) => {
  if (buttonName === "New article") {
    mainPage.createNewArticle();
  } else if (buttonName === "Publish article") {
    articlePage.publishArticle();
  }
});

When(
  "I fill the article {string}, {string} and {string} fields",
  (field1, field2, field3) => {
    articlePage.fillArticleForm(article);

    if (field1 !== "title" && field2 !== "title" && field3 !== "title") {
      cy.get(articlePage.articleTitleField).clear();
    }
    if (field1 !== "summary" && field2 !== "summary" && field3 !== "summary") {
      cy.get(articlePage.articleSummaryField).clear();
    }
    if (field1 !== "description" && field2 !== "description" && field3 !== "description") {
      cy.get(articlePage.articleDescriptionField).clear();
    }
    if (field1 !== "tag" && field2 !== "tag" && field3 !== "tag") {
      cy.get(articlePage.articleTagField).clear();
    }
  }
);

Then("the article is not published", () => {
  cy.url().should("include", "/editor");
});

Then("the article is published", () => {
  cy.url().should("include", "/article");
  cy.get("a").contains(" Edit Article").should("be.visible");
  cy.get("button").contains(" Delete Article").should("be.visible");
});

Then("I delete article", () => {
  cy.get("button").contains(" Delete Article").click();
});
