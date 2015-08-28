var CarHireSearchGadget = require('./carHireSearchGadget');

gadgetFactory = {
    currentSearchGadget: 'undefined',
    getSearchGadget: function(gadget){
        var searchGadgets = {
            'car-hire': {
                root: 'car-hire-search',
                Class: CarHireSearchGadget
            }
        };
        this.currentSearchGadget = new searchGadgets[gadget].Class(element(by.css(searchGadgets[gadget].root)));
    }
};

module.exports = gadgetFactory;