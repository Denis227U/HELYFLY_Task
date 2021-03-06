'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('pug', function () {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty:true
        }))
        .pipe(gulp.dest('build'))
        .on('end', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('src/static/sass/*.scss')
        .pipe(gp.sass({}))
        .pipe(gp.autoprefixer({
            overrideBrowserslist: ['last 2 version'],
            cascade: false
        }))
        .on('error', gp.notify.onError({
            title: 'style'
        }))
        .pipe(gp.csso())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.reload({
            stream:true
        }));
});

gulp.task('watch', function () {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass'),
    gulp.parallel('watch', 'serve')
));