const { common, PATHS } = require('./webpack.config.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
	output: {
		path: PATHS.build,
		filename: '[name].[chunkhash].js',
		chunkFilename: '[chunkhash].js'
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
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						},
						{
							loader: 'resolve-url-loader'
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			}
		]
	},
	plugins: [
		new CleanPlugin([PATHS.build], {
			root: PATHS.root,
			verbose: false
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor'],
			minChunks: module => /node_modules/.test(module.resource)
		}),
		new ExtractTextPlugin('[name].[chunkhash].css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
});
