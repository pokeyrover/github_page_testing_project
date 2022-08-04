const assert = require('assert')
const randomEmail = require('./git.hub.main.page').randomEmail

class SignUpPage{

    get signUpUrl () { return 'https://github.com/signup'}
    get welcomeTextElem () { return $('span.text-mono') }
    get emailInput () { return $('#email') }
    get randomEmail () { return randomEmail}

    async isSignUpPage () {
        browser.pause(4000)
        await expect(browser).toHaveUrlContaining(this.signUpUrl)
        await expect(this.welcomeTextElem).toHaveTextContaining('Welcome to GitHub!')
    }

    async enteredEmailIsPresent () {
        let emailInputText = await this.emailInput.getValue()
        assert.strictEqual(this.randomEmail, emailInputText, 
            'Email in email field is not equal to entered email before')
    }
}

module.exports = new SignUpPage