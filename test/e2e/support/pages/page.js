'use strict';

var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype._commonData = {
    elements: {},
    fields: {},
    cards: {}
};

Page.prototype.mergeData = function(){
    this._data.elements = this.world.helper.mergeObjectsWithoutSameKeys(this._data.elements,this._commonData.elements);
    this._data.fields = this.world.helper.mergeObjectsWithoutSameKeys(this._data.fields,this._commonData.fields);
    return this;
};

Page.prototype.sayHello = function(){
    console.log('Hello world');
    return browser.sleep(1000);
};

Page.prototype.selectGadgetDropdownByPosition = function(field, position){
    return this.world.gadgetFactory.currentGadget.selectDropdownByPosition(field,position);
};

Page.prototype.clickButton = function(field,gadget){
    if(gadget){
        return this.world.gadgetFactory.currentGadget.clickOnButton(field);
    }else{
        if(this._resultsData.fields[field].type !== 'button'){
            throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "button"');
        }
        return this.world.fieldFactory.getField(this._data.fields[field]).clickOn();
    }

};

Page.prototype.selectGadgetRadiobuttonByLabel = function(field, label){
    return this.world.gadgetFactory.currentGadget.selectRadiobuttonByLabel(field,label);
};

Page.prototype.selectGadgetDropdownByGroupAndValue = function(field,group,value){
    return this.world.gadgetFactory.currentGadget.selectDropdownByGroupAndValue(field,group,value);
};

Page.prototype.selectGadgetDatapickerDayInNextMonth = function(field, day){
    return this.world.gadgetFactory.currentGadget.selectDatapickerDayInNextMonth(field,day);
};

Page.prototype.completeGadgetFieldByValue = function(field, value){
    return this.world.gadgetFactory.currentGadget.completeFieldByValue(field,value);
};

Page.prototype.completeGadgetByProfile = function(profileName){
    return this.world.gadgetFactory.currentGadget.completeByProfile(profileName);
};

Page.prototype.getGadgetFieldLabel = function(field){
    return this.world.gadgetFactory.currentGadget.getFieldLabel(field);
};

Page.prototype.submitGadgetForm = function(){
    return this.world.gadgetFactory.currentGadget.submitForm();
};

Page.prototype.waitForPageLoaded = function(){
    return this._root.element(by.css('div.site-wrap')).waitReady();
};

Page.prototype.getTextValueOf = function(objGroup,obj,gadget){
    if(objGroup !== 'fields' && objGroup !== 'elements'){
        throw new Error('Wrong type of object. Sould be elements or fields, but it was: '+objGroup);
    }
    if(gadget){
        return this.world.gadgetFactory.currentGadget.getTextValueOf(obj);
    }else{
        return this.world.helper.elementGetter(this._root,this._data[objGroup][obj]).getText();
    }
};

Page.prototype.isObjectVisible = function(objGroup,obj,gadget){
    if(objGroup !== 'fields' && objGroup !== 'elements'){
        throw new Error('Wrong type of object. Sould be elements or fields, but it was: '+objGroup);
    }
    if(gadget){
        return this.world.gadgetFactory.currentGadget.isObjectPresentAndVisible(obj);
    }else{
        return this.world.helper.elementGetter(this._root,this._data[objGroup][obj]).isPresentAndDisplayed();
    }
};

module.exports = Page;
