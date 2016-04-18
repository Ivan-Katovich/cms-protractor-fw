'use strict';

var SuperHomePage = require('./superHomePage'),
    ResultsPage = require('./resultsPages/resultsPage'),
    CarHireResultsPage = require('./resultsPages/carHireResultsPage'),
    FlightsResultsPage = require('./resultsPages/flightsResultsPage'),
    HotelsResultsPage = require('./resultsPages/hotelsResultsPage'),
    HolidaysResultsPage = require('./resultsPages/holidaysResultsPage'),
    InterstitialPage = require('./interstitialPage');

var PageFactory = function(world){
    
    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'super-home': SuperHomePage,
            'results': ResultsPage,
            'car-hire': CarHireResultsPage,
            'flights': FlightsResultsPage,
            'hotels': HotelsResultsPage,
            'holidays': HolidaysResultsPage,
            'insurance': null,
            'interstitial': InterstitialPage
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage.mergeData();
    };
};

module.exports = PageFactory;