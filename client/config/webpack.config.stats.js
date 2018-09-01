const prod = require('./webpack.config.prod');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(prod, {
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openBrowser: true
		})
	]
});
