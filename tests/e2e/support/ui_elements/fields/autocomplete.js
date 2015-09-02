var helper = require('./../../helpers/helper');
var Field = require('./field');

var Autocomplete = function(data){

    var _this = this;

    _this._root = data.parent.element(by.css(data.css));

    _this.completeByValue = function(value){
        return _this._root.all(by.css('input')).get(1).sendKeys(value)
            .then(function(){
                return _this._root.element(by.css('.tsmAutoCompleteResults')).waitReady();
            })
            .then(function(){
                return _this._root.all(by.css('button.tsmAutoCompleteResults__option')).get(0).click();
            });
    }


};

helper.inherits(Field,Autocomplete);

module.exports = Autocomplete;
