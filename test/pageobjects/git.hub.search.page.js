class SearchPage {

    get typeScriptBtn () { return $('.filter-list li:nth-child(2) .filter-item') }
    get searhcResultArray () { return $$('a.v-align-middle') }
    
    async openResultLink(resultNum=1) {
        await this.searhcResultArray[resultNum - 1].click()
    }

    async filterLang (btn) {
        let btnName = await btn.getText()
        btnName = await btnName.split('\n')[1]
        await btn.click()
        await browser.waitUntil(async () => {
            const pageUrl = await browser.getUrl()
            return await pageUrl.includes(btnName)
        },
        {
            timeout: 5000,
            interval: 50,
            timeoutMsg: "Language filter has not changed"
        })
    }
}

module.exports = new SearchPage