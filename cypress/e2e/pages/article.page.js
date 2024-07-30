export class ArticlePage {
  articleTitleField = 'input[placeholder="Article Title"]';
  articleSummaryField = "input[placeholder=\"What's this article about?";
  articleDescriptionField =
    'textarea[placeholder="Write your article (in markdown)"]';
  articleTagField = 'input[placeholder="Enter tags"]';
  publishArticleButton = 'button[type="button"]';

  fillArticleForm(article) {
    cy.get(this.articleTitleField).type(article.title);
    cy.get(this.articleSummaryField).type(article.summary);
    cy.get(this.articleDescriptionField).type(article.description);
    cy.get(this.articleTagField).type(article.tag);
  }

  publishArticle() {
    cy.get(this.publishArticleButton).click();
  }
}
