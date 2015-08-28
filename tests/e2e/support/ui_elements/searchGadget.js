var helper = require('./../helpers/helper');
var fieldFactory = require('./fields/fieldFactory');

var SearchGadget = function(){};

SearchGadget.prototype.completeFieldByValue = function(field,value){
    return fieldFactory.getField(this._data.fields[field]).completeByValue(value);
};

SearchGadget.prototype.selectDropdownByPosition = function(field,position){
    return fieldFactory.getField(this._data.fields[field]).selectByPosition(position);
};

SearchGadget.prototype.getFieldLabel = function(field){
    return fieldFactory.getField(this._data.fields[field]).getLabel();
};

module.exports = SearchGadget;
