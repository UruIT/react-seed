const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const { common, PATHS } = require('./webpack.config.common');

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: PATHS.build,
		filename: '[name].[chunkhash].js',
		chunkFilename: '[chunkhash].js'
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all'
		}
	},
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
		new CleanPlugin([PATHS.build], {
			root: PATHS.root,
			verbose: false
		}),
		new MiniCssExtractPlugin('[name].[chunkhash].css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(PATHS.app, 'favicon.ico'),
				to: path.join(PATHS.build, 'favicon.ico')
			}
		])
	]
});
