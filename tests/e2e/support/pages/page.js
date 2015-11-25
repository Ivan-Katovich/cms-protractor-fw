var gadgetFactory = require('./../ui_elements/gadgetFactory');

var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.sayHello = function(){
    console.log('Hello world');
    return element(by.css('.hero-section__heading-title')).isDisplayed();
};

Page.prototype.selectPageDropdownByPosition = function(field,position){
    return gadgetFactory.currentSearchGadget.selectDropdownByPosition(field,position);
};

Page.prototype.completePageFieldByValue = function(field,value){
    return gadgetFactory.currentSearchGadget.completeFieldByValue(field,value);
};

Page.prototype.getPageFieldLabel = function(field){
    return gadgetFactory.currentSearchGadget.getFieldLabel(field);
};

Page.prototype.submitPageForm = function(){
    return gadgetFactory.currentSearchGadget.submitForm();
};

Page.prototype.waitForPageLoaded = function(){
    return this._root.waitReady();
};

module.exports = Page;
