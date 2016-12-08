'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var maps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
var runSequence = require('run-sequence');

gulp.task('watch-sass', function () {
    console.log('GULP WATCH START');
    gulp.watch(['static/sass/**/*'], ['minifyCssWATCH']);
    console.log('GULP WATCH FINISH');
});

gulp.task('compileSassWATCH', ['clean'], function () {
    gulp.src('static/sass/**/*')
        .pipe(maps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(maps.write('./'))
        // .pipe(gulp.dest('static/css/final'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('minifyCssWATCH', ['compileSassWATCH'], function () {
    // gulp.src('static/css/final/**/*.css')
    gulp.src('dist/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('static/css'));
});

gulp.task('clean', function () {
    return gulp.src([
        'dist',
        // 'static/css/final',
        'static/js/app.js'
    ], {
        read: false
    }).pipe(clean());
});

// DEPRECATED
// DEPRECATED
// DEPRECATED
// DEPRECATED
// DEPRECATED

//gulp.task('watch', function () {
//    console.log('GULP WATCH');
//    gulp.watch(['static/sass/**/*', 'static/js/ng/**/*'], ['minifyCssWATCH', 'concat-scripts']);
//    // gulp.start('clean');
//    // gulp.watch('static/**/*', ['default']);
//});

// gulp.task('watch', function() {
//     console.log('GULP WATCH');
//     gulp.watch('static/js/**/*', ['clean', 'uglify-scripts', 'minifyCss']);
//     gulp.watch('static/sass/**/*', ['clean', 'uglify-scripts', 'minifyCss']);
//     // gulp.watch('static/**/*', ['default']);
// });

// gulp.task('watch', function() {
//     console.log('GULP WATCH');
//     gulp.watch('static/**/*', ['default']);
// });
//
//gulp.task('clean', function () {
//    return gulp.src([
//        'static/dist',
//        'dist',
//        'static/css',
//        'static/js/app.js'
//    ], {
//        read: false
//    }).pipe(clean());
//});
//
//gulp.task('concat-scripts', function () {
//    gulp.src([
//            'static/js/ng/**/*'
//        ])
//        .pipe(concat('app.js'))
//        //this fixed a shorthand javascript error
//        .pipe(babel({
//            presets: ['es2015'],
//            compact: true
//        }))
//        //this fixed a shorthand javascript error
//        .pipe(gulp.dest('static/js'));
//});
//
//gulp.task('uglify-scripts', ['concat-scripts'], function () {
//    gulp.src('static/js/app.js')
//        .pipe(uglify())
//        .pipe(rename('app.min.js'))
//        .pipe(gulp.dest('dist/js'));
//});
//
//gulp.task('compileSass', function () {
//    gulp.src('static/sass/**/*')
//        .pipe(maps.init())
//        .pipe(sass().on('error', sass.logError))
//        .pipe(maps.write('./'))
//        .pipe(gulp.dest('static/css'))
//});
//
//
//gulp.task('minifyCss', ['compileSass'], function () {
//    gulp.src('static/**/*.css')
//        .pipe(cssmin())
//        .pipe(rename({
//            suffix: '.min'
//        }))
//        .pipe(gulp.dest('static/css'));
//});


// gulp.task('concat-scriptsWATCH', ['clean'], function() {
//     gulp.src([
//             'static/js/**/*'
//         ])
//         .pipe(concat('app.js'))
//         //this fixed a shorthand javascript error
//         .pipe(babel({
//             presets: ['es2015'],
//             compact: true
//         }))
//         //this fixed a shorthand javascript error
//         .pipe(gulp.dest('static/js'));
// });


//gulp.task('run', function (cb) {
//    runSequence('concat-scripts',
//        'compileSass',
//        'minifyCss',
//        'uglify-scripts',
//        cb);
//});

//gulp.task('build', ['run'], function () {
//    // return gulp.src(['static/views/**/*', 'static/dist/**/*',
//    //         'static/views/**/*', 'static/img/**/*'
//    //     ], { base: './' })
//    //     .pipe(gulp.dest('dist'));
//    return setTimeout(function () {
//        gulp.src(['static/views/**/*', 'static/css/**/*',
//                'static/js/app.js',
//                'static/views/**/*', 'static/img/**/*'
//            ], {
//                base: './'
//            })
//            .pipe(gulp.dest('dist'))
//    }, 2500)
//});

//gulp.task('default', ['clean'], function () {
//    gulp.start('build');
//});