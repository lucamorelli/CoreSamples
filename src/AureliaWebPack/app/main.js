"use strict";
var aurelia_bootstrapper_webpack_1 = require('aurelia-bootstrapper-webpack');
require('bootstrap');
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../node_modules/font-awesome/css/font-awesome.css');
require('../styles/styles.css');
aurelia_bootstrapper_webpack_1.bootstrap(function (aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    var rootElem = document.body;
    aurelia.start().then(function () { return aurelia.setRoot('app', rootElem); });
    rootElem.setAttribute('aurelia-app', '');
});
//# sourceMappingURL=main.js.map