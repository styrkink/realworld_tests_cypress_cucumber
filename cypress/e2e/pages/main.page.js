export class MainPage {
    signUpButton = ":nth-child(3) > .nav-link";
    signInButton = ":nth-child(2) > .nav-link";
    userAvatar = ".user-pic";
    yourFeedTab = ".feed-toggle > .nav > :nth-child(1) > .nav-link";
    globalFeedTab = ".feed-toggle > .nav > :nth-child(2) > .nav-link";
    favouriteButton = ":nth-child(2) > .article-meta > .btn";
    tagList = ".tag-list";
    articlePreview = ".article-preview";
  
    navigate() {
      cy.visit("/");
    }
  
    clickSignUpButton() {
      cy.get(this.signUpButton).click({ force: true });
    }
  
    clickSignInButton() {
      cy.get(this.signInButton).click({ force: true });
    }
  
    addToFavorite() {
      cy.get(this.favouriteButton).click({ force: true });
    }
  
    openGlobalFeedTab() {
      cy.get(this.globalFeedTab).click({ force: true });
    }
  
    goToProfile() {
      cy.get(this.userAvatar).click({ force: true });
    }
  
    clickRandomTag() {
      cy.get(this.tagList).within(() => {
        cy.get("a").then(($tags) => {
          const randomIndex = Math.floor(Math.random() * $tags.length);
          const selectedTag = $tags[randomIndex];
          cy.wrap(selectedTag).click();
          cy.wrap(selectedTag).invoke("text").as("tagName");
        });
      });
    }
  
    verifyActiveTag() {
      cy.get("@tagName").then((tagName) => {
        const cleanedTagName = tagName.trim();
        cy.get(".nav-link")
          .contains(cleanedTagName)
          .should("have.class", "active");
      });
    }
  
    verifyFilteredArticles() {
      cy.get("@tagName").then((tagName) => {
        const cleanedTagName = tagName.trim();
        cy.get(this.articlePreview).should("have.length.greaterThan", 0);
        cy.get(this.articlePreview).each(($el) => {
          cy.wrap($el).within(() => {
            cy.get(this.tagList).contains(cleanedTagName).should("exist");
          });
        });
      });
    }
}