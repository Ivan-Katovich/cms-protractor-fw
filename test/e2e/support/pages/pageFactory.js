'use strict';

var SuperHomePage = require('./superHomePage');
var ResultsPage = require('./resultsPages/resultsPage');
var CarHireResultsPage = require('./resultsPages/carHireResultsPage');
var FlightsResultsPage = require('./resultsPages/flightsResultsPage');
var HotelsResultsPage = require('./resultsPages/hotelsResultsPage');
var HolidaysResultsPage = require('./resultsPages/holidaysResultsPage');
var InterstitialPage = require('./interstitialPage');

var pageFactory = {
    currentPage: 'undefined',
    getPage: function(page){
        var pages = {
            'super-home': SuperHomePage,
            'results': ResultsPage,
            'car-hire': CarHireResultsPage,
            'flights': FlightsResultsPage,
            'hotels': HotelsResultsPage,
            'holidays': HolidaysResultsPage,
            'insurance': 'insurance',
            'interstitial': InterstitialPage
        };
        this.currentPage = new pages[page]();
    }
};

module.exports = pageFactory;