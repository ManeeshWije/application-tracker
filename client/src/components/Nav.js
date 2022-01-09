import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
			<div className="container-fluid justify-content-end">
				<h4 className="title">Job Application Tracker</h4>
				<div className="justify-content-center" id="navbarNav">
					<ul className="nav justify-content-center navbar-nav mx-auto nav-tabs">
						<li className="nav-item mx-2">
							<Link className="nav-link" to="/homeapps">
								Home
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link className="nav-link" to="/">
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
