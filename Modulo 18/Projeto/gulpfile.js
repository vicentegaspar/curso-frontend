const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tarefasCSS(cb) {
    return gulp.src('./vendor/**/*.css') // caputra todos arquivos css da pasta vendor
        .pipe(concat('libs.css')) // concatena arquivos
        .pipe(cssmin()) // mimifica arquivos
        .pipe(rename({suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css')) // salva arquivos na pasta dist/css
}

function tarefasJS() {
    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'})) // libs.min.js
        .pipe(gulp.dest('./dist/js')) // salva arquivos na pasta dist/js
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS