const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.base.js');



const path = require('path');
const devServer = {
	port: '3002', //默认是8080
	// client: { logging: "error" },//浏览器中设置日志级别
	compress: true, //是否启用 gzip 压缩
	open: false,
	// https: true,
	headers: {"Access-Control-Allow-Origin":"*"},
	allowedHosts:"all",
	historyApiFallback: true,
	watchFiles: ['src/**/*', 'public/**/*'],

};
const devConfig = {
	output: {
		path: path.resolve(__dirname, '../dist'), //必须是绝对路径
		filename: 'bundle.[fullhash].js',
		publicPath: '/' //通常是CDN地址
	},
}

const config = webpackConfig();

const compiler = Webpack({...devConfig,...config});
const devServerOptions = { ...config.devServer, ...devServer };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
	console.log('Starting server...');
	await server.start();
};

runServer();