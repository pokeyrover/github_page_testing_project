const mainPage = require('../pageobjects/git.hub.main.page')
const plansPage = require('../pageobjects/git.hub.plans.page')
const joinPlansPage = require('../pageobjects/git.hub.join.plans.page')
const explorePage = require('../pageobjects/git.hub.explore.page')
const topicsPage = require('../pageobjects/git.hub.topics.page')


describe('Go to the dropdown items', () => {
     it('Go to join plane page from main page after choosing a free plan', async () => {
        await mainPage.open()
        await mainPage.marketplaceBtn.moveTo()                  //Dropdowns menu is displayed only after holding mouse over another element in header
        await mainPage.pricingDropdown.moveTo()
        await mainPage.planBtnInDropMenu.click()
        await plansPage.isPlanePage()
        await plansPage.joinFreePlanBtn.click()
        await joinPlansPage.isJoinPlanePage()
        await joinPlansPage.usernameInput.addValue(joinPlansPage.randomUsername)
        await joinPlansPage.emailInput.addValue(joinPlansPage.randomEmail)
        await joinPlansPage.passInput.addValue(joinPlansPage.randomPass)
        await joinPlansPage.newsletterCheckbox.click()
     })
    
    it('Go to topics page after explore page from plans page', async () => {
        await plansPage.open()
        await plansPage.marketplaceBtn.moveTo()                 //Dropdowns menu is displayed only after holding mouse over another element in header
        await plansPage.exploreDropdown.moveTo()
        await plansPage.exploreGitHubBtn.click()
        await explorePage.topicsBtn.click()
        await topicsPage.topicsTitleisDisplayed()
    })
})
