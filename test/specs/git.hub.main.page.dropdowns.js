const mainPage = require('../pageobjects/git.hub.main.page')


describe('Dropdowns should be displayed on mouse hovering', () => {
    it('Producn dropdown menu should be displayed on mouse hovering', async () => {
        await mainPage.open()
        await mainPage.productDropdown.moveTo()
        await mainPage.productDropMenuHaveToDisplayed()
    })

    xit('Explore dropdown menu should be displayed on mouse hovering', async () => {
        await mainPage.exploreDropdown.moveTo()
        await mainPage.exploreDropMenuHaveToDisplayed()
    })

    xit('Pricing dropdown menu should be displayed on mouse hovering', async () => {
        await mainPage.pricingDropdown.moveTo()
        await mainPage.pricingDropMenuHaveToDisplayed()
    })
})
