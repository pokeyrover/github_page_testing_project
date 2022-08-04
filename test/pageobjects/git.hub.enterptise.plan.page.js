class EnterprisePlanPage {

    get enterprisePlanUrl () { return 'https://github.com/organizations/enterprise_plan' }
    get enterpriseCloudBtn () { return $('.flex-items-stretch .col-md-6:nth-child(1)') }
    get enterpriseServerBtn () { return $('.flex-items-stretch .col-md-6:nth-child(2)') }
}

module.exports = new EnterprisePlanPage