var path = require('path');
var webpack = require('webpack');

module.exports = {

	output: {
		filename: 'chicken.js',
		libraryTarget: 'umd',
		library: 'Chicken'
	},

	'externals': {
		underscore: '_',
		jquery: '$',
		xregexp: 'XRegExp',
		handlebars: 'Handlebars'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]	
	},

	plugins: [
		
	]
};