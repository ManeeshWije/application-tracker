import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomeApps from "./components/HomeApps";
import Nav from "./components/Nav";
import AddApplications from "./components/AddApplications";

function App() {
	return (
		<div>
			<Router>
				<Nav></Nav>
				<Routes>
					<Route exact path="/" element={<HomeApps />}></Route>
					<Route exact path="/login" element={<Login />}></Route>
					<Route exact path="/AddApplication" element={<AddApplications />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
