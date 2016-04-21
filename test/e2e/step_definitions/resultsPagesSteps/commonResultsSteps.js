'use strict';
/*jshint -W030 */

var steps = function(){

    this.When(/^I wait for all results load$/, function () {
        var _this = this;
        browser.ignoreSynchronization = true;
        return _this.pageFactory.currentPage.waitForResults()
            .then(function(){
                browser.ignoreSynchronization = false;
                var deferred = _this.q.defer();
                deferred.resolve();
                return deferred.promise;
            });
    });

    this.When(/^I (close|open) '(.+)' filters field$/, function (status,field) {
        return this.pageFactory.currentPage.accordionGadgetField(field,status);
    });

    this.When(/^I click on the (.+)(?:st|th|nd|rd) result card View Deal button$/, function (cardNumber) {
        cardNumber = cardNumber -1;
        return this.pageFactory.currentPage.clickOnResultCardViewDeal(cardNumber);
    });

    this.When(/^I (?:select|unselect) (\d+)(?:st|th|nd|rd) checkbox in '(.+)' checkboxlist$/, function (num,field) {
        return this.pageFactory.currentPage.completeGadgetCheckboxlistByPropNumber(field,num);
    });

    this.When(/^I move '(left|right)' of '(.+)' slider on '(.+)' pixels$/, function (handler,field,px) {
        return this.pageFactory.currentPage.moveGadgetSliderHandler(field,handler,px);
    });

    this.When(/^I clear '(.+)' filter$/, function (field) {
        return this.pageFactory.currentPage.clearGadgetFilter(field);
    });

    this.When(/^I open '(Filters Panel|Search Gadget)'$/, function (gadget) {
        if(gadget === 'Filters Panel'){
            return this.pageFactory.currentPage.initFiltersPanel();
        }else{
            return this.pageFactory.currentPage.initSearchGadget()
        }
    });

    this.Then(/^results page main title should be visible$/, function () {
        return this.pageFactory.currentPage.isMainTitleVisible()
            .then(function(isVisible){
                return expect(isVisible).to.be.true;
            });
    });

    this.Then(/^results page url should contain the right items$/, function () {
        var _this = this;
        return _this.pageFactory.currentPage.getUrlItems()
            .then(function(urlItems){
                var data = _this.gadgetFactory.currentGadget._data.fields;
                switch(_this.pageFactory.currentPage.marker){
                    case 'flights':
                        return _this.helper.emptyPromise()
                            .then(function(){
                                return expect(data['flying-from'].value).to.contain(urlItems['flying-from']);
                            })
                            .then(function(){
                                return expect(data.depart.value).to.equal(urlItems.depart);
                            })
                            .then(function(){
                                return expect(data['flying-to'].value).to.contain(urlItems['flying-to']);
                            })
                            .then(function(){
                                if(urlItems.return){
                                    return expect(data.return.value).to.equal(urlItems.return);
                                }else{
                                    var deferred = _this.q.defer();
                                    deferred.resolve();
                                    return deferred.promise;
                                }
                            })
                            .then(function(){
                                return expect(data.adult.value).to.equal(urlItems.adult);
                            })
                            .then(function(){
                                return expect(data['age2-11'].value).to.equal(urlItems['age2-11']);
                            })
                            .then(function(){
                                return expect(data.under2.value).to.equal(urlItems.under2);
                            })
                            .then(function(){
                                return expect(data['cabin-class'].value).to.contain(urlItems['cabin-class']);
                            })
                            .then(function(){
                                return expect(data['direct-flights-only'].value+'').to.equal(urlItems['direct-flights-only']);
                            })
                            .then(function(){
                                var isReturn = data['type-of-flight'].value === 'Return' ? 'true' : 'false';
                                return expect(isReturn).to.equal(urlItems['type-of-flight']);
                            });
                    case 'car-hire':
                        return _this.helper.emptyPromise()
                            .then(function(){
                                return expect(_this.placesId[data['pick-up-from'].value]).to.equal(urlItems['pick-up-from-id']);
                            })
                            .then(function(){
                                return expect(data['pick-up-date'].value).to.equal(urlItems['pick-up-date']);
                            })
                            .then(function(){
                                return expect(data['pick-up-time'].value).to.equal(urlItems['pick-up-time']);
                            })
                            .then(function(){
                                return expect(data['drop-off-date'].value).to.equal(urlItems['drop-off-date']);
                            })
                            .then(function(){
                                return expect(data['drop-off-time'].value).to.equal(urlItems['drop-off-time']);
                            })
                            .then(function(){
                                return expect(data['drivers-age'].value).to.equal(urlItems['drivers-age']);
                            });
                    case 'holidays':
                        return _this.helper.emptyPromise()
                            .then(function(){
                                return expect(_this.placesId[data['depart-from-main'].value]).to.equal(urlItems['depart-from-main']);
                            })
                            .then(function(){
                                if(urlItems['depart-from-first-slave']){
                                    return expect(_this.placesId[data['depart-from-first-slave'].value]).to.equal(urlItems['depart-from-first-slave']);
                                }else{
                                    var deferred = _this.q.defer();
                                    deferred.resolve();
                                    return deferred.promise;
                                }
                            })
                            .then(function(){
                                return expect(_this.placesId[data['holiday-destination'].value]).to.equal(urlItems['holiday-destination']);
                            })
                            .then(function(){
                                return expect(data.depart.value).to.equal(urlItems.depart);
                            })
                            .then(function(){
                                return expect(data.nights.value).to.equal(urlItems.nights);
                            })
                            .then(function(){
                                return expect(data.adult.value).to.equal(urlItems.adult);
                            })
                            .then(function(){
                                return expect(data.child.value).to.equal(urlItems.child);
                            })
                            .then(function(){
                                if(urlItems.child !== '0'){
                                    return expect(data['first-child-age'].value).to.equal(urlItems['first-child-age']);
                                }else{
                                    var deferred = _this.q.defer();
                                    deferred.resolve();
                                    return deferred.promise;
                                }
                            });
                    case 'hotels':
                        return _this.helper.emptyPromise()
                            .then(function(){
                                return expect(_this.placesId[data.destination.value]).to.equal(urlItems['destination-id']);
                            })
                            .then(function(){
                                return expect(data['check-in'].value).to.equal(urlItems['check-in']);
                            })
                            .then(function(){
                                var duration = _this.moment(data['check-in'].value).to(data['check-out'].value).match(/\d{1,2}/)[0];
                                return expect(duration).to.equal(urlItems.duration);
                            })
                            .then(function(){
                                if(data.guests.value !== 'More options...'){
                                    var guests = data.guests.value.match(/\d/g);
                                    var adults = guests[0];
                                    var rooms = guests[1] ? guests[1] : '1';
                                    var adultsPerRooms = (adults/rooms)+'';
                                    return _this.helper.emptyPromise()
                                        .then(function(){
                                            return expect(adultsPerRooms).to.equal(urlItems.adults);
                                        })
                                        .then(function(){
                                            if(rooms === '2'){
                                                return expect(adultsPerRooms).to.equal(urlItems['adults-second-room']);
                                            }else{
                                                var deferred = _this.q.defer();
                                                deferred.resolve();
                                                return deferred.promise;
                                            }
                                        })
                                        .then(function(){
                                            return expect(rooms).to.equal(urlItems['rooms-number']);
                                        });
                                }else{
                                    return _this.helper.emptyPromise()
                                        .then(function(){
                                            return expect(data.adults.value).to.equal(urlItems.adults);
                                        })
                                        .then(function(){
                                            if(urlItems['first-child-age']){
                                                return expect(data['first-child-age'].value).to.equal(urlItems['first-child-age']);
                                            }else{
                                                var deferred = _this.q.defer();
                                                deferred.resolve();
                                                return deferred.promise;
                                            }
                                        })
                                        .then(function(){
                                            if(urlItems['adults-second-room']){
                                                return expect(data['adults-second-room'].value).to.equal(urlItems['adults-second-room']);
                                            }else{
                                                var deferred = _this.q.defer();
                                                deferred.resolve();
                                                return deferred.promise;
                                            }
                                        })
                                        .then(function(){
                                            if(urlItems['first-child-age-second-room']){
                                                return expect(data['first-child-age-second-room'].value).to.equal(urlItems['first-child-age-second-room']);
                                            }else{
                                                var deferred = _this.q.defer();
                                                deferred.resolve();
                                                return deferred.promise;
                                            }
                                        });
                                }
                            });
                    default:
                        throw new Error('Unknown page: ' +_this.pageFactory.currentPage.marker);

                }
            });
    });

    this.Then(/^the displayed number of (filtered|all) results should be (less or equals to|more or equals to|more then|less then|the same as) remembered (filtered|all) results number$/, function (displayedRes,comparator,rememberedRes) {
        var _this = this;
        return _this.pageFactory.currentPage.getTextValueOf('fields','filters-button')
            .then(function(text) {
                if (displayedRes === 'filtered') {
                    return text.match(/\d+/g)[0];
                } else {
                    if (text.match(/\d+/g).length === 2) {
                        return text.match(/\d+/g)[1];
                    } else {
                        return text.match(/\d+/g)[0];
                    }
                }
            })
            .then(function(displayed){
                if(rememberedRes === 'filtered'){
                    return {displayed: displayed, remembered: _this.memory.numbers['filters-button'][0]};
                }else{
                    if(_this.memory.numbers['filters-button'].length === 2){
                        return {displayed: displayed, remembered: _this.memory.numbers['filters-button'][1]};
                    }else{
                        return {displayed: displayed, remembered: _this.memory.numbers['filters-button'][0]};
                    }
                }
            })
            .then(function(dataObject){
                console.log(dataObject);
                // var deferred = _this.q.defer();
                switch(comparator){
                    case 'the same as':
                        return expect(dataObject.displayed*1).to.equal(dataObject.remembered*1);
                    case 'less then':
                        return expect(dataObject.displayed*1).to.be.below(dataObject.remembered*1);
                    case 'more then':
                        return expect(dataObject.displayed*1).to.be.above(dataObject.remembered*1);
                    case 'more or equals to':
                        return expect(dataObject.displayed*1).to.be.at.least(dataObject.remembered*1);
                    case 'less or equals to':
                        return expect(dataObject.displayed*1).to.be.at.most(dataObject.remembered*1);
                    default:
                        throw new Error('Wrong type of comparing: '+comparator);
                }
            });
    });

    this.Then(/^displayed (properties|offers) number should be (less or equals to|more or equals to|more then|less then|the same as) remembered$/, function (res,comparator) {
        var _this = this;
        return _this.pageFactory.currentPage.getTextValueOf('fields','filters-button')
            .then(function(text){
                if(res === 'properties'){
                    return {displayed: text.match(/\d+/g)[0], remembered: _this.memory.numbers['filters-button'][0]};
                }else{
                    return {displayed: text.match(/\d+/g)[1], remembered: _this.memory.numbers['filters-button'][1]};
                }
            })
            .then(function(dataObject){
                console.log(dataObject);
                switch(comparator){
                    case 'the same as':
                        return expect(dataObject.displayed*1).to.equal(dataObject.remembered*1);
                    case 'less then':
                        return expect(dataObject.displayed*1).to.be.below(dataObject.remembered*1);
                    case 'more then':
                        return expect(dataObject.displayed*1).to.be.above(dataObject.remembered*1);
                    case 'more or equals to':
                        return expect(dataObject.displayed*1).to.be.at.least(dataObject.remembered*1);
                    case 'less or equals to':
                        return expect(dataObject.displayed*1).to.be.at.most(dataObject.remembered*1);
                    default:
                        throw new Error('Wrong type of comparing: '+comparator);
                }
            });
    });

};

module.exports = steps;
