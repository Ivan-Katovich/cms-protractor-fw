'use strict';

var CarHireSearchGadget = require('./searchGadgets/carHireSearchGadget'),
    FlightsSearchGadget = require('./searchGadgets/flightsSearchGadget'),
    HotelsSearchGadget = require('./searchGadgets/hotelsSearchGadget'),
    HolidaysSearchGadget = require('./searchGadgets/holidaysSearchGadget'),
    CarHireFiltersPanel = require('./filtersPanels/carHireFiltersPanel'),
    FlightsFiltersPanel = require('./filtersPanels/flightsFiltersPanel'),
    HolidaysFiltersPanel = require('./filtersPanels/holidaysFiltersPanel'),
    HotelsFiltersPanel = require('./filtersPanels/hotelsFiltersPanel');

var GadgetFactory = function(world){

    var _this = this;

    _this.currentGadget = 'undefined';

    _this.getSearchGadget = function(gadget){
        var searchGadgets = {
            'car-hire': {
                root: 'car-hire-search',
                Class: CarHireSearchGadget
            },
            'flights': {
                root: 'flights-search',
                Class: FlightsSearchGadget
            },
            'hotels': {
                root: 'hotels-search',
                Class: HotelsSearchGadget
            },
            'holidays': {
                root: 'holidays-search',
                Class: HolidaysSearchGadget
            }
        };
        if(!searchGadgets[gadget]){
            throw new Error('Wrong name of Search Gadget: '+searchGadgets[gadget]);
        }
        _this.currentGadget = new searchGadgets[gadget].Class(element(by.css(searchGadgets[gadget].root)),world);
        return _this.currentGadget.mergeData();
    };

    _this.getFiltersPanel = function(gadget){
        var filtersPanels = {
            'car-hire': {
                root: 'car-hire-results-filters',
                Class: CarHireFiltersPanel
            },
            'flights': {
                root: 'flight-results-filters',
                Class: FlightsFiltersPanel
            },
            'hotels': {
                root: 'results-filters div.offscreen-panel',
                Class: HotelsFiltersPanel
            },
            'holidays': {
                root: 'results-filters div.offscreen-panel',
                Class: HolidaysFiltersPanel
            }
        };
        if(!filtersPanels[gadget]){
            throw new Error('Wrong name of Filters Panel: '+filtersPanels[gadget]);
        }
        _this.currentGadget = new filtersPanels[gadget].Class(element(by.css(filtersPanels[gadget].root)),world);
        return _this.currentGadget.mergeData();
    };

};

module.exports = GadgetFactory;