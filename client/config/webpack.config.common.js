const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	root: path.join(__dirname, '..', '..'),
	app: path.join(__dirname, '..'),
	build: path.join(__dirname, '../../build'),
	style: glob.sync('./**/*.scss'),
	test: glob.sync('./**/*.spec.js')
};

process.env.BABEL_ENV = TARGET;

const common = {
	entry: {
		app: [PATHS.app]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			styles: path.resolve(__dirname, '../styles'),
			utils: path.resolve(__dirname, '../utils')
		}
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: ['../index.html']
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: 'file-loader'
			},
			{
				test: /\.jsx?$/,
				use: ['babel-loader?cacheDirectory'],
				exclude: /node_modules/,
				include: PATHS.app
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '../node_modules/html-webpack-template/index.ejs',
			title: 'UruIT React Seed',
			appMountId: 'app',
			inject: false,
			minify: {
				collapseWhitespace: true,
				conservativeCollapse: true,
				preserveLineBreaks: true,
				useShortDoctype: true,
				html5: true
			},
			mobile: true
		}),
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};

module.exports = {
	common,
	PATHS
};
