const mainPage = require('../pageobjects/git.hub.main.page')
const enterprisePlanPage = require('../pageobjects/git.hub.enterptise.plan.page')
const joinPlansPage = require('../pageobjects/git.hub.join.plans.page')
const enterpriseTrialPage = require('../pageobjects/git.hub.enterprise.trial.page')


describe('Go to enterprise registration page', () => {
    it('Go to enterprise cloud registration page from main page', async () => {
        await mainPage.open()
        await mainPage.enterpriseStartFree.scrollIntoView()
        await mainPage.enterpriseStartFree.click()
        await enterprisePlanPage.enterpriseCloudBtn.click()
        await joinPlansPage.usernameInput.addValue(joinPlansPage.randomUsername)
        await joinPlansPage.emailInput.addValue(joinPlansPage.randomEmail)
        await joinPlansPage.passInput.addValue(joinPlansPage.randomPass)
    })

    it('Go to enterprise server registration page from the enterprise cloud registration page', async () => {
        await browser.back()
        await enterprisePlanPage.enterpriseServerBtn.click()
        await enterpriseTrialPage.nameInput.addValue(enterpriseTrialPage.randomName)
        await enterpriseTrialPage.companyInput.addValue(enterpriseTrialPage.randomCompany)
        await enterpriseTrialPage.emailInput.addValue(enterpriseTrialPage.randomEmail)
        await enterpriseTrialPage.phoneInput.addValue(enterpriseTrialPage.randomPhone)
        await enterpriseTrialPage.randomInstallBtn.click()
        await enterpriseTrialPage.questRadioBtnYes.click()
        await enterpriseTrialPage.questionTextarea.addValue(enterpriseTrialPage.randomText)
        await enterpriseTrialPage.acceptTermsCheckbox.click()
    })
})