const gulp = require('gulp')
const pug = require('gulp-pug')

module.exports = function pug2html() {
  return gulp.src('src/html/*.pug')
    .pipe(pug({ pretty: pug2html.beautifyHtml }))
    .pipe(gulp.dest('build'))
}