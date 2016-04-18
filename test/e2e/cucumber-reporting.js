'use strict';

var Cucumber = require('cucumber'),
    fs = require('fs-extra'),
    moment = require('moment'),
    REPORTS_DIR = 'test/e2e/reports/cucumber/';

module.exports = function JsonOutputHook() {

    var JsonFormatter = Cucumber.Listener.JsonFormatter();

    if (!fs.existsSync(REPORTS_DIR)) {
        fs.mkdirpSync(REPORTS_DIR);
    }

    JsonFormatter.log = function (json) {

        var name = '';
        name += 'cucumber-report-id';
        name += Math.floor((Math.random() * 900) + 100);
        name += '(' + process.env.RUN_TYPE;
        name += '-' + process.env.CURRENT_BROWSER +'-';
        name += process.env.PLATFORM + ')';
        name += '.json';

        var jsonReport = JSON.parse(json);
        for (var i = 0; i < jsonReport.length; i++) {
            jsonReport[i].name += ' (' + process.env.RUN_TYPE + '-' + process.env.CURRENT_BROWSER + '-' + process.env.PLATFORM + ')';
            jsonReport[i].id += ' (' + process.env.RUN_TYPE + '-' + process.env.CURRENT_BROWSER + '-' + process.env.PLATFORM + ')';
        }

        console.log('\nDuration time: '+moment.unix(moment().format('X')-process.env.START_TIME).format('mm:ss'));
        console.log('\nOutput file: '+REPORTS_DIR+name);
        console.log('\n');
        fs.writeFile(REPORTS_DIR+name, JSON.stringify(jsonReport), function (err) {
            if (err) {
                throw err;
            }
        });
    };

    this.registerListener(JsonFormatter);
};
