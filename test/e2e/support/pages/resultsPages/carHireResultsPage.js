'use strict';

//var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var ResultsPage = require('./resultsPage');
var helper = require('./../../helpers/helper');
var constants = require('./../../helpers/constants');

var CarHireResultsPage = function(){

    var _this = this;

    _this.marker = 'car-hire';

    _this._data = {
        cards: {
            resultCards: {
                css: 'car-hire-card',
                parent: _this._root,
                isSingle: false,
                type: 'car-hire'
            }
        }
    };

    _this.getUrlItems = function(){
        var urlItems = {};
        return browser.driver.getCurrentUrl()
            .then(function(url){
                url = url.replace(constants.REGEXP_URL_MAIN_PART,'');
                urlItems['pick-up-from-id'] = url.replace(constants.REGEXP_TO_CHECK_CARHIRE_RESULTS_URL_ITEMS,'$1');
                urlItems['pick-up-date'] = url.replace(constants.REGEXP_TO_CHECK_CARHIRE_RESULTS_URL_ITEMS,'$3');
                urlItems['pick-up-time'] = url.replace(constants.REGEXP_TO_CHECK_CARHIRE_RESULTS_URL_ITEMS,'$4');
                urlItems['drop-off-date'] = url.replace(constants.REGEXP_TO_CHECK_CARHIRE_RESULTS_URL_ITEMS,'$5');
                urlItems['drop-off-time'] = url.replace(constants.REGEXP_TO_CHECK_CARHIRE_RESULTS_URL_ITEMS,'$6');
                urlItems['drivers-age'] = url.replace(constants.REGEXP_TO_CHECK_CARHIRE_RESULTS_URL_ITEMS,'$7');
                return urlItems;

            });
    };


};

helper.inherits(ResultsPage,CarHireResultsPage);

module.exports = CarHireResultsPage;
