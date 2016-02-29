'use strict';

//var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var ResultsPage = require('./resultsPage');
var cardFactory = require('./../../ui_elements/cards/cardFactory');
var helper = require('./../../helpers/helper');
var constants = require('./../../helpers/constants');

var FlightsResultsPage = function(){

    var _this = this;

    _this.marker = 'flights';

    _this._data = {
        cards: {
            resultCards: {
                css: 'flights-card',
                parent: _this._root,
                isSingle: false,
                type: 'flights'
            }
        }
    };

    _this.getPageCardsFlightsNumber = function(){
        return cardFactory.getCard(_this._data.cards.resultCards,0).getNumberOfFlights();
    };

    _this.getUrlItems = function(){
        var urlItems = {};
        return browser.driver.getCurrentUrl()
            .then(function(url){
                url = url.replace(constants.REGEXP_URL_MAIN_PART,'');
                urlItems['flying-from'] = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$1');
                urlItems.depart = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$2');
                urlItems['flying-to'] = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$3');
                urlItems.adult = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$5');
                urlItems['age2-11'] = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$6');
                urlItems.under2 = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$7');
                urlItems['cabin-class'] = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$8');
                urlItems['unknown-item'] = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$9');
                urlItems['direct-flights-only'] = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$10');
                urlItems['type-of-flight'] = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$11');
                if(urlItems['type-of-flight'] === 'true'){
                    urlItems.return = url.replace(constants.REGEXP_TO_CHECK_FLIGHTS_RESULTS_URL_ITEMS,'$4');
                }
                return urlItems;

            });
    };

};

helper.inherits(ResultsPage,FlightsResultsPage);

module.exports = FlightsResultsPage;

