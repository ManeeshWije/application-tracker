import "../index.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
const API = "http://localhost:3001";

function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    function onUsernameChange(e) {
        e.preventDefault();
        const username = e.target.value;
        setLoginUsername(username);
    }

    function onPasswordChange(e) {
        e.preventDefault();
        const password = e.target.value;
        setLoginPassword(password);
    }

    // function onSubmit() {
    // 	fetch(API + "/login", {
    // 		method: "POST",
    // 		headers: {
    // 			"Content-Type": "application/json",
    // 		},
    // 		body: {
    // 			loginUsername: loginUsername,
    // 			loginPassword: loginPasswod,
    // 		},
    // 	}).then((res) => res.json());
    // }

    return (
        <React.Fragment>
            <div className="login container mt-5 align-items-center">
                <form className="border border-3 border-dark p-5 rounded shadow-lg ">
                    <label>Username:</label> <br></br>
                    <input onChange={onUsernameChange} type="text" className="form-control"></input> <br></br>
                    <label>Password:</label> <br></br>
                    <input onChange={onPasswordChange} type="password" className="form-control"></input> <br></br>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-success" type="button">
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
