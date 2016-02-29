'use strict';

var helper = require('./../helpers/helper');
var constants = require('./../helpers/constants');
//var fieldFactory = require('./fields/fieldFactory');
var SearchGadget = require('./searchGadget');
var placesId = require('./../../support/helpers/placesId');

var CarHireSearchGadget = function(root){

    var _this = this;

    _this.marker = 'car-hire';

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
                parent: _this._root,
                isSingle: true,
                type: 'autocomplete',
                value: null
            },
            'pick-up-time': {
                css: '.searchGadgetForm__section--pickUpTime',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '10:00'
            },
            'drop-off-time': {
                css: '#dropOffTimeSection',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '10:00'
            },
            'pick-up-date': {
                css: '.searchGadgetForm__section--pickUpDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: helper.getStringDate(2,'days')
            },
            'drop-off-date': {
                css: '.searchGadgetForm__section--dropOffDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: helper.getStringDate(4,'days')
            },
            'age25-75': {
                css: '.searchGadgetForm__carHireDriverInput--checkbox',
                parent: _this._root,
                isSingle: true,
                type: 'checkbox',
                value: true
            },
            'drivers-age': {
                css: '.searchGadgetForm__section--driverAge',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '33'
            }
        },
        profiles: {
            minimum: [
                {'pick-up-from': 'Paris - Orly Apt (ORY), Essonne, Ile-de-France, France'}
            ]
        }
    };

    _this.getDriversAdgeText = function(){
        console.log('get drivers age text');
        return helper.elementGetter(_this._root,_this._data.elements.driversAgeLabel).getText();
    };

    _this.urlConstructor = function(){
        var url = '';
        url += browser.baseUrl.replace(constants.REGEXP_BASE_URL,'$1').replace(/\/$/,'');
        url += '/en-gb/carhire/results/';
        url += placesId[_this._data.fields['pick-up-from'].value];
        url += '/';
        url += placesId[_this._data.fields['pick-up-from'].value];
        url += '/';
        url += _this._data.fields['pick-up-date'].value;
        url += 'T';
        url += _this._data.fields['pick-up-time'].value;
        url += '/';
        url += _this._data.fields['drop-off-date'].value;
        url += 'T';
        url += _this._data.fields['drop-off-time'].value;
        url += '/';
        url += _this._data.fields['drivers-age'].value;
        url += '/';

        console.log('Constructed URL is: '+url);
        return url;
    };

};

helper.inherits(SearchGadget,CarHireSearchGadget);

module.exports = CarHireSearchGadget;