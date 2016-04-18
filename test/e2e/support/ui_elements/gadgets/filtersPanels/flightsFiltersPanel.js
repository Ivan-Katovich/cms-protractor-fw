'use strict';

var inheritance = require('./../../../helpers/inheritance'),
    FiltersPanel = require('./filtersPanel');

var FlightsFiltersPanel = function(root,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'flights';

    _this._root=root;

    _this._data={
        elements: {},
        fields: {
            stops: {
                css: 'div[is-open*="filters.stops"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            'outbound-take-off': {
                css: 'div[is-open*="filters.outboundDepartureTime"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'inbound-take-off': {
                css: 'div[is-open*="filters.inboundDepartureTime"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'outbound-duration': {
                css: 'div[is-open*="filters.outboundDuration"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'inbound-duration': {
                css: 'div[is-open*="filters.inboundDuration"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'via-airport': {
                css: 'div[is-open*="filters.viaAirport"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            airlines: {
                css: 'div[is-open*="filters.airlines"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: []
            },
            cost: {
                css: 'div[is-open*="filters.cost"]',
                parent: _this._root,
                isSingle: true,
                type: 'slider',
                value: null
            },
            'cabin-class': {
                css: 'div[is-open*="filters.cabinClass"]',
                parent: _this._root,
                isSingle: true,
                type: 'checkboxlist',
                value: ['Economy']
            }
        },
        profiles: {}
    };

};

inheritance.inherits(FiltersPanel,FlightsFiltersPanel);

module.exports = FlightsFiltersPanel;



