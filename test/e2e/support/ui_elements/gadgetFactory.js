'use strict';

var CarHireSearchGadget = require('./carHireSearchGadget');
var FlightsSearchGadget = require('./flightsSearchGadget');
var HotelsSearchGadget = require('./hotelsSearchGadget');
var HolidaysSearchGadget = require('./holidaysSearchGadget');

var gadgetFactory = {
    currentSearchGadget: 'undefined',
    getSearchGadget: function(gadget){
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
        this.currentSearchGadget = new searchGadgets[gadget].Class(element(by.css(searchGadgets[gadget].root)));
    }
};

module.exports = gadgetFactory;