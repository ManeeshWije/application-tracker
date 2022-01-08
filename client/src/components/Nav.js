import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
			</div>
		</nav>
	);
}
