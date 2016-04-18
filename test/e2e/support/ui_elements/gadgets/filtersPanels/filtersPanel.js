'use strict';
/*jshint -W083 */

var inheritance = require('./../../../helpers/inheritance'),
    Gadget = require('./../gadget');

var FiltersPanel = function(){};

inheritance.inherits(Gadget,FiltersPanel);

FiltersPanel.prototype._filtersPanelData = {
    elements: {},
    fields:{}
};

FiltersPanel.prototype.mergeData = function(){
    //console.log(this._data);
    //console.log(this._searchGadgetData);
    this._data.elements = this.world.helper.mergeObjectsWithoutSameKeys(this._data.elements,this._filtersPanelData.elements);
    this._data.fields = this.world.helper.mergeObjectsWithoutSameKeys(this._data.fields,this._filtersPanelData.fields);
    return this;
};

FiltersPanel.prototype.accordionField = function(field,status){
    if(this._data.fields[field].type !== 'checkboxlist' && this._data.fields[field].type !== 'slider'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type);
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).accordionSelf(status);
};

FiltersPanel.prototype.completeCheckboxlistByPropNumber = function(field,num){
    if(this._data.fields[field].type !== 'checkboxlist'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". Should be "checkboxlist"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).completeByNumber(num);
};

FiltersPanel.prototype.clearFilter = function(field){
    if(this._data.fields[field].type !== 'checkboxlist' && this._data.fields[field].type !== 'slider'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type);
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).clearList();
};

module.exports = FiltersPanel;
