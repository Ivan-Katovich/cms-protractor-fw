'use strict';

var steps = function(){

    this.Then(/^result card provider ID and Interstitial page provider ID are the same$/, function () {
        var _this = this;
        browser.ignoreSynchronization=true;
        return _this.pageFactory.currentPage.getProviderId()
            .then(function(id){
                return expect(id).to.equal(_this.cardFactory.currentCard.providerId);
            })
            .then(function(){
                browser.ignoreSynchronization=false;
                var deferred = _this.q.defer();
                deferred.resolve();
                return deferred.promise;
            })
    });

    this.Then(/^result card provider logo is displayed correct$/, function () {
        var _this = this;
        browser.ignoreSynchronization=true;
        return _this.pageFactory.currentPage.requestProviderLogo()
            .then(function(responce){
                return expect(responce.statusCode).to.equal(200);
            })
            .then(function(){
                browser.ignoreSynchronization=false;
                var deferred = _this.q.defer();
                deferred.resolve();
                return deferred.promise;
            })
    });

};

module.exports = steps;