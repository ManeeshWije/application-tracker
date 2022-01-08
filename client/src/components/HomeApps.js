import React from "react";
import { useState, useEffect } from "react";
const API = "http://localhost:3001";

export default function HomeApps() {
	const [companyName, setCompanyName] = useState("");
	const [status, setStatus] = useState("");

	const getApplications = () => {
		fetch(API + "/applications")
			.then((res) => {
				setCompanyName(res.data.companyName);
				setStatus(res.data.status);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getApplications();
	}, []);

	return (
		<div>
			<>
				<button
					onClick={() => {
						window.location = "/AddApplication";
					}}
				>
					Add New Application
				</button>
				<h1>Company: {companyName} </h1>
				<h1>Status: {status} </h1>
			</>
		</div>
	);
}
