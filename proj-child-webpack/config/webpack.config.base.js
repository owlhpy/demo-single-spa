
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "proj",
		projectName: "child-webpack",
		webpackConfigEnv,
		argv
	});
	return merge(defaultConfig, {
		mode: 'development',
		stats: 'errors-only',
		cache: {
			type: 'filesystem', // 使用文件缓存
		},
		module: {

			rules: [
				{
					test: /\.(js|jsx)?$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
							plugins: [
								"@babel/plugin-syntax-jsx",
								[
									"@babel/plugin-transform-runtime",
									{
										"corejs": 3,
										"useESModules": true,
										"regenerator": false
									}
								],

							]

						}
					},
					exclude: /node_modules/
				},
			
				//.less整体import
				{
					test: /\.(le|c)ss$/,
					use: ['style-loader', {
						loader: 'css-loader',
						// options: {
						// 	modules: true
						// }
					}, 'less-loader', {
							loader: 'postcss-loader',
						}],
					exclude: /node_modules/
				},
				//.module.less 模块化引入
				{
					test: /\.module.less$/,
					exclude: /node_modules/,
					use: [{
						loader: 'less-loader', // compiles Less to CSS
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					}]
				},


				// {
				// 	test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf|ico)$/i,
				// 	type: 'asset/resource',
				// 	exclude: /node_modules/,
				// },

			]
		},

	})
}



