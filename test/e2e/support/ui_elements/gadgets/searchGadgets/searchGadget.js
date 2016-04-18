'use strict';
/*jshint -W083 */

var inheritance = require('./../../../helpers/inheritance'),
    Gadget = require('./../gadget');

var SearchGadget = function(){};

inheritance.inherits(Gadget,SearchGadget);

SearchGadget.prototype._searchGadgetData = {
    elements: {
        searchButton: {
            css: '.searchGadgetForm__searchGadgetForm__btn-submit',
            isSingle: true
        }
    },
    fields: {}
};

SearchGadget.prototype.mergeData = function(){
    //console.log(this._data);
    //console.log(this._searchGadgetData);
    this._data.elements = this.world.helper.mergeObjectsWithoutSameKeys(this._data.elements,this._searchGadgetData.elements);
    this._data.fields = this.world.helper.mergeObjectsWithoutSameKeys(this._data.fields,this._searchGadgetData.fields);
    return this;
};

SearchGadget.prototype.submitForm = function(){
    return this.world.helper.elementGetter(this._root,this._data.elements.searchButton).scrollToAndClick();
};

module.exports = SearchGadget;
