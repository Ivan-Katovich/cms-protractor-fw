'use strict';

var inheritance = require('./../../../helpers/inheritance'),
    FiltersPanel = require('./filtersPanel');

var HotelsFiltersPanel = function(root,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'car-hire';

    _this._root=root;

    _this._data={
        elements: {},
        fields: {
            stars: {
                xpath: './div[1]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'guest-rating': {
                css: 'div[ng-show*="guestRating"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            price: {
                css: 'div[ng-show*="TotalPrice"]',
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
            distance: {
                css: 'div[ng-show*="distance"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
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
            'family-facilities': {
                xpath: './/checkbox-list-group-with-price[@group-name="Hotel Features"]/descendant::div[@ng-repeat="facilityKey in filterList"][4]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'leisure-facilities': {
                xpath: './/checkbox-list-group-with-price[@group-name="Hotel Features"]/descendant::div[@ng-repeat="facilityKey in filterList"][5]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'business-facilities': {
                xpath: './/checkbox-list-group-with-price[@group-name="Hotel Features"]/descendant::div[@ng-repeat="facilityKey in filterList"][6]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            }
        },
        profiles: {}
    };

};

inheritance.inherits(FiltersPanel,HotelsFiltersPanel);

module.exports = HotelsFiltersPanel;


