const assert = require('assert')

class PassResetPage {

    get PassResetUrl () { return 'https://github.com/password_reset' }
    get emailInput () { return $('#email_field') }
    get sendPassBtn () { return $('.btn-primary') }
    get userEmail () { return 'pokeyrover1@gmail.com'}

    async isPassResetPage () {
        await browser.pause(2000)
        await expect(browser).toHaveUrl(this.PassResetUrl)
        await expect(this.emailInput).toBeDisplayed()
        await expect(this.sendPassBtn).toBeDisplayed()
    }

    async sendPassBtnShouldBeDisabled () {
        await expect(this.sendPassBtn).toBeDisabled()
    }

    async addEmail () {
        await this.emailInput.addValue(this.userEmail)
    }
}

module.exports = new PassResetPage
