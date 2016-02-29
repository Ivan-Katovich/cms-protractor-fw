'use strict';

var helper = require('./../../helpers/helper');
var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var cardFactory = require('./../../ui_elements/cards/cardFactory');
var Page = require('./../page');
var q = require('q');

var ResultsPage = function(){};

helper.inherits(Page,ResultsPage);

ResultsPage.prototype._resultsData = {
    elements:{
        mainTitle: {
            css: '.results-summary__title',
            isSingle: true
        },
        loadPercentage: {
            css: '.search-progress',
            isSingle: false
        }
    }
};

ResultsPage.prototype.isMainTitleVisible = function(){
    return helper.elementGetter(this._root,this._resultsData.elements.mainTitle).isDisplayed();
};

ResultsPage.prototype.waitForResults = function(){
    return helper.elementGetter(this._root,this._resultsData.elements.loadPercentage).waitForDisappeared();
};

ResultsPage.prototype.clickOnResultCardViewDeal = function(number){
    return cardFactory.getCard(this._data.cards.resultCards,number).clickOnViewDeal();
};

ResultsPage.prototype.initSearchGadget = function(){
    return gadgetFactory.getSearchGadget(this.marker);
};

ResultsPage.prototype.constructUrlForPage = function(profile){
    var deferred = q.defer();
    gadgetFactory.getSearchGadget(this.marker);
    gadgetFactory.currentSearchGadget.mergeProfile(profile);
    deferred.resolve(gadgetFactory.currentSearchGadget.urlConstructor());
    return deferred.promise;
};

module.exports = ResultsPage;
