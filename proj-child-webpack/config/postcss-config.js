
module.exports = {
	plugins: (loader) => [
		require('postcss-import')({ root: loader.resourcePath }),
		require('autoprefixer')(), //CSS浏览器兼容
		// require('cssnano')(), //压缩css
	],
};
