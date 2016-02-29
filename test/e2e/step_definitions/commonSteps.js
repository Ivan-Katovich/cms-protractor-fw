'use strict';

var pageFactory = require('./../support/pages/pageFactory');
//var browserUtils = require('./../support/helpers/browserUtils');
//var SuperHomePage = require('./../../support/pages/superHomePage');
//var superHomePage = new SuperHomePage(element(by.css('body')));

var steps = function() {

    this.When(/^I wait for page loaded$/, function (callback) {
        browser.ignoreSynchronization=true;
        pageFactory.currentPage.waitForPageLoaded()
            .then(function(){
                browser.ignoreSynchronization=false;
            })
            .then(callback);
    });

    this.When(/^I select '(.+)'(?:st|th|nd|rd) option in the '(.+)' dropdown field$/, function (position,field,callback) {
        position=position-1;
        pageFactory.currentPage.selectGadgetDropdownByPosition(field,position)
            .then(callback);
    });

    this.When(/^I select option with value '(.+)' in the '(.+)'(?:st|th|nd|rd|) option group in the '(.+)' dropdown field$/, function (value,group,field,callback) {
        pageFactory.currentPage.selectGadgetDropdownByGroupAndValue(field,group,value)
            .then(callback);
    });

    this.When(/^I select '(.+)' option in the '(.+)' radiobuttons field$/, function(label,field,callback) {
        pageFactory.currentPage.selectGadgetRadiobuttonByLabel(field,label)
            .then(callback);
    });

    this.When(/^I complete '(.+)' field with value '(.+)'$/, function (field,value,callback) {
        if(value === 'true'){
            value = true;
        }
        if(value === 'false'){
            value = false;
        }
        pageFactory.currentPage.completeGadgetFieldByValue(field,value)
            .then(callback);
    });

    this.When(/^I complete current Search Gadget fields using '(.+)' profile$/, function (profileName,callback) {
        pageFactory.currentPage.completeGadgetByProfile(profileName)
            //.then(function(chain){
            //    chain();
            //})
            .then(function(){
                callback();
            });
    });

    this.When(/^I click on '(.+)' button$/, function (button,callback) {
        pageFactory.currentPage.clickGadgetButton(button)
            .then(callback);
    });

    this.When(/^I click on search button$/, function (callback) {
        pageFactory.currentPage.submitGadgetForm()
            .then(callback);
    });

    this.When(/^I select (.+)(?:st|th|nd|rd) day of the next month for the '(.+)'$/, function(day, field, callback) {
        pageFactory.currentPage.selectGadgetDatapickerDayInNextMonth(field,day)
            .then(callback);
    });

    this.Then(/^label of the '(.+)' field should be '(.+)'$/, function (field,expText,callback) {
        pageFactory.currentPage.getGadgetFieldLabel(field)
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

    this.Then(/^say hello$/, function (callback) {
        pageFactory.currentPage.sayHello()
            .then(function(){
                callback();
            });
    });
};

module.exports = steps;

