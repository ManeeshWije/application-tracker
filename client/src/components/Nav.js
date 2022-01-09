import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
			<div className="container-fluid justify-content-end">
				<h4 className="title">Job Application Tracker</h4>
				{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button> */}
				<div className="justify-content-center" id="navbarNav">
					<ul className="nav justify-content-center navbar-nav mx-auto nav-tabs">
						<li className="nav-item mx-2">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link className="nav-link" to="/login">
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
