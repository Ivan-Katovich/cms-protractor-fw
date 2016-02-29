'use strict';

//var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var ResultsPage = require('./resultsPage');
var helper = require('./../../helpers/helper');
var constants = require('./../../helpers/constants');
//var cardFactory = require('./../../ui_elements/cards/cardFactory');

var HolidaysResultsPage = function(){

    var _this = this;

    _this.marker = 'holidays';

    _this._data = {
        cards: {
            resultCards: {
                css: '.card--holidays',
                parent: _this._root,
                isSingle: false,
                type: 'holidays'
            }
        }
    };

    _this.getUrlItems = function(){
        var urlItems = {};
        return browser.driver.getCurrentUrl()
            .then(function(url){
                //console.log(url);
                url = url.replace(constants.REGEXP_URL_MAIN_PART,'');
                urlItems['depart-from-main'] = url.replace(constants.REGEXP_TO_CHECK_HOLIDAYS_RESULTS_URL_ITEMS,'$1');
                if(url.replace(constants.REGEXP_TO_CHECK_HOLIDAYS_RESULTS_URL_ITEMS,'$2')){
                    urlItems['depart-from-first-slave'] = url.match(/(:\w{24})/g)[0].replace(/:/,'');
                }
                urlItems['holiday-destination'] = url.replace(constants.REGEXP_TO_CHECK_HOLIDAYS_RESULTS_URL_ITEMS,'$3');
                urlItems.depart = url.replace(constants.REGEXP_TO_CHECK_HOLIDAYS_RESULTS_URL_ITEMS,'$4');
                urlItems.nights = url.replace(constants.REGEXP_TO_CHECK_HOLIDAYS_RESULTS_URL_ITEMS,'$5');
                urlItems.adult = url.replace(constants.REGEXP_TO_CHECK_HOLIDAYS_RESULTS_URL_ITEMS,'$6');
                urlItems.child = url.match(/:C\d{1,2}/g) ? url.match(/:C\d{1,2}/g).length+'' : '0';
                urlItems['first-child-age'] = url.match(/:C\d{1,2}/g) ? url.match(/:C\d{1,2}/g)[0].replace(/:C/,'') : null;
                return urlItems;

            });
    };


};

helper.inherits(ResultsPage,HolidaysResultsPage);

module.exports = HolidaysResultsPage;



