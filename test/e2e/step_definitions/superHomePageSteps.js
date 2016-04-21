'use strict';
/*jshint -W030 */

var steps = function(){

    // this.World = require('./../support/world.js').World;

    this.When(/^I select '(.+)' search gadget$/, function(channel) {
        var _this = this;
        return _this.pageFactory.currentPage.clickSearchIfMobile()
            .then(function(){
                _this.pageFactory.currentPage.initSearchGadget(channel);
            });
    });

    this.Then(/^the title should be '(.+)'$/, function (expText) {
        //expect(element(by.css('.hero-section__heading-title')).getText()).to.eventually.equal('Leave London111 behind');
        return this.pageFactory.currentPage.getTitleText()
            .then(function(text){
                return expect(text).to.equal(expText);
            });
    });

    this.Then(/^the main logo should be visible$/, function () {
        return this.pageFactory.currentPage.isMainLogoVisible()
            .then(function(isVisible){
                return expect(isVisible).to.be.true;
            });
    });

    this.Then(/^car-hire drivers age text should be '(.+)'$/, function (expText) {
        return this.pageFactory.currentPage.getCarHireDriversAgeText()
            .then(function(text){
                return expect(text).to.equal(expText);
            });
    });

};

module.exports = steps;