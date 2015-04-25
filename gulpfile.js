var gulp = require('gulp');
var static_site = require('gulp-static-site');

var paths = {
    sources: ['contents/**','templates/**'],
    stylesheets: ['css/**']
};

gulp.task('site', function () {
    return gulp.src('contents/**/*.md')
        .pipe(static_site())
        .pipe(gulp.dest('build/'))
});

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['site','css'], function () {
    gulp.watch(paths.sources, ['site']);
    gulp.watch(paths.stylesheets, ['css']);
});
