
	var gulp = require( 'gulp' )
	,	stylus = require( 'gulp-stylus' )
	,	nib = require( 'nib' );

	/**
	 * Compile and compress all files of the basic styles
	 */

	gulp.task( 'styles', function() {
		gulp.src( '_stylus/**.*' )
			.pipe( stylus({
				use: [ nib() ],
				compress: true
			}))
			.pipe( gulp.dest( '_site/css' ) );
		gulp.src( '_stylus/**.*' )
			.pipe( stylus({
				use: [ nib() ],
				compress: true
			}))
			.pipe( gulp.dest( './css' ) );
	});

	gulp.task( 'watch:styles', function() {
		gulp.watch( '**/*.styl', ['styles'] );
	});