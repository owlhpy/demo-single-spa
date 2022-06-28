/*
 * @Author: peiyanh
 * @Date: 2022-01-18 11:37:47
 * @LastEditTime: 2022-06-17 15:40:46
 * @LastEditors: peiyanh
 * @Description:
 * @FilePath: /ar-react-cli/template/antd-react-router/config/product.js
 * Copyright (c) 2004-2021 i-Sprint Technologies, Inc.
 *  address:
 *  All rights reserved.
 *
 *  This software is the confidential and proprietary information of
 *  i-Sprint Technologies, Inc. ('Confidential Information').  You shall not
 *  disclose such Confidential Information and shall use it only in
 *  accordance with the terms of the license agreement you entered into
 *  with i-Sprint.
 */

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackBaseConfig = require('./webpack.config.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const proxy = require('./proxy')

// const TerserPlugin = require('terser-webpack-plugin');

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
