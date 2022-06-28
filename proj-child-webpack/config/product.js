
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const compiler = Webpack({
	...webpackBaseConfig,
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/anaylistest',
		filename: '[name].[fullhash].js',
	},
	plugins: [].concat(webpackBaseConfig.plugins, [
		// new HtmlWebpackPlugin({
		// 	template: './public/index.html',
		// 	filename: 'index.html', //打包后的文件名
		// 	minify: {
		// 		removeAttributeQuotes: false, //是否删除属性的双引号
		// 		collapseWhitespace: false, //是否折叠空白
		// 	},
		// 	base: '/',
		// 	favicon: './src/assets/images/favicon.ico',
		// 	// hash: true //是否加上hash，默认是 false
		// }),
	]),

	// optimization: {
	// 	minimize: true,
	// 	minimizer: [
	// 		new TerserPlugin({
	// 			terserOptions: {
	// 				format: {
	// 					comments: false,
	// 				},
	// 			},
	// 			extractComments: false,
	// 		}), //去除注释
	// 	],

	// }
});

compiler.run((err, stats) => {
	// [Stats Object](#stats-object)
	// ...
	if (stats.hasErrors()) {
		const info = stats.toJson();
		console.error(info.errors);
	}
	compiler.close((closeErr) => {
		// ...
	});
});
