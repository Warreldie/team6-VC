const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

sass2css = function (){
    return src('./source/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./public/css/'));
}

exports.default = function() {
    watch('./src/sass/**/*.scss', sass2css);
}