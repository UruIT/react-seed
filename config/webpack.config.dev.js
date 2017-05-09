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
		hot: true,
		inline: true,
		stats: 'errors-only',
		host: process.env.HOST,
		port: process.env.PORT
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
