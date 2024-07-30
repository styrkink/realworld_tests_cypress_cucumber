export class LoginPage {
  emailLoginField = 'input[name="email"]';
  passwordLoginField = 'input[name="password"]';
  loginSubmitButton = 'button[type="submit"]';
  errorMessage = ".error-messages";

  fillSignInForm(email, password) {
    cy.get(this.emailLoginField).type(email);
    cy.get(this.passwordLoginField).type(password);
  }

  submitLoginForm() {
    cy.get(this.loginSubmitButton).click();
  }
}
