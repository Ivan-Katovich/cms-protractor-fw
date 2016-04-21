'use strict';

var Helper = function(world){
    var _this = this;

    _this.elementGetter = function(root,elementData){
        //console.log(elementData);
        var _element;
        if(elementData.css){
            _element = (elementData.isSingle ? root.element(by.css(elementData.css)) : root.all(by.css(elementData.css)));
        }
        if(elementData.xpath){
            _element = (elementData.isSingle ? root.element(by.xpath(elementData.xpath)) : root.all(by.xpath(elementData.xpath)));
        }
        if(elementData.id){
            _element = (elementData.isSingle ? root.element(by.id(elementData.id)) : root.all(by.id(elementData.id)));
        }
        if(elementData.tagName){
            _element = (elementData.isSingle ? root.element(by.tagName(elementData.tagName)) : root.all(by.tagName(elementData.tagName)));
        }
        if(elementData.text){
            _element = (elementData.isSingle ? root.element(by.cssWithText(elementData.css,elementData.text)) : root.all(by.cssWithText(elementData.css,elementData.text)));
        }

        return _element;
    };

    _this.closeNotice = function(type){
        var notice = {
            cookie : {
                css : 'cookie-notice>div',
                reset : 'button.btn--reset'
            },
            error : {
                css : 'global-error div',
                reset : 'button.btn--reset'
            },
            suitcase : {
                css: 'suitcase-tutorial-container div.tutorial-overlay__container',
                reset: 'span.icon__ExpandClose'
            },
            fancybox : {
                css: '.fancybox-wrap',
                reset: 'a.fancybox-close'
            },
            edr : {
                css: '#edr_lwrap_first',
                reset: 'a.close',
                frame: 'edr_l_first'
            }
        };

        var dialogues = element.all(by.css(notice[type].css));
        return dialogues.isPresent()
            .then(function(isP){
                if(isP){
                    return dialogues.get(0).isDisplayed()
                        .then(function(is){
                            if(is){
                                if(notice[type].frame){
                                    return browser.driver.switchTo().frame(notice[type].frame)
                                        .then(function(){
                                            browser.ignoreSynchronization = true;
                                            return element(by.css(notice[type].reset)).click()
                                                .then(function(){
                                                    browser.ignoreSynchronization = false;
                                                });
                                        })
                                        .then(function(){
                                            return browser.switchTo().defaultContent();
                                        });
                                }else{
                                    return dialogues.get(0).element(by.css(notice[type].reset)).click();
                                }
                            }
                        });
                }
            });
    };

    _this.getPlatform = function(){
        return browser.manage().window().getSize()
            .then(function(size){
                switch(size.width){
                    case 1280:
                        return 'desktop';
                    case 1024:
                        return 'tabletL';
                    case 768:
                        return 'tabletP';
                    case 500:
                        return 'mobile';
                    default:
                        return 'desktop';
                }
            });
    };

    _this.getStringDate = function(n,type){
        return world.moment().add(n,type).format('YYYY-MM-DD');
    };

    _this.prependProtocol = function (uri) {
        if (uri.indexOf('//') === 0) {
            return 'http:' + uri;
        }
        return uri;
    };

    _this.asyncLoop = function (length, func) {
        var deferred = world.q.defer();
        var i = 0,
            loop = function () {
                if (i++ === length) {
                    deferred.resolve();
                    return deferred.promise;
                }
                return func(loop, i);
            };
        return loop();
    };

    _this.mergeObjectsWithoutSameKeys = function(firstObject,secondObject){
        for(var objKey in secondObject){
            if(secondObject.hasOwnProperty(objKey)){
                firstObject[objKey] = secondObject[objKey];
            }
        }
        return firstObject;
    };

    _this.emptyPromise = function(){
        var deferred = world.q.defer();
        deferred.resolve();
        return deferred.promise;
    };

};

module.exports = Helper;
