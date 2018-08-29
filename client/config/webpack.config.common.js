const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const glob = require('glob');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	root: path.join(__dirname, '..'),
	app: path.join(__dirname, '..'),
	build: path.join(__dirname, '../../server/ReactSeed.WebApp/wwwroot'),
	style: glob.sync('./**/*.scss'),
	test: glob.sync('./**/*.spec.js')
};

process.env.BABEL_ENV = TARGET;

const common = {
    context: PATHS.root,
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
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: ['../index.html']
			},
			{
				test: /\.(jpg|png|gif|svg|ico)$/,
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
			template: './node_modules/html-webpack-template/index.ejs',
			title: 'react-seed',			
			appMountId: 'react-app',
		 	inject: false
		 })
	]
};

module.exports = {
	common,
	PATHS
};
