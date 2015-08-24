var pageFactory = require('./../../support/pages/pageFactory');
//var SuperHomePage = require('./../../support/pages/superHomePage');
//var superHomePage = new SuperHomePage(element(by.css('body')));

var steps = function(){

    this.When(/^I navigate to the Home page$/, function (callback) {
        console.log('I am in ==============='+process.cwd());
        browser.get(browser.baseUrl).then(callback);
    });

    this.Then(/^the title should have correct text$/, function (callback) {
        console.log(' all right');
        //expect(element(by.css('.hero-section__heading-title')).getText()).to.eventually.equal('Leave London111 behind');
        element(by.css('.hero-section__heading-title')).getText().then(function(text){
            console.log(text);
            expect(text).to.equal('Leave London behind');
            callback();
        });
    });

    this.Then(/^the main logo should be visible$/, function (callback) {
        pageFactory.getPage('super-home-page').isMainLogoVisible()
            .then(function(isVisible){
                console.log(isVisible);
                expect(isVisible).to.equal(true);
                callback();
            });
    });

};

module.exports = steps;