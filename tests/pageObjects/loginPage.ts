
const Page = require('./page');

class LoginPage extends Page  {

    get emailField() { return $("input[name='email']");}
    get passwordField() { return $("input[name='password']") }
    get submitButton() { return $("button[type='submit']") }
    get wrongCredsErrorMessage() { return $("#root div > span") }

    visit () {
        super.openPage('https://creator.staging.vidsy.co');
    }

    logIn (email: string, password: string) {
        this.emailField.waitForDisplayed();
        this.emailField.setValue(email);
        this.passwordField.waitForDisplayed();
        this.passwordField.setValue(password);
        this.submitButton.click();
    }
}

export default new LoginPage();
