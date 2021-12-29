const gulp = require('gulp')
const { watch } = require('gulp');
const svgSymbols = require('gulp-svg-symbols')
const { oneSvg } = require('gulp-svg-symbols')

gulp.task(`sprites`, function () {
    return gulp
        .src(`public/img/svg/*.svg`)
        .pipe(svgSymbols())
        .pipe(gulp.dest(`public/img`))
})

exports.default = function () {
    watch('public/img/svg/*.svg', function () {
        return gulp
            .src(`public/img/svg/*.svg`)
            .pipe(svgSymbols())
            .pipe(gulp.dest(`public/img`))
    });
}