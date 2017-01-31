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

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import wiredep from 'gulp-wiredep';
import inject from 'gulp-inject';

import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';


///////////////////
// Configuration //
///////////////////

const sourceGlob = './src/**/*.js';
const testGlob = './test/spec/**/*.js';
const scriptGlobs = [sourceGlob, testGlob];


//////////////////////
// Test using mocha //
//////////////////////

gulp.task('test', () => {

	return gulp.src(['test/spec/**/*.js'], { read: false })
        .pipe(mocha({
        	reporter: 'nyan'
       	}));

});

gulp.task('test:wiredep-app', () => {

	return gulp.src('test/app/*.html')
		.pipe(wiredep({
			ignorePath: /^(\.\.\/)*\.\./
		}))
		.pipe(gulp.dest('test/app'));

});
gulp.task('test:inject-app', () => {

	let sources = gulp.src([
		'test/app/js/Components/**/*.js',
		'test/app/js/Config/**/*.js',
		'test/app/js/Controllers/**/*.js',
		'test/app/js/Helpers/**/*.js',
		'test/app/js/Middleware/**/*.js',
		'test/app/js/Models/**/*.js',
		'test/app/js/Services/**/*.js',
		'test/app/js/app.js'
	], { read: false });

	return gulp.src('test/app/*.html')
		.pipe(inject(sources, {
			ignorePath: 'test/app/'
		}))
		.pipe(gulp.dest('test/app'));

});
gulp.task('test:serve', ['test:wiredep-app', 'test'], () => {

	// Start server
	browserSync({
		notify: false,
		port: 3001,
		open: false,
		https: false,
		server: {
			baseDir: ['test/.tmp', 'test/app'],
			routes: {
				'/bower_components': 'bower_components',
				'/build': 'build'
			},
			middleware: [ historyApiFallback() ]
		}
	});

	gulp.watch(['test/spec/**.js'], ['test']);

	// Watch for changes to reload
	gulp.watch([
		'test/app/*.html',
		'test/app/views/**/*.hbs',
		'test/app/images/**/*',
		'build/chicken.js'		
	]).on('change', browserSync.reload);



});



gulp.task('test:inject-runner', [], () => {

	return gulp.src('test/*.html')
		.pipe(inject(gulp.src(['test/spec/**/*.js']), {
			
		}))
		.pipe(gulp.dest('test'));

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
		port: 9009,
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
	//	gutil.log(gutil.colors.green('** Running mocha tests'));
		gutil.log(gutil.colors.green('** Building package using webpack'));
		gutil.log(gutil.colors.bold.green('*'.repeat(50)));		

		gulp.start('lint');
	//	gulp.start('mocha');
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
