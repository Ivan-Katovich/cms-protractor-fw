'use strict';

var Dropdown = require('./dropdown');
var Autocomplete = require('./autocomplete');
var DataPicker = require('./datapicker');
var Radiobuttons = require('./radiobuttons');
var Button = require('./button');
var Checkbox = require('./checkbox');

var fieldFactory = {

    getField: function(field){
        var fieldsConstructors = {
            dropdown: Dropdown,
            autocomplete: Autocomplete,
            datapicker: DataPicker,
            radiobuttons: Radiobuttons,
            button: Button,
            checkbox: Checkbox
        };
        return new fieldsConstructors[field.type](field);
    }

};

module.exports = fieldFactory;
