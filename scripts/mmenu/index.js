
	var $ = require( 'jquery' );
	var mmenu = require( './../_lib/jquery.mmenu.min.all.js' );


	var $menuHeader = $( "#menu" );


	$menuHeader.mmenu({
		"offCanvas": {
			"zposition": "front"
		}
	});