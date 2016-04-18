'use strict';

var inheritance = require('./../../../helpers/inheritance'),
    SearchGadget = require('./searchGadget');

var HotelsSearchGadget = function(root,world){

    var _this = this;
    
    _this.world = world;

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
                value: _this.world.helper.getStringDate(2,'days')
            },
            'check-out': {
                css: '.searchGadgetForm__section--checkOutDate',
                parent: _this._root,
                isSingle: true,
                type: 'datapicker',
                value: _this.world.helper.getStringDate(9,'days')
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
        url += browser.baseUrl.replace(_this.world.constants.REGEXP_BASE_URL,'$1').replace(/\/$/,'');
        url += '/en-gb/hotels/results/';
        url += _this.world.placesId[_this._data.fields.destination.value];
        url += '/';
        url += _this._data.fields['check-in'].value;
        url += '/';
        url += _this.world.moment(_this._data.fields['check-in'].value).to(_this._data.fields['check-out'].value).match(/\d{1,2}/)[0];
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

inheritance.inherits(SearchGadget,HotelsSearchGadget);

module.exports = HotelsSearchGadget;

