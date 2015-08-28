var pageFactory = require('./../support/pages/pageFactory');
//var SuperHomePage = require('./../../support/pages/superHomePage');
//var superHomePage = new SuperHomePage(element(by.css('body')));

var steps = function(){

    var superHomePage = pageFactory.getPage('super-home-page');

    this.When(/^I navigate to the Home page$/, function (callback) {
        superHomePage.navigateTo()
            .then(callback);
    });

    this.When(/^I select '(.+)' search gadget$/, function (channel,callback) {
        superHomePage.initSearchGadget(channel)
            .then(callback);
    });

    this.When(/^I select '(.+)'(?:st|th|nd|rd) option in the '(.+)' dropdown field$/, function (position,field,callback) {
        superHomePage.selectPageDropdownByPosition(field,position)
            .then(callback);
    });

    this.When(/^I complete '(.+)' field with value '(.+)'$/, function (field,value,callback) {
        superHomePage.completePageFieldByValue(field,value)
            .then(callback);
    });

    this.Then(/^the title should be '(.+)'$/, function (expText,callback) {
        //expect(element(by.css('.hero-section__heading-title')).getText()).to.eventually.equal('Leave London111 behind');
        superHomePage.getTitleText()
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

    this.Then(/^the main logo should be visible$/, function (callback) {
        superHomePage.isMainLogoVisible()
            .then(function(isVisible){
                expect(isVisible).to.be.true;
                callback();
            });
    });

    this.Then(/^say hello world$/, function (callback) {
        superHomePage.sayHello()
            .then(function(text){
                expect(text).to.equal('Leave London behind');
                callback();
            });
    });

    this.Then(/^car-hire driver's age text should be '(.+)'$/, function (expText,callback) {
        superHomePage.getCarHireDriversAgeText()
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

    this.Then(/^label of the '(.+)' field should be '(.+)'$/, function (field,expText,callback) {
        superHomePage.getPageFieldLabel(field)
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });



};

module.exports = steps;