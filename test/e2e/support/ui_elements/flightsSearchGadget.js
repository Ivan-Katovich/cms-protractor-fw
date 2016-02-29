'use strict';

var helper = require('./../helpers/helper');
var constants = require('./../helpers/constants');
//var fieldFactory = require('./fields/fieldFactory');
var SearchGadget = require('./searchGadget');

var FlightsSearchGadget = function(root){

    var _this = this;

    _this.marker = 'flights';

    _this._root=root;

    _this._data = {
        elements: {},
        fields: {
            'flying-from': {
                css: '#flightsDepartureSection',
                parent: _this._root,
                isSingle: true,
                type: 'autocomplete',
                value: null
            },
            'flying-to': {
                css: '#flightsDestinationSection',
                parent: _this._root,
                isSingle: true,
                type: 'autocomplete',
                value: null
            },
            'depart': {
                css: '.searchGadgetForm__section--departureDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: helper.getStringDate(2,'days')
            },
            'return': {
                css: '.searchGadgetForm__section--returnDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: helper.getStringDate(9,'days')
            },
            'adult': {
                css: '.searchGadgetForm__section--flightsAdults',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '2'
            },
            'age2-11': {
                css: '.searchGadgetForm__section--flightsChildren',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '0'
            },
            'under2': {
                css: '.searchGadgetForm__section--flightsInfants',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '0'
            },
            'type-of-flight': {
                css: '.searchGadgetForm__section--flights-oneway',
                parent: _this._root,
                isSingle: true,
                type: 'radiobuttons',
                value: 'Return'
            },
            'show-cabin-class': {
                css: '.searchGadgetForm__flights-extras-btn',
                parent: _this._root,
                isSingle: true,
                type: 'button'
            },
            'cabin-class': {
                css: '.searchGadgetForm__flights-extras',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: 'Economy'
            },
            'direct-flights-only': {
                css: '.searchGadgetForm__section--flights-direct',
                parent: _this._root,
                isSingle: true,
                type: 'checkbox',
                value: false
            }

        },
        profiles: {
            minimum: [
                {'flying-from': 'London - All Airports (LON)'},
                {'flying-to': 'Paris - All Airports (PAR)'}
            ]
        }
    };

    _this.urlConstructor = function(){
        var url = '';
        url += browser.baseUrl.replace(constants.REGEXP_BASE_URL,'$1').replace(/\/$/,'');
        url += '/en-gb/flight/results/';
        url += _this._data.fields['flying-from'].value.match(/\([A-Z]{3}\)/)[0].replace(/[\(|\)]/g,'');
        url += '/';
        url += _this._data.fields.depart.value;
        url += '/';
        url += _this._data.fields['flying-to'].value.match(/\([A-Z]{3}\)/)[0].replace(/[\(|\)]/g,'');
        if(_this._data.fields['type-of-flight'].value === 'Return'){
            url += '/';
            url += _this._data.fields.return.value;
        }
        url += '/';
        url += _this._data.fields.adult.value;
        url += '/';
        url += _this._data.fields['age2-11'].value;
        url += '/';
        url += _this._data.fields.under2.value;
        url += '/';
        url += _this._data.fields['cabin-class'].value.match(/[A-Z]/)[0];
        url += '/0';
        url += '/';
        url += _this._data.fields['direct-flights-only'].value;
        url += '/';
        url += _this._data.fields['type-of-flight'].value === 'Return' ? 'true' : 'false';
        url += '/';

        console.log('Constructed URL is: '+url);
        return url;
    };

};

helper.inherits(SearchGadget,FlightsSearchGadget);

module.exports = FlightsSearchGadget;
