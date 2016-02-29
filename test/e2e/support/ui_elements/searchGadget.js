'use strict';
/*jshint -W083 */

var helper = require('./../helpers/helper');
var fieldFactory = require('./fields/fieldFactory');
//var q = require('q');

var SearchGadget = function(){};

SearchGadget.prototype._searchGadgetData = {
    elements: {
        searchButton: {
            css: '.searchGadgetForm__searchGadgetForm__btn-submit',
            isSingle: true
        }
    }
};

SearchGadget.prototype.completeFieldByValue = function(field,value){
    return fieldFactory.getField(this._data.fields[field]).completeByValue(value);
};

SearchGadget.prototype.completeByProfile = function(profileName){
    var _this = this;

    return helper.asyncLoop(_this._data.profiles[profileName].length, function(loop,i){
        var innerPosition = i-1;
        var field = Object.keys(_this._data.profiles[profileName][innerPosition])[0];
        return _this.completeFieldByValue(field,_this._data.profiles.minimum[innerPosition][field])
                .then(function(){
                    return loop();
                });
    });
};

SearchGadget.prototype.clickOnButton = function(field){
    return fieldFactory.getField(this._data.fields[field]).clickOn();
};

SearchGadget.prototype.selectDropdownByPosition = function(field,position){
    return fieldFactory.getField(this._data.fields[field]).selectByPosition(position);
};

SearchGadget.prototype.selectDropdownByGroupAndValue = function(field,group,value){
    return fieldFactory.getField(this._data.fields[field]).selectByGroupAndValue(group,value);
};

SearchGadget.prototype.selectRadiobuttonByLabel = function(field,label){
    return fieldFactory.getField(this._data.fields[field]).completeByValue(label);
};

SearchGadget.prototype.selectDatapickerDayInNextMonth = function(field,day){
    return fieldFactory.getField(this._data.fields[field]).selectDayFromNextMonth(day);
};

SearchGadget.prototype.getFieldLabel = function(field){
    return fieldFactory.getField(this._data.fields[field]).getLabel();
};

SearchGadget.prototype.submitForm = function(){
    return helper.elementGetter(this._root,this._searchGadgetData.elements.searchButton).scrollToAndClick();
};

SearchGadget.prototype.mergeProfile = function(profile){
    var _this = this;
    _this._data.profiles[profile].forEach(function(fieldObj){
        var field = Object.keys(fieldObj)[0];
        _this._data.fields[field].value = fieldObj[field];
    });
};

module.exports = SearchGadget;
