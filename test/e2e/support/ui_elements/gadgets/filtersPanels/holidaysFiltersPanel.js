'use strict';

var inheritance = require('./../../../helpers/inheritance'),
    FiltersPanel = require('./filtersPanel');

var HolidaysFiltersPanel = function(root,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'holidays';

    _this._root=root;

    _this._data={
        elements: {},
        fields: {
            price: {
                css: 'div[ng-show*="minTotalPrice"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'board-basis': {
                css: 'div[ng-show*="meals"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            stars: {
                css: 'div[ng-show*="stars"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'guest-rating': {
                css: 'div[ng-show*="guestRating"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'include-unknown-guest-rating': {
                xpath: './/input[@id="::filter_unknownGuestRating"]/..',
                parent: _this._root,
                isSingle: true,
                type: 'checkbox',
                value: false
            },
            'free-facilities': {
                xpath: './/checkbox-list-group-with-price[@group-name="Hotel Features"]/descendant::div[@ng-repeat="facilityKey in filterList"][1]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'room-facilities': {
                xpath: './/checkbox-list-group-with-price[@group-name="Hotel Features"]/descendant::div[@ng-repeat="facilityKey in filterList"][2]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'hotel-facilities': {
                xpath: './/checkbox-list-group-with-price[@group-name="Hotel Features"]/descendant::div[@ng-repeat="facilityKey in filterList"][3]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'leisure-facilities': {
                xpath: './/checkbox-list-group-with-price[@group-name="Hotel Features"]/descendant::div[@ng-repeat="facilityKey in filterList"][4]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'departure-airports': {
                css: 'checkbox-list-group-with-price[group-name*="Departure Airports"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'outbound-takeoff': {
                css: 'div[ng-show*="outboundTakeOff"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'inbound-takeoff': {
                css: 'div[ng-if*="inboundTakeOff"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'outbound-duration': {
                css: 'div[ng-show*="outboundDuration"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'include-unknown-outbound-duration': {
                xpath: './/input[@id="::filter_obUnknownDuration"]/..',
                parent: _this._root,
                isSingle: true,
                type: 'checkbox',
                value: false
            },
            'inbound-duration': {
                css: 'div[ng-show*="inboundDuration"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            airlines: {
                css: 'checkbox-list-group-with-price[group-name*="Airlines"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            providers: {
                css: 'checkbox-list-group-with-price[group-name*="Providers"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            }
        },
        profiles: {}
    };

};

inheritance.inherits(FiltersPanel,HolidaysFiltersPanel);

module.exports = HolidaysFiltersPanel;


