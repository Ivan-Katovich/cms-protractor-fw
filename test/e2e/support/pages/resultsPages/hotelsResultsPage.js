'use strict';

var ResultsPage = require('./resultsPage'),
    inheritance = require('./../../helpers/inheritance');

var HotelsResultsPage = function(world){

    var _this = this;

    _this.world = world;

    _this.marker = 'hotels';

    _this._data = {
        elements: {},
        fields: {},
        cards: {
            resultCards: {
                css: '.hotel-result-card',
                parent: _this._root,
                isSingle: false,
                type: 'hotels'
            }
        }
    };

    _this.getUrlItems = function(){
        var urlItems = {};
        return browser.driver.getCurrentUrl()
            .then(function(url){
                //console.log(url);
                url = url.replace(_this.world.constants.REGEXP_URL_MAIN_PART,'');
                urlItems['destination-id'] = url.replace(_this.world.constants.REGEXP_TO_CHECK_HOTELS_RESULTS_URL_ITEMS,'$1');
                urlItems['check-in'] = url.replace(_this.world.constants.REGEXP_TO_CHECK_HOTELS_RESULTS_URL_ITEMS,'$2');
                urlItems.duration = url.replace(_this.world.constants.REGEXP_TO_CHECK_HOTELS_RESULTS_URL_ITEMS,'$3');
                var firstRoom = url.replace(_this.world.constants.REGEXP_TO_CHECK_HOTELS_RESULTS_URL_ITEMS,'$4');
                urlItems.adults = firstRoom.match(/A\d/)[0].replace(/A/,'');
                if(firstRoom.match(/:C\d{1,2}/g)){
                    urlItems['first-child-age'] = firstRoom.match(/:C\d{1,2}/g)[0].replace(/:C/,'');
                }
                var secondRoom = url.replace(_this.world.constants.REGEXP_TO_CHECK_HOTELS_RESULTS_URL_ITEMS,'$7');
                if(secondRoom){
                    urlItems['rooms-number'] = '2';
                    urlItems['adults-second-room'] = secondRoom.match(/A\d/)[0].replace(/A/,'');
                    if(secondRoom.match(/:C\d{1,2}/g)){
                        urlItems['first-child-age-second-room'] = secondRoom.match(/:C\d{1,2}/g)[0].replace(/:C/,'');
                    }

                }else{
                    urlItems['rooms-number'] = '1';
                }
                return urlItems;

            });
    };


};

inheritance.inherits(ResultsPage,HotelsResultsPage);

module.exports = HotelsResultsPage;


