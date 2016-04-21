'use strict';
/*jshint -W030 */

var steps = function() {

    this.When(/^I wait for page loaded$/, function () {
        browser.ignoreSynchronization=true;
        return this.pageFactory.currentPage.waitForPageLoaded()
            .then(function(){
                browser.ignoreSynchronization=false;
                var deferred = this.q.defer();
                deferred.resolve();
                return deferred.promise;
            });
    });

    this.When(/^I remember the text value of '(.+)' (field|element)(?: in |)(gadget|)$/, function (obj,objType,gadget) {
        var _this = this,
            objGroup = objType+'s';
        return this.pageFactory.currentPage.getTextValueOf(objGroup,obj,gadget)
            .then(function(text){
                _this.memory.text[obj]=text;
                _this.memory.numbers[obj]=text.match(/\d+/g);
                console.log('remember: '+text);
                var deferred = _this.q.defer();
                deferred.resolve();
                return deferred.promise;
            });
    });

    this.When(/^I select '(.+)'(?:st|th|nd|rd) option in the '(.+)' dropdown field$/, function (position,field) {
        position=position-1;
        return this.pageFactory.currentPage.selectGadgetDropdownByPosition(field,position);
    });

    this.When(/^I select option with value '(.+)' in the '(.+)'(?:st|th|nd|rd|) option group in the '(.+)' dropdown field$/, function (value,group,field) {
        return this.pageFactory.currentPage.selectGadgetDropdownByGroupAndValue(field,group,value);
    });

    this.When(/^I select '(.+)' option in the '(.+)' radiobuttons field$/, function(label,field) {
        return this.pageFactory.currentPage.selectGadgetRadiobuttonByLabel(field,label);
    });

    this.When(/^I complete '(.+)' field with value '(.+)'$/, function (field,value) {
        if(value === 'true'){
            value = true;
        }
        if(value === 'false'){
            value = false;
        }
        return this.pageFactory.currentPage.completeGadgetFieldByValue(field,value);
    });

    this.When(/^I complete current Search Gadget fields using '(.+)' profile$/, function (profileName) {
        return this.pageFactory.currentPage.completeGadgetByProfile(profileName);
    });

    this.When(/^I click on '(.+)'( gadget|) button$/, function (button,gadget) {
        return this.pageFactory.currentPage.clickButton(button,gadget);
    });

    this.When(/^I click on search button$/, function () {
        return this.pageFactory.currentPage.submitGadgetForm();
    });

    this.When(/^I select (.+)(?:st|th|nd|rd) day of the next month for the '(.+)'$/, function(day, field) {
        return this.pageFactory.currentPage.selectGadgetDatapickerDayInNextMonth(field,day);
    });

    this.Then(/^label of the '(.+)' field should be '(.+)'$/, function (field,expText) {
        return this.pageFactory.currentPage.getGadgetFieldLabel(field)
            .then(function(text){
                return expect(text).to.equal(expText);
            });
    });

    this.Then(/^the '(.+)' (field|element) text(?: in |)(gadget|) and the remembered value should be (the same|different)$/, function (obj,objType,gadget,comporator) {
        var _this = this,
            objGroup = objType + 's';
        return _this.pageFactory.currentPage.getTextValueOf(objGroup,obj,gadget)
            .then(function(text){
                if(comporator === 'different'){
                    return expect(_this.memory.text[obj]).to.not.equal(text);
                }else{
                    return expect(_this.memory.text[obj]).to.equal(text);
                }
            });
    });

    this.Then(/^the '(.+)' (field|element)(?: in |)(gadget|) should be (visible|not visible)$/, function (obj,objType,gadget,visibility) {
        var objGroup = objType + 's';
        return this.pageFactory.currentPage.isObjectVisible(objGroup,obj,gadget)
            .then(function(is){
                if(visibility === 'visible'){
                    return expect(is).to.be.true;
                }else{
                    return expect(is).to.be.false;
                }
            });
    });

    this.Then(/^say hello$/, function () {
        return this.pageFactory.currentPage.sayHello();
    });

};

module.exports = steps;

