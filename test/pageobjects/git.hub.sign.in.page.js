class SignInPage {

    get userEmail () { return 'pokeyrover1@gmail.com' }
    get userPassword () { return 'tgyhuj567' }
    get username () { return 'pokeyroveer' }
    get signInUrl () { return 'https://github.com/login' }
    get emailInput () { return $('#login_field') }
    get passInput () { return $('#password') }
    get signInBtn () { return $('.btn-primary') }
    get forgotPassLink () { return $('.label-link') }
    get welcomeText () { return $('.auth-form-header h1') }

    async isSignInPage () {
        await browser.pause(2000)
        await expect(browser).toHaveUrl(this.signInUrl)
        await expect(this.emailInput).toBeDisplayed()
        await expect(this.passInput).toBeDisplayed()
        await expect(this.forgotPassLink).toBeDisplayed()
    }

    async addEmail () {
        await this.emailInput.addValue(this.userEmail)
    }

    async addPassword () {
        await this.passInput.addValue(this.userPassword)
    }

    async signInBtnSubmit () {
        await this.signInBtn.click()
    }

    async clickOnForgotPassLink () {
        await this.forgotPassLink.click()
    }

}

module.exports = new SignInPage
