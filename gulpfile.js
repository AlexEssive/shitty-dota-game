'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/minified'));
});

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'))
    // gulp.watch('src/static/js/**/*.js', gulp.series('scripts'))
});

gulp.task('default', gulp.series(
    gulp.parallel('sass'),
    gulp.parallel('watch')
));