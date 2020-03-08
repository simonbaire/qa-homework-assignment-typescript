import { assert } from "chai";
import  LoginPage from "./pageObjects/loginPage";
import  SettingsPage from "./pageObjects/settingsPage";
import  NavigationBar from "./pageObjects/navigationBar";

describe("Settings page", () => {
  before(() => {
    browser.setWindowSize(1920, 1080);
    LoginPage.visit(); 
  });
  
  it("should let you edit first and last name" , () => {
    LoginPage.logIn(process.env.VIDSY_EMAIL,process.env.VIDSY_PASSWORD);
    NavigationBar.goToSettingsPage();
    
    const firstName = `Simon ${Date.now()}`;
    const LastName = `Baire ${Date.now()}`;
    
    SettingsPage.enterFirstName(firstName);
    SettingsPage.enterLastName(LastName);
    SettingsPage.saveButton.click();

    assert.equal(SettingsPage.firstNameField.getValue(), firstName);
    assert.equal(SettingsPage.lastNameField.getValue(), LastName);
  });
});