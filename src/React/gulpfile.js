﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

/// <binding ProjectOpened='watch:js' />
"use strict";

var gulp = require('gulp');
var webpack = require('webpack');
var utility = require('gulp-util');
var webpackConfig = require('./webpack.config.js');

var paths = {
    webroot: "./wwwroot/"
};
paths.js = paths.webroot + "js/**/*.js";

gulp.task("compile:js", function (callback) {
    var myConfig = Object.create(webpackConfig);

    webpack(myConfig, function (err, stats) {
        if (err) throw new utility.PluginError("webpack:build", err);
        utility.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('watch:js', ['compile:js'], function (cb) {
    gulp.watch(['./Scripts/**/**'], ['compile:js']);
});