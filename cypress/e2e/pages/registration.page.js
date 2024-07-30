export class RegistrationPage {
  userNameField = 'input[name="username"]';
  emailField = 'input[name="email"]';
  passwordField = 'input[name="password"]';
  registerSubmitButton = 'button[type="submit"]';
  errorMessage = ".error-messages";

  fillSignUpForm(user) {
    cy.get(this.userNameField).type(user.username);
    cy.get(this.emailField).type(user.email);
    cy.get(this.passwordField).type(user.password);
  }

  submitRegisterForm() {
    cy.get(this.registerSubmitButton).click();
  }
}
