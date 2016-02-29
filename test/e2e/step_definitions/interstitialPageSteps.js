'use strict';

var pageFactory = require('./../support/pages/pageFactory');
//var browserUtils = require('./../support/helpers/browserUtils');
var cardFactory = require('./../support/ui_elements/cards/cardFactory');
//var moment = require('moment');

var steps = function(){

    this.Then(/^result card provider ID and Interstitial page provider ID are the same$/, function (callback) {
        browser.ignoreSynchronization=true;
        pageFactory.currentPage.getProviderId()
            .then(function(id){
                expect(id).to.equal(cardFactory.currentCard.providerId);
            })
            .then(function(){
                browser.ignoreSynchronization=false;
            })
            .then(callback);
    });

    this.Then(/^result card provider logo is displayed correct$/, function (callback) {
        browser.ignoreSynchronization=true;
        pageFactory.currentPage.requestProviderLogo()
            .then(function(responce){
                expect(responce.statusCode).to.equal(200);
            })
            .then(function(){
                browser.ignoreSynchronization=false;
            })
            .then(callback);
    });

};

module.exports = steps;