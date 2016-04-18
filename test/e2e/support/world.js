'use strict';

var Helper = require('./helpers/helper'),
    BrowserUtils = require('./helpers/browserUtils'),
    constants = require('./helpers/constants'),
    placesId = require('./helpers/placesId'),
    q = require('q'),
    moment = require('moment'),
    request = require('request-promise'),
    fs = require('fs'),
    PageFactory = require('./pages/pageFactory'),
    GadgetFactory = require('./ui_elements/gadgets/gadgetFactory'),
    FieldFactory = require('./ui_elements/fields/fieldFactory'),
    CardFactory = require('./ui_elements/cards/cardFactory');


function World() {

    this.memory = {
        text: {},
        numbers: {}
    };
    this.constants = constants;
    this.placesId = placesId;
    this.q = q;
    this.moment = moment;
    this.request = request;
    this.fs = fs;
    this.helper = new Helper(this);
    this.browserUtils = new BrowserUtils(this);
    this.pageFactory = new PageFactory(this);
    this.gadgetFactory = new GadgetFactory(this);
    this.fieldFactory = new FieldFactory(this);
    this.cardFactory = new CardFactory(this);

}

module.exports = function() {
    this.World = World;
};