var gulp = require('gulp')
var gatherTemplate = require('../')

gulp.task('default',function() {
    gulp.src('templates/*.html')
        .pipe(gatherTemplate({
            filename: "templates.js"
        })
        .pipe(gulp.dest('./build'))
})