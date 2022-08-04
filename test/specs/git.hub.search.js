const topicsPage = require('../pageobjects/git.hub.topics.page.js')
const searchPage = require('../pageobjects/git.hub.search.page')
const wdriverioRepPage = require('../pageobjects/git.hub.wdriverio.repository')


describe('Searching from different pages', () => {
    it('Searching from topics page', async () => {
        await topicsPage.open()
        await topicsPage.searchInput.addValue('webdriverio')
        await topicsPage.pressEnterKey()
        await searchPage.filterLang(searchPage.typeScriptBtn)
        await searchPage.openResultLink(resultNum=1)
        await wdriverioRepPage.isWdriverRepPage()
    })
})
