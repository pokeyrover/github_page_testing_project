const mainPage = require('../pageobjects/git.hub.main.page')
const aboutCareersPage = require('../pageobjects/git.hub.about.careers.page')


describe('Log elements text', () => {
    it('Print elements labels in console in open position part after opening the about careers page from main page', async () => {
        await mainPage.open() 
        await mainPage.careersLinc.scrollIntoView()
        await mainPage.careersLinc.click()
        await aboutCareersPage.openPositionsLink.click()
        await aboutCareersPage.logElemText(aboutCareersPage.businessSysLable)
        await aboutCareersPage.logElemText(aboutCareersPage.designLable)
        await aboutCareersPage.logElemText(aboutCareersPage.engineeringLable)
        await aboutCareersPage.logElemText(aboutCareersPage.finanseLable)
        await aboutCareersPage.logElemText(aboutCareersPage.humanResLable)
        await aboutCareersPage.logElemText(aboutCareersPage.legalLable)

        await aboutCareersPage.logElemText(aboutCareersPage.operationsLable)
        await aboutCareersPage.logElemText(aboutCareersPage.salesLable)
        await aboutCareersPage.logElemText(aboutCareersPage.securityLable)
        await aboutCareersPage.logElemText(aboutCareersPage.supportLable)
    })
})