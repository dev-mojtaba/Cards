const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		main: './assets/js/index.js',
	},
	output: {
		filename: 'main.min.js',
		path: path.resolve(__dirname, './assets/dist/js')
	},
	module: {

	},
	resolve: {
		extensions: ['.js'],
	},
};