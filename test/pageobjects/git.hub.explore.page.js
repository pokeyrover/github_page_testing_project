class ExplorePage {

    get exploreUrl () { return 'https://github.com/explore' }
    get topicsBtn () { return $('.js-selected-navigation-item[href="/topics"]') }
}

module.exports = new ExplorePage