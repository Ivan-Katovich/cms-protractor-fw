var pageFactory = require('./../support/pages/pageFactory');
var browserUtils = require('./../support/helpers/browserUtils');
//var SuperHomePage = require('./../../support/pages/superHomePage');
//var superHomePage = new SuperHomePage(element(by.css('body')));

var steps = function(){

    this.When(/^I select '(.+)' search gadget$/, function (channel,callback) {
        pageFactory.currentPage.initSearchGadget(channel)
            .then(callback);
    });

    this.When(/^I select '(.+)'(?:st|th|nd|rd) option in the '(.+)' dropdown field$/, function (position,field,callback) {
        pageFactory.currentPage.selectPageDropdownByPosition(field,position)
            .then(callback);
    });

    this.When(/^I complete '(.+)' field with value '(.+)'$/, function (field,value,callback) {
        pageFactory.currentPage.completePageFieldByValue(field,value)
            .then(callback);
    });

    this.When(/^I click on search button$/, function (callback) {
        pageFactory.currentPage.submitPageForm()
            .then(callback);
    });

    this.Then(/^the title should be '(.+)'$/, function (expText,callback) {
        //expect(element(by.css('.hero-section__heading-title')).getText()).to.eventually.equal('Leave London111 behind');
        pageFactory.currentPage.getTitleText()
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

    this.Then(/^the main logo should be visible$/, function (callback) {
        pageFactory.currentPage.isMainLogoVisible()
            .then(function(isVisible){
                expect(isVisible).to.be.true;
                callback();
            });
    });

    this.Then(/^say hello world$/, function (callback) {
        pageFactory.currentPage.sayHello()
            .then(function(text){
                expect(text).to.equal('Leave London behind');
                callback();
            });
    });

    this.Then(/^car-hire driver's age text should be '(.+)'$/, function (expText,callback) {
        pageFactory.currentPage.getCarHireDriversAgeText()
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

    this.Then(/^label of the '(.+)' field should be '(.+)'$/, function (field,expText,callback) {
        pageFactory.currentPage.getPageFieldLabel(field)
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });



};

module.exports = steps;