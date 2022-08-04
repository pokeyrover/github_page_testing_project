const mainPage = require('../pageobjects/git.hub.main.page')
const signUpPage = require('../pageobjects/git.hub.sign.up.page')
const userMainPage = require('../pageobjects/git.hub.user.main.page')
const signInPage = require('../pageobjects/git.hub.sign.in.page')
const passResetPage = require('../pageobjects/git.hub.pass.reset.page')


describe('User login cases', () => {
    it('Go to registration page by clicking upper button', async () => {
        await mainPage.open()
        await mainPage.addRandomEmail()
        await mainPage.upperSignUpBtnSubmit()
        await signUpPage.isSignUpPage()
        await signUpPage.enteredEmailIsPresent()
    })

    it('Go to registration page by clicking lower button', async () => {
        await mainPage.open()
        await mainPage.lowerSignUpBtnSubmit()
        await signUpPage.isSignUpPage()
    })

    it('Sing in to the previously created profile from main page', async () => {
        await mainPage.open()
        await mainPage.signInBtnSubmit()
        await signInPage.isSignInPage()
        await signInPage.addEmail()
        await signInPage.addPassword()
        await signInPage.signInBtnSubmit()
        await userMainPage.isUserMainPage()
    })

    it('Send password reset request without captcha confirmation in the password reset page', async () => {
        await mainPage.open()
        await mainPage.signInBtnSubmit()
        await signInPage.isSignInPage()
        await signInPage.clickOnForgotPassLink()
        await passResetPage.isPassResetPage()
        await passResetPage.sendPassBtnShouldBeDisabled()
    })

    it('Send password reset request after filling in the email field without captcha confirmation in the password reset page', async () => {
        await mainPage.open()
        await mainPage.signInBtnSubmit()
        await signInPage.isSignInPage()
        await signInPage.clickOnForgotPassLink()
        await passResetPage.isPassResetPage()
        await passResetPage.addEmail()
        await passResetPage.sendPassBtnShouldBeDisabled()
    })
})
