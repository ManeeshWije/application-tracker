import React from "react";
import { useState, useEffect } from "react";
const API = "http://localhost:3001";

export default function HomeApps() {
	// const [companyName, setCompanyName] = useState("");
	// const [status, setStatus] = useState("");
	const [application, setApplication] = useState([]);

	const getApplications = () => {
		fetch(API + "/applications")
			.then((res) => {
				// setCompanyName(res.data.companyName);
				// setStatus(res.data.status);
				res.json();
			})
			.then((data) => setApplication(data))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getApplications();
	}, []);

	return (
		<div className="container">
			<>
				<div className="container">
					<button
						className="btn btn-info mt-3"
						onClick={() => {
							window.location = "/AddApplication";
						}}
					>
						Add New Application
					</button>
				</div>
			</>
		</div>
	);
}
