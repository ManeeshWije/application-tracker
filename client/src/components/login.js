import "../index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API = "http://localhost:3001";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	let counter = 0;

	function onUsernameChange(e) {
		e.preventDefault();
		const username = e.target.value;
		setUsername(username);
	}

	function onPasswordChange(e) {
		e.preventDefault();
		const password = e.target.value;
		setPassword(password);
	}

	const getLogin = () => {
		axios
			.get(API + "/api/login")
			.then((response) => {
				for (let i = 0; i < response.data.length; i++) {
					console.log(response.data[i].username);
					if (response.data[i].username === username) {
						if (response.data[i].password === password) {
							window.location = "/homeapps";
							counter = 1;
						}
					}
				}
				if (counter !== 1) window.alert("Invalid Credentials");
			})
			.catch((err) => console.log(err));
	};

	return (
		<React.Fragment>
			<div className="login container mt-5 align-items-center">
				<form className="border border-3 border-dark p-5 rounded shadow-lg ">
					<label>Username:</label> <br></br>
					<input onChange={onUsernameChange} type="text" className="form-control"></input> <br></br>
					<label>Password:</label> <br></br>
					<input onChange={onPasswordChange} type="password" className="form-control"></input> <br></br>
					<div className="d-flex justify-content-center">
						<button className="btn btn-outline-success" type="button" onClick={() => getLogin()}>
							Log in
						</button>
					</div>
					<br></br>
					<button id="registerLink" className="btn btn-link">
						<Link to="/register">If you don't have an account, register here</Link>
					</button>
				</form>
			</div>
		</React.Fragment>
	);
}

export default Login;
