/*
 * @Author: peiyanh
 * @Date: 2022-06-15 15:44:47
 * @LastEditTime: 2022-06-15 15:44:47
 * @LastEditors: peiyanh
 * @Description: 
 * @FilePath: /ar-react-cli/template/antd-react-middle/config/postcss-config.js
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
module.exports = {
	plugins: (loader) => [
		require('postcss-import')({ root: loader.resourcePath }),
		require('autoprefixer')(), //CSS浏览器兼容
		// require('cssnano')(), //压缩css
	],
};