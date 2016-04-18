'use strict';

var inheritance = require('./../../../helpers/inheritance'),
    FiltersPanel = require('./filtersPanel');

var CarHireFiltersPanel = function(root,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'car-hire';

    _this._root=root;

    _this._data={
        elements: {},
        fields: {
            budget: {
                css: 'div[is-open*="filters.budget"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            category: {
                css: 'div[is-open*="filters.carCategories"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            type: {
                css: 'div[is-open*="filters.carTypes"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            doors: {
                css: 'div[is-open*="filters.doors"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            transmission: {
                css: 'div[is-open*="filters.transmission"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'air-conditioning': {
                css: 'div[is-open*="filters.airCon"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'fuel-policy': {
                css: 'div[is-open*="filters.fuelPolicy"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'pick-up-location': {
                css: 'div[is-open*="filters.onAirport"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            providers: {
                css: 'div[is-open*="filters.providers"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            }
        },
        profiles: {}
    };

};

inheritance.inherits(FiltersPanel,CarHireFiltersPanel);

module.exports = CarHireFiltersPanel;


