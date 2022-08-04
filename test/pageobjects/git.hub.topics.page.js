

class TopicsPage {
    
    get topicsUrl () { return 'https://github.com/topics' }
    get topicsTitle () { return $('h1.h1') }
    get searchInput () { return $('input.form-control') }

    async open() {
        await browser.url(this.topicsUrl)
    }

    async topicsTitleisDisplayed () {
        await expect(this.topicsTitle).toBeDisplayed()
        await expect(this.topicsTitle).toHaveTextContaining('Topics')
    }

    async pressEnterKey () {
        browser.keys(["Enter"])
    }
}

module.exports = new TopicsPage
