'use strict';

var Page = require('./page');
//var cardFactory = require('./../ui_elements/cards/cardFactory');
var helper = require('./../helpers/helper');
var constants = require('./../helpers/constants');
var request = require('request-promise');
//var moment = require('moment');

var InterstitialPage = function(){

    var _this=this;

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
        return helper.elementGetter(_this._root,_this._data.elements.providerLogo).getAttribute('src')
            .then(function(src){
                console.log('Interstitial Provider ID: ' + src.replace(constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1'));
                return src.replace(constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1');
            });
    };

    _this.waitForPageLoaded = function(){
        try{
            return helper.elementGetter(_this._root,_this._data.elements.providerLogo).waitReady();
        }catch(err){
            browser.sleep(1000)
                .then(function(){
                    return helper.elementGetter(_this._root,_this._data.elements.providerLogo).waitReady();
                });
        }
    };

    _this.requestProviderLogo = function(){
        return helper.elementGetter(_this._root,_this._data.elements.providerLogo).getAttribute('src')
            .then(function(src){
                var recUri = helper.prependProtocol(src);
                return request({method: 'GET', uri: recUri, resolveWithFullResponse: true});
            });
    };


};

helper.inherits(Page,InterstitialPage);

module.exports = InterstitialPage;
