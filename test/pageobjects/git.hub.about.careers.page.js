class AboutCareersPage {

    get openPositionsLink () { return $('[href="#positions"]') }

    get businessSysLable () { return $('#business-systems .text-left') }
    get designLable () { return $('#design .text-left') }
    get engineeringLable () {return $('#engineering .text-left') }
    get finanseLable () { return $('#finance .text-left') }
    get humanResLable () { return $('#human-resources .text-left') }
    get legalLable () { return $('#legal .text-left') }

    get operationsLable () { return $('#operations .text-left') }
    get productLable () { return $('#product .text-left')}
    get salesLable () { return $('#sales .text-left') }
    get securityLable () { return $('#security .text-left') }
    get supportLable () { return $('#support .text-left') }


    async logElemText (elem) {
        const element = await elem
        const text = await element.getText()
        console.log("Label text: " + await text)
    }
}

module.exports = new AboutCareersPage