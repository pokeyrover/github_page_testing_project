const faker = require('@faker-js/faker').faker

let randomEmail = faker.internet.email()

class MainPage {

    get emailInput () { return $('#user_email') }
    get upperSignUpBtn () { return $('button.btn-signup-mktg') }
    get lowerSignUpBtn () { return $('.btn-signup-mktg.mr-2') }
    get mainUrl () { return 'https://github.com/'}
    get randomEmail () { return randomEmail }
    get signInBtn () { return $('[href="/login"]') }
    
    get productDropdown () { return $('.//li[1]//summary') }
    get productDropMenu () { return $('.d-lg-flex.list-style-none li:nth-child(1) .dropdown-menu') }

    get exploreDropdown () { return $('.//li[4]//summary') }
    get exploreDropMenu () { return $('.d-lg-flex.list-style-none li:nth-child(4) .dropdown-menu') }
    
    get pricingDropdown () { return $('.//li[6]//summary') }
    get pricingDropMenu () { return $('.d-lg-flex.list-style-none li:nth-child(6) .dropdown-menu') }
    get planBtnInDropMenu () { return $('.dropdown-menu [href="/pricing"]') }

    get marketplaceBtn () { return $('[href="/marketplace"]') }
    
    get enterpriseStartFree () { return $('.btn-muted-mktg.mb-3') }

    get careersLinc () { return $('[href="/about/careers"]') }

    async open () {
        await browser.url(this.mainUrl)
    }

    async addRandomEmail () {
        await this.emailInput.addValue(this.randomEmail)
        console.log(this.randomEmail)
    }

    async upperSignUpBtnSubmit () {
        await this.upperSignUpBtn.click()
    }

    async lowerSignUpBtnSubmit () {
        await this.lowerSignUpBtn.scrollIntoView({block: 'center'})
        await this.lowerSignUpBtn.click()
    }

    async signInBtnSubmit () {
        await this.signInBtn.click()
    }

    async productDropMenuHaveToDisplayed () {
        await this.DropMenuIsDisplayed(this.productDropMenu)
    }

    async exploreDropMenuHaveToDisplayed () {
        await this.DropMenuIsDisplayed(this.exploreDropMenu)
    }

    async pricingDropMenuHaveToDisplayed () {
        await this.DropMenuIsDisplayed(this.pricingDropMenu)
    }

    async DropMenuIsDisplayed (dropMenu) {
        await browser.waitUntil(async () => {
            return dropMenu.isDisplayedInViewport()
        },
        {
            timeoutMsg: 'Dropdown menu is not displayed'
        })
    }
}

module.exports = new MainPage
