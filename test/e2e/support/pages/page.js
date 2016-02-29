'use strict';

var gadgetFactory = require('./../ui_elements/gadgetFactory');

var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.sayHello = function(){
    console.log('Hello world');
    return browser.sleep(3000);
};

Page.prototype.selectGadgetDropdownByPosition = function(field, position){
    return gadgetFactory.currentSearchGadget.selectDropdownByPosition(field,position);
};

Page.prototype.clickGadgetButton = function(field){
    return gadgetFactory.currentSearchGadget.clickOnButton(field);
};

Page.prototype.selectGadgetRadiobuttonByLabel = function(field, label){
    return gadgetFactory.currentSearchGadget.selectRadiobuttonByLabel(field,label);
};

Page.prototype.selectGadgetDropdownByGroupAndValue = function(field,group,value){
    return gadgetFactory.currentSearchGadget.selectDropdownByGroupAndValue(field,group,value);
};

Page.prototype.selectGadgetDatapickerDayInNextMonth = function(field, day){
    return gadgetFactory.currentSearchGadget.selectDatapickerDayInNextMonth(field,day);
};

Page.prototype.completeGadgetFieldByValue = function(field, value){
    return gadgetFactory.currentSearchGadget.completeFieldByValue(field,value);
};

Page.prototype.completeGadgetByProfile = function(profileName){
    return gadgetFactory.currentSearchGadget.completeByProfile(profileName);
};

Page.prototype.getGadgetFieldLabel = function(field){
    return gadgetFactory.currentSearchGadget.getFieldLabel(field);
};

Page.prototype.submitGadgetForm = function(){
    return gadgetFactory.currentSearchGadget.submitForm();
};

Page.prototype.waitForPageLoaded = function(){
    return this._root.waitReady();
};

module.exports = Page;
