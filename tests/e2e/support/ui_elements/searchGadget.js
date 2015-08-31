var helper = require('./../helpers/helper');
var fieldFactory = require('./fields/fieldFactory');

var SearchGadget = function(){};

SearchGadget.prototype._commonData = {
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

SearchGadget.prototype.selectDropdownByPosition = function(field,position){
    return fieldFactory.getField(this._data.fields[field]).selectByPosition(position);
};

SearchGadget.prototype.getFieldLabel = function(field){
    return fieldFactory.getField(this._data.fields[field]).getLabel();
};

SearchGadget.prototype.submitForm = function(){
    return helper.elementGetter(this._root,this._commonData.elements.searchButton).click();
};

module.exports = SearchGadget;
