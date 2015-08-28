var Dropdown = require('./dropdown');
var Autocomplete = require('./autocomplete');

var fieldFactory = {

    getField: function(field){
        var fieldsConstructors = {
            dropdown: Dropdown,
            autocomplete: Autocomplete
        };
        return new fieldsConstructors[field.type](field);
    }

};

module.exports = fieldFactory;
