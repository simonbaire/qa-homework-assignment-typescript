import { assert } from "chai";
import  LoginPage from "./pageObjects/loginPage";
import  LiveBriefsPage from "./pageObjects/liveBriefsPage";
import  NavigationBar from "./pageObjects/navigationBar";

describe("Login page", () => {
  before(() => {
    browser.setWindowSize(1920, 1080);
    LoginPage.visit(); 
  });
  
  it("should not let you log in with an invalid password", () => {
    LoginPage.logIn(process.env.VIDSY_EMAIL,"password1_lol!" );
    assert.equal(LoginPage.wrongCredsErrorMessage.getText(), "Wrong email or password.");
    assert.equal(browser.getUrl(), "https://creator.staging.vidsy.co/login");
  });

  it("should let you log in with a valid password", () => {
    LoginPage.logIn(process.env.VIDSY_EMAIL,process.env.VIDSY_PASSWORD)
    NavigationBar.navBarContainer.waitForDisplayed();
    assert.equal(browser.getUrl(), "https://creator.staging.vidsy.co/live-briefs");
    assert.isTrue(NavigationBar.avatarImage.isDisplayed());
    assert.isTrue(LiveBriefsPage.liveBriefs.isDisplayed());
  });
});