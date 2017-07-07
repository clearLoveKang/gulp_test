var gulp = require('gulp');
var rename = require('gulp-rename');  //文件重命名
//var uglify = require('gulp-uglify');  //js文件压缩
// var minifyCss = require("gulp-minify-css");  //css文件压缩
// var minifyHtml = require("gulp-minify-html"); //html文件压缩
//var concat = require("gulp-concat");  //文件合并

//加载gulp-load-plugins插件，并马上运行它
var plugins = require('gulp-load-plugins')();


gulp.task('first',function(){
	gulp.src(['js/jquery.min.js','js/bootstrap.js'])
	    .pipe(gulp.dest('libs'));
	
})

gulp.task('second',function(){
	gulp.src('js/jquery.min.js')
		.pipe(rename('jQuery'))
	    .pipe(gulp.dest('js'));
	
});

gulp.task('three',function(){
	gulp.src('js/bootstrap.js')
		.pipe(plugins.uglify())
	    .pipe(gulp.dest('libs'));
	
})

gulp.task('four',function(){
	gulp.src(['js/jquery.min.js','js/bootstrap.js'])
		.pipe(plugins.concat('public.js'))
	    .pipe(gulp.dest('libs'));
	
})

gulp.task('five',function(){
	gulp.src(['js/jquery.min.js','js/bootstrap.js'])
		.pipe(plugins.concat('public.min.js'))
		.pipe(plugins.uglify())
	    .pipe(gulp.dest('libs'));
	
})