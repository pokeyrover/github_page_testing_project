const faker = require('@faker-js/faker').faker

class joinPlansPage {
    
    get joinPlanUrl () { return 'https://github.com/join' }
    get joinPageTitle () { return $('.text-mono.text-center') }
    
    get usernameInput () { return $('#user_login') }
    get emailInput () { return $('#user_email') }
    get passInput () { return $('#user_password') }
    get newsletterCheckbox () { return $('#all_emails') }
    get signUpBtn () { return $('#signup_button')}

    get randomUsername () { return faker.internet.userName() }
    get randomEmail () { return faker.internet.email() }
    get randomPass () { return faker.internet.password() }

    async isJoinPlanePage () {
        await expect(browser).toHaveUrlContaining(this.joinPlanUrl)
        await this.pageTitleIsDisplayed(this.joinPageTitle)
        await expect(this.usernameInput).toBeExisting
    }

    async pageTitleIsDisplayed (pageTitle) {
        await browser.waitUntil(async () => 
        await pageTitle.isDisplayed(),
        {
            timeoutMsg: 'Page title is not displayed'
        })
    }
}

module.exports = new joinPlansPage