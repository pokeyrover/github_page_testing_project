const faker = require('@faker-js/faker').faker

class EnterpriseTrialPage {

    get enterpriseTrialUrl () { return 'https://enterprise.github.com/trial' }
    
    get nameInput () { return $('#contact_request_name') }
    get companyInput () { return $('#contact_request_organization_name') }
    get emailInput () { return $('#contact_request_email') }
    get phoneInput () { return $('#contact_request_phone') }
    get installTypeRadioBtn () { return $$('#contact-form-linkto  .js-request-type') }
    get questRadioBtnYes () { return $('#questions_yes') }
    get questionTextarea () { return $('#questions-list') }
    get acceptTermsCheckbox () { return $('#contact_request_agreed_to_terms') }

    get randomName () { return faker.name.findName() }
    get randomCompany () { return faker.company.companyName() }
    get randomEmail () { return faker.internet.email() }
    get randomPhone () { return faker.phone.number() }
    get randomInstallBtn () { return $('#contact-form-linkto :nth-child(' + (Math.floor(Math.random() * 5)).toString() + ')  .js-request-type') }
    get randomText () { return faker.lorem.paragraph() }

    async randomRadioBtnElem (elems) {
        let index = await Math.floor(Math.random() * await elems.length)
        return await elems[index]
    }

    async randInstBtn () {
        const randBtn = await this.randomRadioBtnElem(this.installTypeRadioBtn)
        return randBtn
    }
}

module.exports = new EnterpriseTrialPage