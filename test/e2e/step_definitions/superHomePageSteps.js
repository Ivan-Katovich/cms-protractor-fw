'use strict';
/*jshint -W030 */

var steps = function(){

    // this.World = require('./../support/world.js').World;

    this.When(/^I select '(.+)' search gadget$/, function(channel,callback) {
        var _this = this;
        _this.pageFactory.currentPage.clickSearchIfMobile()
            .then(function(){
                _this.pageFactory.currentPage.initSearchGadget(channel);
            })
            .then(callback);
    });

    this.Then(/^the title should be '(.+)'$/, function (expText,callback) {
        //expect(element(by.css('.hero-section__heading-title')).getText()).to.eventually.equal('Leave London111 behind');
        this.pageFactory.currentPage.getTitleText()
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

    this.Then(/^the main logo should be visible$/, function (callback) {
        this.pageFactory.currentPage.isMainLogoVisible()
            .then(function(isVisible){
                expect(isVisible).to.be.true;
                callback();
            });
    });

    this.Then(/^car-hire drivers age text should be '(.+)'$/, function (expText,callback) {
        this.pageFactory.currentPage.getCarHireDriversAgeText()
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

};

module.exports = steps;