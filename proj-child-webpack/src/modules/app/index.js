
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
