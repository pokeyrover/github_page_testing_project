class PlansPage {

    get planUrl () { return 'https://github.com/pricing' }
    get pageTitle () { return $('h1.h2-mktg') }
    
    get pricingPlanFree () { return $('.gutter-lg-condensed :nth-child(1) .js-pricing-plan') }
    get joinFreePlanBtn () { return $('.d-block.btn-muted-mktg[href*="free"]') }

    get pricingPlanTeam () { return $('.gutter-lg-condensed :nth-child(2) .js-pricing-plan') }
    
    get pricingPlanEnterprise () { return $('.gutter-lg-condensed :nth-child(3) .js-pricing-plan') }

    get exploreDropdown () { return $('.//header//li[4]//summary') }
    get marketplaceBtn () { return $('[href="/marketplace"]') }
    get exploreGitHubBtn () { return $('[href="/explore"]') }

    async open () {
        await browser.url(this.planUrl)
    }

    async isPlanePage () {
        await expect(browser).toHaveUrl(this.planUrl)
        await this.isPlanePageTitle()
        await this.isPricePlaneDisplayed(this.pricingPlanFree)
        await this.isPricePlaneDisplayed(this.pricingPlanTeam)
        await this.isPricePlaneDisplayed(this.pricingPlanEnterprise)
    }

    async isPlanePageTitle () {
        await browser.waitUntil(async () => (
            (await this.pageTitle.getText()) === 'Choose the plan that’s right for you.'
        ),
        {
            timeoutMsg: 'Page title is not equal to correct title\n Expected value: ' + 'Choose the plan that’s right for you.' + '\n Present value: ' + (await this.pageTitle.getText())

        })
    }

    async isPricePlaneDisplayed (planElem) {
        await browser.waitUntil(async () => {
            return await planElem.isDisplayed()
        },
        {
            timeoutMsg: 'Price plane is not displayed'
        })
    }
}

module.exports = new PlansPage
