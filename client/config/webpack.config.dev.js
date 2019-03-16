const { common, PATHS } = require('./webpack.config.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval',
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, '..', '..', 'dist')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['eslint-loader'],
				include: PATHS.app,
				exclude: /node_modules/,
				enforce: 'pre'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							camelCase: 'dashes',
							localIdentName: '[path][name]__[local]'
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
});
