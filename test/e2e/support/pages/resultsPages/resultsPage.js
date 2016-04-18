'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var ResultsPage = function(){};

inheritance.inherits(Page,ResultsPage);

ResultsPage.prototype._resultsData = {
    elements:{
        'main-title': {
            css: '.results-summary__title',
            isSingle: true
        },
        'load-percentage': {
            css: '.search-progress',
            isSingle: false
        }
    },
    fields:{
        'show-all-button': {
            css: '.filter-bar__show-all-btn',
            parent: element(by.css('body')),
            isSingle: true,
            type: 'button',
            value: false
        },
        'filters-button': {
            css: '.offscreen-filter-button--filter-bar',
            parent: element(by.css('body')),
            isSingle: true,
            type: 'button',
            value: false
        },
        'search-button': {
            css: '.header-button--search',
            parent: element(by.css('body')),
            isSingle: true,
            type: 'button',
            value: false
        }
    },
    cards: {}
};

ResultsPage.prototype.mergeData = function(){
    this._data.elements = this.world.helper.mergeObjectsWithoutSameKeys(this._data.elements,this._commonData.elements);
    this._data.fields = this.world.helper.mergeObjectsWithoutSameKeys(this._data.fields,this._commonData.fields);
    this._data.elements = this.world.helper.mergeObjectsWithoutSameKeys(this._data.elements,this._resultsData.elements);
    this._data.fields = this.world.helper.mergeObjectsWithoutSameKeys(this._data.fields,this._resultsData.fields);
    return this;
};

ResultsPage.prototype.isMainTitleVisible = function(){
    return this.world.helper.elementGetter(this._root,this._data.elements['main-title']).isDisplayed();
};

ResultsPage.prototype.waitForResults = function(){
    return this.world.helper.elementGetter(this._root,this._data.elements['load-percentage']).waitForDisappeared();
};

ResultsPage.prototype.clickOnResultCardViewDeal = function(number){
    return this.world.cardFactory.getCard(this._data.cards.resultCards,number).clickOnViewDeal();
};

ResultsPage.prototype.initSearchGadget = function(){
    var _this = this;
    return _this.world.gadgetFactory.getSearchGadget(_this.marker).isGadgetVisible()
        .then(function(is){
            if(!is){
                return _this.world.fieldFactory.getField(_this._data.fields['search-button']).clickOn()
                    .then(function(){
                        return _this.world.gadgetFactory.currentGadget.waitForGadgetVisibleAndStable();
                    });
            }
        });
};

ResultsPage.prototype.initFiltersPanel = function(){
    var _this = this;
    return _this.world.gadgetFactory.getFiltersPanel(_this.marker).isGadgetVisible()
        .then(function(is){
            if(!is){
                return _this.world.fieldFactory.getField(_this._data.fields['filters-button']).clickOn()
                    .then(function(){
                        return _this.world.gadgetFactory.currentGadget.waitForGadgetVisibleAndStable();
                    });
            }
        });
};

ResultsPage.prototype.constructUrlForPage = function(profile){
    var deferred = this.world.q.defer();
    this.world.gadgetFactory.getSearchGadget(this.marker);
    this.world.gadgetFactory.currentGadget.mergeProfile(profile);
    deferred.resolve(this.world.gadgetFactory.currentGadget.urlConstructor());
    return deferred.promise;
};

ResultsPage.prototype.moveGadgetSliderHandler = function(field,handler,px){
    return this.world.gadgetFactory.currentGadget.moveSliderHandler(field,handler,px);
};

ResultsPage.prototype.accordionGadgetField = function(field,status){
    return this.world.gadgetFactory.currentGadget.accordionField(field,status);
};

ResultsPage.prototype.completeGadgetCheckboxlistByPropNumber = function(field,num){
    return this.world.gadgetFactory.currentGadget.completeCheckboxlistByPropNumber(field,num);
};

ResultsPage.prototype.clearGadgetFilter = function(field){
    return this.world.gadgetFactory.currentGadget.clearFilter(field);
};

module.exports = ResultsPage;

