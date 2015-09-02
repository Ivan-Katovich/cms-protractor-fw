
var specTimeoutMs = 15000;

//var ElementFinder = $('').constructor;
//var ElementArrayFinder = element.ElementArrayFinder;

/**
 * This is used when an element is expected to 'move' into a position.
 * It will check the left most edge of the element is on screen (i.e. greater than or equal 0)
 * and then check it becomes 'stable' (i.e. not changed)
 *
 * @returns a promise that resolves to the element
 */
protractor.ElementFinder.prototype.waitToBeCompletelyVisibleAndStable = function () {
    var self = this,
        lastXLocation,
        lastYLocation;

    function isCompletelyVisible(location, size) {
        if (location.x >= 0) {
            if (location.x + size.width >= 0) {
                return true;
            }
        }

        return false;
    }

    return self.getSize()
        .then(function (size) {
//			console.log('size = ('+size.width+','+size.height+')');
            browser.wait(function() {
                return self.getLocation()
                    .then(function (location) {
                        if (lastXLocation === undefined) {
                            lastXLocation = location.x;
                            lastYLocation = location.y;
                        }
                        else {
//							console.log('last=(' + lastXLocation + ',' + lastYLocation +')');
//							console.log('location=(' + location.x + ',' + location.y +')');
                            if (isCompletelyVisible(location, size) && (lastXLocation === location.x && lastYLocation === location.y)) {
                                return true;
                            } else {
                                lastXLocation = location.x;
                                lastYLocation = location.y;
                            }
                        }
                        return false;
                    });
            }, specTimeoutMs, 'timed out waiting for element to be completely visible and stable');
        })
        .then (function () {
        return self;
    });
};

/**
 * This is used when an element is faded out and therefore takes some time to be 'hidden'.
 * This should be used when the element can be controlled outside of Angulars digests cycles (e.g. css animations)
 *
 * @returns a promise that resolves to true when the element is hidden
 */
protractor.ElementFinder.prototype.waitToBeHidden = function () {
    var self = this;

    return browser.wait(function() {
        return self.isDisplayed()
            .then(function (displayed) {
                return !displayed;
            });
    }, specTimeoutMs, 'timed out waiting for element to be hidden');
};

/**
 * This is used to explicity wait for an element to become present and displayed
 * This should be used when the element can be controlled outside of Angulars digests cycles (e.g. css animations)
 *
 * @returns a promise that resolves to the element
 */
protractor.ElementFinder.prototype.waitReady = function() {
    var self = this;
    return browser.wait(function() {
        return self.isPresentAndDisplayed();
    }, specTimeoutMs, 'timed out waiting for element')
        .then(function () {
            return self;
        });
};

/**
 * This is used to determine an element is present (in the DOM) and is displayed.
 *
 * @returns a promise that resolves to true or false
 */
protractor.ElementFinder.prototype.isPresentAndDisplayed = function () {
    var self = this;

    return self.isPresent().then(function (present) {
        if (present) {
            return self.isDisplayed();
        }

        return false;
    });
};

protractor.ElementArrayFinder.prototype.isHiddenOrNotPresent = function () {
    var self = this;

    return self.count()
        .then(function(n){
            if (n>0){
                self.get(0).isDisplayed()
                    .then(function(is){
                        return browser.sleep(1000);
                    })
                    .then(function(is){
                        return (!is);
                    });
            }else{
                return true;
            }
        });
};

protractor.ElementArrayFinder.prototype.waitForDisappeared = function() {
    var self = this;
    return browser.wait(function() {
        return self.isHiddenOrNotPresent();
    }, specTimeoutMs, 'timed out waiting for element')
        .then(function () {
            return self.get(0);
        });
};




