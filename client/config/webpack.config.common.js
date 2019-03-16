const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const glob = require('glob');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	root: path.join(__dirname, '..', '..'),
	app: path.join(__dirname, '..'),
	dist: path.join(__dirname, '../../dist'),
	style: glob.sync('./**/*.scss'),
	test: glob.sync('./**/*.spec.js')
};

process.env.BABEL_ENV = TARGET;

const common = {
	context: PATHS.app,
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
		path: PATHS.dist,
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: path.resolve('../index.html')
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
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '../node_modules/html-webpack-template/index.ejs',
			title: 'UruIT React Seed',
			favicon: 'favicon.ico',
			appMountId: 'app',
			inject: false,
			minify: {
				collapseWhitespace: true,
				conservativeCollapse: true,
				preserveLineBreaks: true,
				useShortDoctype: true,
				html5: true
			},
			mobile: true,
			scripts: [
				'https://cdnjs.cloudflare.com/ajax/libs/react/16.1.1/umd/react.production.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.1.1/umd/react-dom.production.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.2.0/react-router-dom.min.js'
			]
		}),
		new webpack.optimize.ModuleConcatenationPlugin()
	],
	stats: {
		children: false
	}
};

module.exports = {
	common,
	PATHS
};
