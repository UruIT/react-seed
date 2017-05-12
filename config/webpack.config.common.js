const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, '../app'),
    build: path.join(__dirname, '../build'),
    style: glob.sync('./app/**/*.scss'),
    test: glob.sync('./app/**/*.spec.js')
}

process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [{
			test: /\.html$/,
			use: 'raw-loader',
			exclude: ['../app/index.html']
		},
		{
			test: /\.(jpg|png|gif|svg)$/,
			use: 'file-loader'
		},
        {
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory'],
            include: PATHS.app
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'node_modules/html-webpack-template/index.ejs',
            title: 'UruIT React Seed',
            appMountId: 'app',
            inject: false
        })
    ]
}

module.exports = {
	common,
	PATHS
}
