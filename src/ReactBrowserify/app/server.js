"use strict";
var express = require('express');
var http = require('http');
var path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var react_router_1 = require('react-router');
var history = require('history');
var routes_1 = require('./app/routes');
var app = express();
var memoryHistory = history.createMemoryHistory();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');
var min = '';
// development only
if ('development' == app.get('env')) {
}
app.use(express.static(path.join(__dirname, '.')));
app.get('/help', function (req, res) {
    res.render('help', { title: 'Help', min: min });
});
app.use(function (req, res, next) {
    var location = memoryHistory.createLocation(req.url);
    react_router_1.match({ routes: routes_1.default, location: location }, function (error, redirectLocation, renderProps) {
        var html = ReactDOMServer.renderToString(React.createElement(react_router_1.RouterContext, React.__spread({}, renderProps)));
        return res.render('main', { content: html, title: 'Home', min: min });
    });
});
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//# sourceMappingURL=server.js.map