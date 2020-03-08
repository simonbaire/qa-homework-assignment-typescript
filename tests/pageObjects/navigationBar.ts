class NavigationBar   {

    get navBarContainer() { return $("#navigationContainer");}
    get avatarImage() { return $("#navigationUserAvatarImage");}
    get settingsLink() { return $("#navigationProfileLink");}

    goToSettingsPage () {
        this.navBarContainer.waitForDisplayed();
        this.avatarImage.click();
        this.settingsLink.click();
    }

}

export default new NavigationBar();
