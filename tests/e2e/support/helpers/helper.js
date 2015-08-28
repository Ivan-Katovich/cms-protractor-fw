
helper = {

    elementGetter: function(root,elementData){
        var _element = (elementData.isSingle ? root.element(by.css(elementData.css)) : root.all(by.css(elementData.css)));
        //var _element;
        //if(elementData.isSingle){
        //    console.log(' +++++++++ ');
        //    console.log(elementData);
        //    _element = root.element(by.css(elementData.css));
        //    console.log(' ========= ');
        //}else{
        //    console.log(' ---------- ');
        //    console.log(elementData);
        //    _element = root.all(by.css(elementData.css));
        //    console.log(' ========= ');
        //}
        return _element;
    },

    inherits: function(Parent,Child){
        var F = function(){};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    }

};

module.exports = helper;
