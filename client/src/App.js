import "./index.css";
import React from "react";
import { useState, useEffect } from "react";
import Login from "./components/Login";
const API = "http://localhost:3001";

function App() {
	const [applications, setApplications] = useState([]);
	const [companyName, setCompanyName] = useState("idk");
	const [description, setDescription] = useState("idk");
	const [position, setPosition] = useState("idk");
	const [dateApplied, setDateApplied] = useState("2022-01-08T02:30:39.336+00:00");
	const [status, setStatus] = useState("idk");

	const getApplications = () => {
		fetch(API + "/applications")
			.then((res) => res.json())
			.then((data) => setApplications(data))
			.catch((err) => console.error(err));
	};

	const createApplication = async () => {
		const data = await fetch(API + "/application/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				companyName: companyName,
				position: position,
				description: description,
				status: status,
				dateApplied: dateApplied,
			}),
		}).then((res) => {
			console.log(res);
			res.json();
		});
		console.log(data);
		setApplications([...applications, data]);
	};

	useEffect(() => {
		getApplications();
	}, []);

	return (
		<React.Fragment>
			<Login />
			<button onClick={() => createApplication()}>Create Application</button>
		</React.Fragment>
	);
}

export default App;
