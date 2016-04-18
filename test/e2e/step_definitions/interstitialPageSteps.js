'use strict';

var steps = function(){

    // this.World = require('./../support/world.js').World;

    this.Then(/^result card provider ID and Interstitial page provider ID are the same$/, function (callback) {
        var _this = this;
        browser.ignoreSynchronization=true;
        _this.pageFactory.currentPage.getProviderId()
            .then(function(id){
                expect(id).to.equal(_this.cardFactory.currentCard.providerId);
            })
            .then(function(){
                browser.ignoreSynchronization=false;
            })
            .then(callback);
    });

    this.Then(/^result card provider logo is displayed correct$/, function (callback) {
        browser.ignoreSynchronization=true;
        this.pageFactory.currentPage.requestProviderLogo()
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