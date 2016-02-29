'use strict';

var helper = require('./../helpers/helper');
var constants = require('./../helpers/constants');
//var fieldFactory = require('./fields/fieldFactory');
var SearchGadget = require('./searchGadget');
var placesId = require('./../../support/helpers/placesId');

var HolidaysSearchGadget = function(root){

    var _this = this;

    _this.marker = 'holidays';

    _this._root=root;

    _this._data = {
        elements: {},
        fields: {
            'depart-from-main': {
                xpath: './/departures-picker/descendant::div[contains(@class,"searchGadgetForm__select-wrapper--departure-airport")][1]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            },
            'depart-from-first-slave': {
                xpath: './/departures-picker/descendant::div[contains(@class,"searchGadgetForm__select-wrapper--departure-airport")][2]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            },
            'holiday-destination': {
                css: '#holidaysDestinationSection',
                parent: _this._root,
                isSingle: true,
                type: 'autocomplete',
                value: null
            },
            'depart': {
                css: '.searchGadgetForm__section--holidaysDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: helper.getStringDate(14,'days')
            },
            'nights': {
                css: '.searchGadgetForm__section--holidaysDuration',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '7'
            },
            'adult': {
                css: '.searchGadgetForm__section--holidaysAdults',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '2'
            },
            'child': {
                css: '.searchGadgetForm__section--holidaysChildren',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '0'
            },
            'first-child-age': {
                xpath: './/*[contains(@class,"searchGadgetForm__select-wrapper--holidaysChildAges")][1]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            },
            'second-child-age': {
                xpath: './/*[contains(@class,"searchGadgetForm__select-wrapper--holidaysChildAges")][2]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            },
            'add-another-location': {
                css: '.searchGadgetForm__btn-add[ng-click="addAnotherAirport()"]',
                parent: _this._root,
                isSingle: true,
                type: 'button',
                value: false
            }

        },
        profiles: {
            minimum: [
                {'depart-from-main': 'London - All Airports (LON)'},
                {'holiday-destination': 'Madrid, Spain'}
                //{'child': '2'},
                //{'first-child-age': '7'},
                //{'second-child-age': '12'}
            ]
        }
    };

    _this.urlConstructor = function(){
        var url = '';
        url += browser.baseUrl.replace(constants.REGEXP_BASE_URL,'$1').replace(/\/$/,'');
        url += '/en-gb/holidays/results/';
        url += placesId[_this._data.fields['depart-from-main'].value];
        if(_this._data.fields['depart-from-first-slave'].value){
            url += ':';
            url += placesId[_this._data.fields['depart-from-first-slave'].value];
        }
        url += '/';
        url += placesId[_this._data.fields['holiday-destination'].value];
        url += '/';
        url += _this._data.fields.depart.value;
        url += '/';
        url += _this._data.fields.nights.value;
        url += '/?room=A';
        url += _this._data.fields.adult.value;
        if(_this._data.fields['first-child-age'].value){
            url += ':C';
            url += _this._data.fields['first-child-age'].value;
        }
        if(_this._data.fields['second-child-age'].value){
            url += ':C';
            url += _this._data.fields['second-child-age'].value;
        }

        console.log('Constructed URL is: '+url);
        return url;
    };

};

helper.inherits(SearchGadget,HolidaysSearchGadget);

module.exports = HolidaysSearchGadget;

