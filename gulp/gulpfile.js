var gulp = require('gulp'),
    less = require('gulp-less'),
    sass = require('gulp-ruby-sass'), //sass编译
    autoprefixer = require('gulp-autoprefixer'), //编译css生成兼容css
    minifycss = require('gulp-minify-css'), //压缩css
    jshint = require('gulp-jshint'), //压缩js
    uglify = require('gulp-uglify'), //丑化
    imagemin = require('gulp-imagemin'), //图片压缩
    rename = require('gulp-rename'),
    clean = require('gulp-clean'), // 清理档案
    concat = require('gulp-concat'),
    notify = require('gulp-notify'), // 更动通知
    cache = require('gulp-cache'), //图片快取，只有更改过的图片会进行压缩
    livereload = require('gulp-livereload'), // 即时重整
    plumber = require('gulp-plumber'); // 异常处理

// less编译-兼容-压缩-通知
gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(plumber({errorHandler:notify.onError('Error:<%= error.message%>')}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css/'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('css/'))
        .pipe(notify({
            message: "Styles task complete"
        }));
})

gulp.task('watch', function() {
    gulp.watch("less/*.less", ['less']);
});

// 检查脚本
gulp.task('lint', function() {
    gulp.src('public/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
    gulp.run('less', 'watch', 'lint');
});
