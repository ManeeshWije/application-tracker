import "../index.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
const API = "http://localhost:3001";

export default function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

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

	const register = () => {
		fetch(API + "/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		}).then((res) => {
			res.json();
		});
	};

	return (
		<React.Fragment>
			<div className="login container mt-5 align-items-center">
				<form className="border border-3 border-dark p-5 rounded shadow-lg">
					<label>Username:</label> <br></br>
					<input onChange={onUsernameChange} type="text" className="form-control"></input> <br></br>
					<label>Password:</label> <br></br>
					<input onChange={onPasswordChange} type="password" className="form-control"></input> <br></br>
					<button className="btn btn-outline-success" type="button" onClick={() => register()}>
						<Link to="/login">Register</Link>
					</button>
				</form>
			</div>
		</React.Fragment>
	);
}
