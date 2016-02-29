'use strict';
/*jshint -W030 */

var pageFactory = require('./../support/pages/pageFactory');
//var browserUtils = require('./../support/helpers/browserUtils');
//var SuperHomePage = require('./../../support/pages/superHomePage');
//var superHomePage = new SuperHomePage(element(by.css('body')));

var steps = function(){

    this.When(/^I select '(.+)' search gadget$/, function(channel,callback) {
        pageFactory.currentPage.clickSearchIfMobile()
            .then(function(){
                pageFactory.currentPage.initSearchGadget(channel);
            })
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

    this.Then(/^car-hire drivers age text should be '(.+)'$/, function (expText,callback) {
        pageFactory.currentPage.getCarHireDriversAgeText()
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

};

module.exports = steps;