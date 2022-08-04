class WdriverioRepPage {

    get wdriverRepUrl () { return 'https://github.com/webdriverio/webdriverio' }

    async isWdriverRepPage () {
        await expect(browser).toHaveUrlContaining('webdriverio')
    }
}

module.exports = new WdriverioRepPage