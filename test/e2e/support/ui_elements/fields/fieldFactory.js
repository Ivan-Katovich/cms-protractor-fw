'use strict';

var Dropdown = require('./dropdown'),
    Autocomplete = require('./autocomplete'),
    DataPicker = require('./datapicker'),
    Radiobuttons = require('./radiobuttons'),
    Button = require('./button'),
    Checkbox = require('./checkbox'),
    Slider = require('./slider'),
    Checkboxlist = require('./checkboxlist');

var FieldFactory = function(world){

    var _this = this;

    _this.getField = function(field){
        var fieldsConstructors = {
            dropdown: Dropdown,
            autocomplete: Autocomplete,
            datapicker: DataPicker,
            radiobuttons: Radiobuttons,
            button: Button,
            checkbox: Checkbox,
            slider: Slider,
            checkboxlist: Checkboxlist
        };
        if(!field.type || !fieldsConstructors[field.type]){
            throw new Error('Wrong type of field: '+field.type);
        }
        return new fieldsConstructors[field.type](field,world);
    };

};

module.exports = FieldFactory;
