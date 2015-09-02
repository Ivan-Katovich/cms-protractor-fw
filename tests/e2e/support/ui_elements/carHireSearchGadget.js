var helper = require('./../helpers/helper');
var fieldFactory = require('./fields/fieldFactory');
var SearchGadget = require('./searchGadget');

var CarHireSearchGadget = function(root){

    var _this = this;

    _this._root=root;

    _this._data = {
        elements: {
            driversAgeLabel: {
                css: '.searchGadgetForm__checkbox-label',
                isSingle: true
            }
        },
        fields: {
            'pick-up-from': {
                css: '#carHirePickUpLocationSection',
                parent: this._root,
                isSingle: true,
                type: 'autocomplete'
            },
            'pick-up-time': {
                css: '.searchGadgetForm__section--pickUpTime',
                parent: this._root,
                isSingle: true,
                type: 'dropdown'
            }
        }
    };

    _this.getDriversAdgeText = function(){
        console.log('get drivers age text');
        return helper.elementGetter(_this._root,_this._data.elements.driversAgeLabel).getText();
    };

};

helper.inherits(SearchGadget,CarHireSearchGadget);

module.exports = CarHireSearchGadget;