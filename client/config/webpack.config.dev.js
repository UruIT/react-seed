const { common, PATHS } = require('./webpack.config.common');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
	devtool: 'eval-source-map',
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
