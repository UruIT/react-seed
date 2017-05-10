const { common, PATHS } = require('./webpack.config.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
	entry: null,
	devtool: 'inline-source-map',
	resolve: {
		alias: {
			'app': PATHS.app
		}
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			use: ['istanbul-instrumenter-loader'],
			include: PATHS.app,
			enforce: 'pre'
		},
		{
			test: /\.jsx?$/,
			use: ['babel-loader?cacheDirectory'],
			include: PATHS.app
		}]
	}
});
