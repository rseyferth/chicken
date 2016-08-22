'use strict';

///////////////
// Libraries //
///////////////

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import yuidoc from 'gulp-yuidoc';
import watch from 'gulp-watch';
import gutil from 'gulp-util';
import connect from 'gulp-connect';
import eslint from 'gulp-eslint';

import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';


///////////////////
// Configuration //
///////////////////

const sourceGlob = './src/**/*.js';
const testGlob = './test/**/*.js';
const scriptGlobs = [sourceGlob, testGlob];


//////////////////////
// Test using mocha //
//////////////////////

gulp.task('mocha', [], () => {

	return gulp.src(testGlob, { read: false })
        .pipe(mocha({
        	reporter: 'nyan'
       	}));

});


////////////////
// ES linting //
////////////////

gulp.task('lint', [], () => {

	// All js!
	return gulp.src(scriptGlobs)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());


});


//////////////////////////
// Yuidoc documentation //
//////////////////////////

gulp.task('watch:docs', [], () => {

	// Setup simple server for docs
	connect.server({
		port: 8080,
		root: './docs',
		liveReload: true
	});
	return watch(sourceGlob, () => {
		gulp.start('docs');
		connect.reload();
	});
	

});

gulp.task('docs', [], () => {

	return gulp.src(sourceGlob)
		.pipe(yuidoc())
		.pipe(gulp.dest('./docs'));

});


//////////////
// Watching //
//////////////

gulp.task('watch', [], () => {


	// Watch for changes in js
	return watch(scriptGlobs, () => {
		
		gutil.log(gutil.colors.bold.green('*'.repeat(50)));		
		gutil.log(gutil.colors.bold.green('I detected a change in the codebase:'));		
		gutil.log(gutil.colors.green('** Running eslint on all code'));		
		gutil.log(gutil.colors.green('** Running mocha tests'));
		gutil.log(gutil.colors.green('** Building package using webpack'));
		gutil.log(gutil.colors.bold.green('*'.repeat(50)));		

		gulp.start('lint');
		gulp.start('mocha');
		gulp.start('webpack');

	});

});

//////////////////////////
// Pack it all together //
//////////////////////////

gulp.task('webpack', [], () => {

	return gulp.src('src/main.js')
		.pipe(webpack(webpackConfig).on('error', function(message) {
			this.emit('end')
		}))		
		.pipe(gulp.dest('build/'));

});



/////////////
// Default //
/////////////

gulp.task('default', ['lint', 'mocha', 'docs', 'webpack']);
