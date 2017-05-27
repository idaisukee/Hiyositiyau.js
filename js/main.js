/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		'Hiyositiyau': {
			deps: ['juliandate'],
			exports: 'Hiyositiyau'
		}
	},
	paths: {
		Hiyositiyau: '../Hiyositiyau',
		juliandate: '../node_modules/julian-date/dist/julianDate.min',
		text: '../node_modules/requirejs-text/text'
	}
});

require([
	'Hiyositiyau',
	'juliandate'
], function (Hiyositiyau, juliandate) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	var h = new Hiyositiyau();
	alert(h.name);
	// Initialize the application view
});
