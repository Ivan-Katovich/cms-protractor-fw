'use strict';

var Cucumber = require('cucumber'),
    fs = require('fs-extra'),
    //q = require('q'),
    REPORTS_DIR = 'test/e2e/reports/cucumber/';

module.exports = function JsonOutputHook() {

    var JsonFormatter = Cucumber.Listener.JsonFormatter();

    if (!fs.existsSync(REPORTS_DIR)) {
        fs.mkdirpSync(REPORTS_DIR);
    }

    JsonFormatter.log = function (json) {

        var name = '';
        name += 'cucumber-report';
        name += '('+ process.env.CURRENT_BROWSER +'-';
        name += process.env.PLATFORM + ')';
        name += '.json';

        var jsonReport = JSON.parse(json);
        for (var i = 0; i < jsonReport.length; i++) {
            jsonReport[i].name += ' (' + process.env.CURRENT_BROWSER + '-' + process.env.PLATFORM + ')';
            jsonReport[i].id += ' (' + process.env.CURRENT_BROWSER + '-' + process.env.PLATFORM + ')';
        }

        console.log('Output file: '+REPORTS_DIR+name);
        fs.writeFile(REPORTS_DIR+name, JSON.stringify(jsonReport), function (err) {
            if (err) {
                throw err;
            }
        });
    };

    this.registerListener(JsonFormatter);
};
