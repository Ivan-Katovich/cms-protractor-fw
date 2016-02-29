'use strict';

var helper = require('./../helpers/helper');
var constants = require('./../helpers/constants');
//var fieldFactory = require('./fields/fieldFactory');
var SearchGadget = require('./searchGadget');
var placesId = require('./../../support/helpers/placesId');
var moment = require('moment');

var HotelsSearchGadget = function(root){

    var _this = this;

    _this.marker = 'hotels';

    _this._root=root;

    _this._data = {
        elements: {},
        fields: {
            'destination': {
                css: '#hotelsDestinationSection',
                parent: _this._root,
                isSingle: true,
                type: 'autocomplete',
                value: null
            },
            'check-in': {
                css: '.searchGadgetForm__section--checkInDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: helper.getStringDate(2,'days')
            },
            'check-out': {
                css: '.searchGadgetForm__section--checkOutDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: helper.getStringDate(9,'days')
            },
            'guests': {
                css: '.searchGadgetForm__section--hotels-guests',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '2 adults in 1 room'

            },
            'adults': {
                css: '#room0 .searchGadgetForm__hotels-people-wrapper--adults',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '2'
            },
            'children': {
                css: '#room0 .searchGadgetForm__hotels-people-wrapper--children',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '0'
            },
            'first-child-age': {
                xpath: './/room[@id="room0"]//*[contains(@class,"searchGadgetForm__select-wrapper--childAges--hotelsChildAges")][1]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            },
            'second-child-age': {
                xpath: './/room[@id="room0"]//*[contains(@class,"searchGadgetForm__select-wrapper--childAges--hotelsChildAges")][2]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            },
            'add-another-room': {
                css: 'button.searchGadgetForm__btn-add--add-room',
                parent: _this._root,
                isSingle: true,
                type: 'button',
                value: false
            },
            'adults-second-room': {
                css: '#room1 .searchGadgetForm__hotels-people-wrapper--adults',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '1'
            },
            'children-second-room': {
                css: '#room1 .searchGadgetForm__hotels-people-wrapper--children',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: '0'
            },
            'first-child-age-second-room': {
                xpath: './/room[@id="room1"]//*[contains(@class,"searchGadgetForm__select-wrapper--childAges--hotelsChildAges")][1]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            },
            'second-child-age-second-room': {
                xpath: './/room[@id="room1"]//*[contains(@class,"searchGadgetForm__select-wrapper--childAges--hotelsChildAges")][2]',
                parent: _this._root,
                isSingle: true,
                type: 'dropdown',
                value: null
            }

        },
        profiles: {
            minimum: [
                {'destination': 'Paris, France'}
                //{'guests': 'More options...'},
                //{'add-another-room': true},
                //{'first-child-age-second-room': '7'}
            ]
        }
    };

    _this.urlConstructor = function(){
        var url = '';
        url += browser.baseUrl.replace(constants.REGEXP_BASE_URL,'$1').replace(/\/$/,'');
        url += '/en-gb/hotels/results/';
        url += placesId[_this._data.fields.destination.value];
        url += '/';
        url += _this._data.fields['check-in'].value;
        url += '/';
        url += moment(_this._data.fields['check-in'].value).to(_this._data.fields['check-out'].value).match(/\d{1,2}/)[0];
        url += '/?room=A';
        url += _this._data.fields.adults.value;
        if(_this._data.fields['first-child-age'].value){
            url += ':C';
            url += _this._data.fields['first-child-age'].value;
        }
        if(_this._data.fields['second-child-age'].value){
            url += ':C';
            url += _this._data.fields['second-child-age'].value;
        }
        if(_this._data.fields['add-another-room'].value){
            url += '&room=A';
            url += _this._data.fields['adults-second-room'].value;
            if(_this._data.fields['first-child-age-second-room'].value){
                url += ':C';
                url += _this._data.fields['first-child-age-second-room'].value;
            }
            if(_this._data.fields['second-child-age-second-room'].value){
                url += ':C';
                url += _this._data.fields['second-child-age-second-room'].value;
            }
        }

        console.log('Constructed URL is: '+url);
        return url;
    };



};

helper.inherits(SearchGadget,HotelsSearchGadget);

module.exports = HotelsSearchGadget;

