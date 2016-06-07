/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

var paths = {};

paths.webroot = "./wwwroot/";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "libs/";

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});

gulp.task("copy-deps:@angular", function () {
    return gulp.src(paths.npmSrc + '/@angular/**/*.js', { base: paths.npmSrc + '/@angular/' })
         .pipe(gulp.dest(paths.npmLibs + '/@angular/'));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/**/*.*', { base: paths.npmSrc + '/rxjs/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps:zone.js", function () {
    return gulp.src(paths.npmSrc + '/zone.js/dist/*.*', { base: paths.npmSrc + '/zone.js/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/zone.js/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/*.*', { base: paths.npmSrc + '/reflect-metadata/' })
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});


gulp.task("copy-deps:bootstrap", function () {
    return gulp.src(paths.npmSrc + '/bootstrap/dist/**/*.*', { base: paths.npmSrc + '/bootstrap/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/bootstrap/'));
});

gulp.task("copy-deps:jquery", function () {
    return gulp.src(paths.npmSrc + '/jquery/dist/*.*', { base: paths.npmSrc + '/jquery/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/jquery/'));
});

gulp.task("copy-deps:ng2-ui-auth", function () {
    return gulp.src(paths.npmSrc + '/ng2-ui-auth/dist/*.*', { base: paths.npmSrc + '/ng2-ui-auth/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/ng2-ui-auth/'));
});

gulp.task("copy-deps", ["copy-deps:rxjs", 'copy-deps:@angular', 'copy-deps:systemjs', 'copy-deps:es6-shim',
    'copy-deps:bootstrap', 'copy-deps:jquery', 'copy-deps:zone.js', 'copy-deps:reflect-metadata',
    'copy-deps:ng2-ui-auth']);