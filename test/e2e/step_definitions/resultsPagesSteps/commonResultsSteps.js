'use strict';
/*jshint -W030 */

var steps = function(){

    // this.World = require('./../../support/world.js').World;

    this.When(/^I wait for all results load$/, function (callback) {
        browser.ignoreSynchronization = true;
        this.pageFactory.currentPage.waitForResults()
            .then(function(){
                browser.ignoreSynchronization = false;
            })
            .then(callback);
    });

    this.When(/^I (close|open) '(.+)' filters field$/, function (status,field,callback) {
        this.pageFactory.currentPage.accordionGadgetField(field,status)
            .then(function(){
                callback();
            });
    });

    this.When(/^I click on the (.+)(?:st|th|nd|rd) result card View Deal button$/, function (cardNumber,callback) {
        cardNumber = cardNumber -1;
        this.pageFactory.currentPage.clickOnResultCardViewDeal(cardNumber)
            .then(callback);
    });

    this.When(/^I (?:select|unselect) (\d+)(?:st|th|nd|rd) checkbox in '(.+)' checkboxlist$/, function (num,field,callback) {
        this.pageFactory.currentPage.completeGadgetCheckboxlistByPropNumber(field,num)
            .then(function(){
                callback();
            });
    });

    this.When(/^I move '(left|right)' of '(.+)' slider on '(.+)' pixels$/, function (handler,field,px,callback) {
        this.pageFactory.currentPage.moveGadgetSliderHandler(field,handler,px)
            .then(callback);
    });

    this.When(/^I clear '(.+)' filter$/, function (field,callback) {
        this.pageFactory.currentPage.clearGadgetFilter(field)
            .then(callback);
    });

    this.When(/^I open '(Filters Panel|Search Gadget)'$/, function (gadget,callback) {
        if(gadget === 'Filters Panel'){
            this.pageFactory.currentPage.initFiltersPanel()
                .then(function(){
                    callback();
                });
        }else{
            this.pageFactory.currentPage.initSearchGadget()
                .then(function(){
                    callback();
                });
        }

    });

    this.Then(/^results page main title should be visible$/, function (callback) {
        this.pageFactory.currentPage.isMainTitleVisible()
            .then(function(isVisible){
                expect(isVisible).to.be.true;
                callback();
            });
    });

    this.Then(/^results page url should contain the right items$/, function (callback) {
        var _this = this;
        _this.pageFactory.currentPage.getUrlItems()
            .then(function(urlItems){
                var data = _this.gadgetFactory.currentGadget._data.fields;
                //console.log(urlItems);
                //console.log('========================');
                //console.log(data);
                switch(_this.pageFactory.currentPage.marker){
                    case 'flights':
                        expect(data['flying-from'].value).to.contain(urlItems['flying-from']);
                        expect(data.depart.value).to.equal(urlItems.depart);
                        expect(data['flying-to'].value).to.contain(urlItems['flying-to']);
                        if(urlItems.return){
                            expect(data.return.value).to.equal(urlItems.return);
                        }
                        expect(data.adult.value).to.equal(urlItems.adult);
                        expect(data['age2-11'].value).to.equal(urlItems['age2-11']);
                        expect(data.under2.value).to.equal(urlItems.under2);
                        expect(data['cabin-class'].value).to.contain(urlItems['cabin-class']);
                        expect(data['direct-flights-only'].value+'').to.equal(urlItems['direct-flights-only']);
                        var isReturn = data['type-of-flight'].value === 'Return' ? 'true' : 'false';
                        expect(isReturn).to.equal(urlItems['type-of-flight']);
                        break;
                    case 'car-hire':
                        expect(_this.placesId[data['pick-up-from'].value]).to.equal(urlItems['pick-up-from-id']);
                        expect(data['pick-up-date'].value).to.equal(urlItems['pick-up-date']);
                        expect(data['pick-up-time'].value).to.equal(urlItems['pick-up-time']);
                        expect(data['drop-off-date'].value).to.equal(urlItems['drop-off-date']);
                        expect(data['drop-off-time'].value).to.equal(urlItems['drop-off-time']);
                        expect(data['drivers-age'].value).to.equal(urlItems['drivers-age']);
                        break;
                    case 'holidays':
                        expect(_this.placesId[data['depart-from-main'].value]).to.equal(urlItems['depart-from-main']);
                        if(urlItems['depart-from-first-slave']){
                            expect(_this.placesId[data['depart-from-first-slave'].value]).to.equal(urlItems['depart-from-first-slave']);
                        }
                        expect(_this.placesId[data['holiday-destination'].value]).to.equal(urlItems['holiday-destination']);
                        expect(data.depart.value).to.equal(urlItems.depart);
                        expect(data.nights.value).to.equal(urlItems.nights);
                        expect(data.adult.value).to.equal(urlItems.adult);
                        expect(data.child.value).to.equal(urlItems.child);
                        if(urlItems.child !== '0'){
                            expect(data['first-child-age'].value).to.equal(urlItems['first-child-age']);
                        }
                        break;
                    case 'hotels':
                        expect(_this.placesId[data.destination.value]).to.equal(urlItems['destination-id']);
                        expect(data['check-in'].value).to.equal(urlItems['check-in']);
                        var duration = _this.moment(data['check-in'].value).to(data['check-out'].value).match(/\d{1,2}/)[0];
                        expect(duration).to.equal(urlItems.duration);
                        if(data.guests.value !== 'More options...'){
                            var guests = data.guests.value.match(/\d/g);
                            var adults = guests[0];
                            var rooms = guests[1] ? guests[1] : '1';
                            var adultsPerRooms = (adults/rooms)+'';
                            expect(adultsPerRooms).to.equal(urlItems.adults);
                            if(rooms === '2'){
                                expect(adultsPerRooms).to.equal(urlItems['adults-second-room']);
                            }
                            expect(rooms).to.equal(urlItems['rooms-number']);
                        }else{
                            expect(data.adults.value).to.equal(urlItems.adults);
                            if(urlItems['first-child-age']){
                                expect(data['first-child-age'].value).to.equal(urlItems['first-child-age']);
                            }
                            if(urlItems['adults-second-room']){
                                expect(data['adults-second-room'].value).to.equal(urlItems['adults-second-room']);
                            }
                            if(urlItems['first-child-age-second-room']){
                                expect(data['first-child-age-second-room'].value).to.equal(urlItems['first-child-age-second-room']);
                            }
                        }
                        break;
                    default:
                        throw 'Unknown page: ' +_this.pageFactory.currentPage.marker;

                }
                callback();
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
                // return deferred.promise;
            });
    });

    this.Then(/^displayed (properties|offers) number should be (less or equals to|more or equals to|more then|less then|the same as) remembered$/, function (res,comparator,callback) {
        var _this = this;
        _this.pageFactory.currentPage.getTextValueOf('fields','filters-button')
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
                        expect(dataObject.displayed*1).to.equal(dataObject.remembered*1);
                        break;
                    case 'less then':
                        expect(dataObject.displayed*1).to.be.below(dataObject.remembered*1);
                        break;
                    case 'more then':
                        expect(dataObject.displayed*1).to.be.above(dataObject.remembered*1);
                        break;
                    case 'more or equals to':
                        expect(dataObject.displayed*1).to.be.at.least(dataObject.remembered*1);
                        break;
                    case 'less or equals to':
                        expect(dataObject.displayed*1).to.be.at.most(dataObject.remembered*1);
                        break;
                    default:
                        throw new Error('Wrong type of comparing: '+comparator);
                }
                callback();
            });
    });

};

module.exports = steps;
