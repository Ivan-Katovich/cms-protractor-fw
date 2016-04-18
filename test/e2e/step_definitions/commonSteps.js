'use strict';
/*jshint -W030 */

var steps = function() {

    // this.World = require('./../support/world.js').World;

    this.When(/^I wait for page loaded$/, function (callback) {
        browser.ignoreSynchronization=true;
        this.pageFactory.currentPage.waitForPageLoaded()
            .then(function(){
                browser.ignoreSynchronization=false;
            })
            .then(callback);
    });

    this.When(/^I remember the text value of '(.+)' (field|element)(?: in |)(gadget|)$/, function (obj,objType,gadget,callback) {
        var _this = this,
            objGroup = objType+'s';
        this.pageFactory.currentPage.getTextValueOf(objGroup,obj,gadget)
            .then(function(text){
                _this.memory.text[obj]=text;
                _this.memory.numbers[obj]=text.match(/\d+/g);
                console.log('remember: '+text);
                callback();
            });
    });

    this.When(/^I select '(.+)'(?:st|th|nd|rd) option in the '(.+)' dropdown field$/, function (position,field,callback) {
        position=position-1;
        this.pageFactory.currentPage.selectGadgetDropdownByPosition(field,position)
            .then(callback);
    });

    this.When(/^I select option with value '(.+)' in the '(.+)'(?:st|th|nd|rd|) option group in the '(.+)' dropdown field$/, function (value,group,field,callback) {
        this.pageFactory.currentPage.selectGadgetDropdownByGroupAndValue(field,group,value)
            .then(callback);
    });

    this.When(/^I select '(.+)' option in the '(.+)' radiobuttons field$/, function(label,field,callback) {
        this.pageFactory.currentPage.selectGadgetRadiobuttonByLabel(field,label)
            .then(callback);
    });

    this.When(/^I complete '(.+)' field with value '(.+)'$/, function (field,value,callback) {
        if(value === 'true'){
            value = true;
        }
        if(value === 'false'){
            value = false;
        }
        this.pageFactory.currentPage.completeGadgetFieldByValue(field,value)
            .then(callback);
    });

    this.When(/^I complete current Search Gadget fields using '(.+)' profile$/, function (profileName,callback) {
        this.pageFactory.currentPage.completeGadgetByProfile(profileName)
            //.then(function(chain){
            //    chain();
            //})
            .then(function(){
                callback();
            });
    });

    this.When(/^I click on '(.+)'( gadget|) button$/, function (button,gadget,callback) {
        this.pageFactory.currentPage.clickButton(button,gadget)
            .then(callback);
    });

    this.When(/^I click on search button$/, function (callback) {
        this.pageFactory.currentPage.submitGadgetForm()
            .then(callback);
    });

    this.When(/^I select (.+)(?:st|th|nd|rd) day of the next month for the '(.+)'$/, function(day, field, callback) {
        this.pageFactory.currentPage.selectGadgetDatapickerDayInNextMonth(field,day)
            .then(callback);
    });

    this.Then(/^label of the '(.+)' field should be '(.+)'$/, function (field,expText,callback) {
        this.pageFactory.currentPage.getGadgetFieldLabel(field)
            .then(function(text){
                expect(text).to.equal(expText);
                callback();
            });
    });

    this.Then(/^the '(.+)' (field|element) text(?: in |)(gadget|) and the remembered value should be (the same|different)$/, function (obj,objType,gadget,comporator,callback) {
        var _this = this,
            objGroup = objType + 's';
        this.pageFactory.currentPage.getTextValueOf(objGroup,obj,gadget)
            .then(function(text){
                if(comporator === 'different'){
                    expect(_this.memory.text[obj]).to.not.equal(text);
                    callback();
                }else{
                    expect(_this.memory.text[obj]).to.equal(text);
                    callback();
                }
            });
    });

    this.Then(/^the '(.+)' (field|element)(?: in |)(gadget|) should be (visible|not visible)$/, function (obj,objType,gadget,visibility,callback) {
        var objGroup = objType + 's';
        this.pageFactory.currentPage.isObjectVisible(objGroup,obj,gadget)
            .then(function(is){
                if(visibility === 'visible'){
                    expect(is).to.be.true;
                    callback();
                }else{
                    expect(is).to.be.false;
                    callback();
                }
            });
    });

    this.Then(/^say hello$/, function (callback) {
        this.pageFactory.currentPage.sayHello()
            .then(function(){
                callback();
            });
    });

    this.Then(/^say hello '(.+)' eq '(.+)'$/, function (x,y,callback) {
        this.pageFactory.currentPage.sayHello()
            .then(function(){
                expect(x).to.equal(y);
                callback();
            });
    });

};

module.exports = steps;

