'use strict';

///////////////
// Libraries //
///////////////

import gulp from 'gulp';
import mocha from 'gulp-mocha';

//////////////////////
// Test using mocha //
//////////////////////

gulp.task('mocha', [], () => {

	gulp.src('./test/**/*.js', { read: false })
        .pipe(mocha({
        	//reporter: 'nyan'
       	}));

});


/////////////
// Default //
/////////////

gulp.task('default', ['mocha']);
