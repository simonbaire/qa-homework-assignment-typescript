class SettingsPage {

    get firstNameField() { return $("input[name='firstName']");}
    get lastNameField() { return $("input[name='lastName']");}
    get saveButton() { return $("#settingsSubmitButton");}
   
    enterFirstName (firstName: string) {
        this.firstNameField.waitForDisplayed();
        this.firstNameField.setValue(firstName);
    }

    enterLastName (lastName: string) {
        this.lastNameField.scrollIntoView();
        this.lastNameField.waitForDisplayed();
        this.lastNameField.setValue(lastName);
    }
}

export default new SettingsPage();
