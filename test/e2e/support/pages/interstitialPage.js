'use strict';

var Page = require('./page'),
    inheritance = require('./../helpers/inheritance');

var InterstitialPage = function(world){

    var _this=this;

    _this.world = world;

    _this._data = {
        elements:{
            providerLogo:{
                css: '.interstitial__logo-provider',
                isSingle: true
            }
        }
    };

    _this.marker = 'interstitial';

    _this.getProviderId = function(){
        //console.log('111111'+moment().format('MMMM Do YYYY, h:mm:ss a'));
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.providerLogo).getAttribute('src')
            .then(function(src){
                console.log('Interstitial Provider ID: ' + src.replace(_this.world.constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1'));
                return src.replace(_this.world.constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1');
            });
    };

    _this.waitForPageLoaded = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.providerLogo).waitReady()
            .then(function(){
                var deferred = _this.world.q.defer();
                deferred.resolve();
                return deferred.promise;
            },function(){
                return browser.sleep(100)
                    .then(function(){
                        return _this.world.helper.elementGetter(_this._root,_this._data.elements.providerLogo).waitReady();
                    });
            });
    };

    _this.requestProviderLogo = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.providerLogo).getAttribute('src')
            .then(function(src){
                var recUri = _this.world.helper.prependProtocol(src);
                return _this.world.request({method: 'GET', uri: recUri, resolveWithFullResponse: true});
            });
    };


};

inheritance.inherits(Page,InterstitialPage);

module.exports = InterstitialPage;
