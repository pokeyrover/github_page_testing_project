const assert = require('assert')

class UserMainPage {

    get userMainPageUrl () { return 'https://github.com/' }
    get userName () { return 'pokeyroveer' }
    get profileLable () { return $('[aria-label="View profile and more"]') }
    get userNameInProfileMenu () { return $('.user-profile-link .css-truncate-target') }
    get welcomeText () { return $('.h1.lh-condensed') }

    async isUserMainPage () {
        await browser.pause(2000)
        await expect(browser).toHaveUrl(this.userMainPageUrl)
        await this.isCorrectUserName()
        await this.welcomeTextIsPresent()
    }

    async welcomeTextIsPresent () {
        assert.strictEqual(await this.welcomeText.getText(), 
        'The home for all developers — including you.', 
        'Welcome text on user main page is not equal to correct welcome text')
    }

    async isCorrectUserName () {
        await this.clickProfileMenu()
        assert.strictEqual(await this.userNameInProfileMenu.getText(), this.userName, 
        'User name in profile manu is not equal to current user name')
        await this.clickProfileMenu()
    }

    async clickProfileMenu () {
        await this.profileLable.click()
    }
}

module.exports = new UserMainPage
