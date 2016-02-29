'use strict';
/*jshint -W030 */

var pageFactory = require('./../../support/pages/pageFactory');
var gadgetFactory = require('./../../support/ui_elements/gadgetFactory');
var placesId = require('./../../support/helpers/placesId');
var moment = require('moment');
//var browserUtils = require('./../../support/helpers/browserUtils');

var steps = function(){

    this.When(/^I wait for all results load$/, function (callback) {
        browser.ignoreSynchronization = true;
        pageFactory.currentPage.waitForResults()
            .then(function(){
                browser.ignoreSynchronization = false;
            })
            .then(callback);
    });

    this.When(/^I click on the (.+)(?:st|th|nd|rd) result card View Deal button$/, function (cardNumber,callback) {
        cardNumber = cardNumber -1;
        pageFactory.currentPage.clickOnResultCardViewDeal(cardNumber)
            .then(callback);
    });

    this.Then(/^results page main title should be visible$/, function (callback) {
        pageFactory.currentPage.isMainTitleVisible()
            .then(function(isVisible){
                expect(isVisible).to.be.true;
                callback();
            });
    });

    this.Then(/^results page url should contain the right items$/, function (callback) {
        pageFactory.currentPage.getUrlItems()
            .then(function(urlItems){
                var data = gadgetFactory.currentSearchGadget._data.fields;
                //console.log(urlItems);
                //console.log('========================');
                //console.log(data);
                switch(pageFactory.currentPage.marker){
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
                        expect(placesId[data['pick-up-from'].value]).to.equal(urlItems['pick-up-from-id']);
                        expect(data['pick-up-date'].value).to.equal(urlItems['pick-up-date']);
                        expect(data['pick-up-time'].value).to.equal(urlItems['pick-up-time']);
                        expect(data['drop-off-date'].value).to.equal(urlItems['drop-off-date']);
                        expect(data['drop-off-time'].value).to.equal(urlItems['drop-off-time']);
                        expect(data['drivers-age'].value).to.equal(urlItems['drivers-age']);
                        break;
                    case 'holidays':
                        expect(placesId[data['depart-from-main'].value]).to.equal(urlItems['depart-from-main']);
                        if(urlItems['depart-from-first-slave']){
                            expect(placesId[data['depart-from-first-slave'].value]).to.equal(urlItems['depart-from-first-slave']);
                        }
                        expect(placesId[data['holiday-destination'].value]).to.equal(urlItems['holiday-destination']);
                        expect(data.depart.value).to.equal(urlItems.depart);
                        expect(data.nights.value).to.equal(urlItems.nights);
                        expect(data.adult.value).to.equal(urlItems.adult);
                        expect(data.child.value).to.equal(urlItems.child);
                        if(urlItems.child !== '0'){
                            expect(data['first-child-age'].value).to.equal(urlItems['first-child-age']);
                        }
                        break;
                    case 'hotels':
                        expect(placesId[data.destination.value]).to.equal(urlItems['destination-id']);
                        expect(data['check-in'].value).to.equal(urlItems['check-in']);
                        var duration = moment(data['check-in'].value).to(data['check-out'].value).match(/\d{1,2}/)[0];
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
                        throw 'Unknown page: ' +pageFactory.currentPage.marker;

                }
                callback();
            });
    });

};

module.exports = steps;
