/*
 * @Author: peiyanh
 * @Date: 2022-06-09 13:59:27
 * @LastEditTime: 2022-06-28 14:52:28
 * @LastEditors: peiyanh
 * @Description: 
 * @FilePath: /single-spa/proj-child-webpack/src/modules/app/index.js
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
import React from "react";
import './index.less'
import styles from './index.module.less'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RouterA from "../routerA";
import RouterB from "../routerB";
// import {OrcTimeLine} from 'orc-component';

const IndexPage = () => {
	return (
		<div>
			<p>
				<Link to={'/a'}> go to a </Link>
			</p>
			<p>
				<Link to={'/b'}> go to b </Link>
			</p>
			<div className="test">
				ddddddd iiiiiii
			</div>
			<div className={styles.testModules}>
				ddddddd
			</div>
		</div>
	)
}

const App = () => {
	return (
		<div>
		
			<Router basename="/proj-child-webpack">
				<Routes>
					<Route path="/" element={<IndexPage />} />
					<Route path="/a" element={<RouterA />} />
					<Route path="/b" element={<RouterB />} />
				</Routes>
			</Router>
			{/* <OrcTimeLine dataSource={[{ title: '111', value: <span>11111</span>,id:'2333' }]} /> */}
		</div>
	)

}
export default App;