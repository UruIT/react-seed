const { common, PATHS } = require('./webpack.config.common');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
	entry: {
		style: PATHS.style
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hotOnly: true,
		inline: true,
		stats: 'errors-only',
		host: process.env.HOST,
		port: process.env.PORT
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					modules: true,
					localIdentName: '[path][name]__[local]'
				}
			}, {
				loader: 'resolve-url-loader'
			}, {
				loader: 'sass-loader'
			}]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
