const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const path = require('path');

const { common, PATHS } = require('./webpack.config.common');

module.exports = merge(common, {
	mode: 'production',
	output: {
		chunkFilename: '[chunkhash].js',
		filename: '[name].[chunkhash].js'
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all'
		}
	},
	devtool: 'hidden-source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['eslint-loader'],
				include: PATHS.app,
				enforce: 'pre'
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							camelCase: 'dashes',
							minimize: true
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
		new CleanPlugin([PATHS.dist], {
			root: PATHS.root,
			verbose: false
		}),
		new MiniCssExtractPlugin('[name].[chunkhash].css'),
		new CopyWebpackPlugin([
			{
				from: path.join(PATHS.app, 'favicon.ico'),
				to: path.join(PATHS.dist, 'favicon.ico')
			}
		])
	]
});
