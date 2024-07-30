export class ProfilePage {
  favoriteTab = ".articles-toggle > .nav > :nth-child(2) > .nav-link";
  articlePreview = ".article-preview";

  openFavoriteTab() {
    cy.get(this.favoriteTab).click();
  }
}
