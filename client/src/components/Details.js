import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const API = "http://localhost:3001";

export default function Details() {
	const [applications, setApplications] = useState([]);
	// const [ID, setID] = useState("");

	// const getApplication = (id) => {
	// 	axios
	// 		.get(API + "/application/Details/" + id)
	// 		.then((response) => {
	// 			// console.log(response);
	// 			// setApplications(response.data);
	// 			setID(response.data._id);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	useEffect(() => {
		axios
			.get(API + "/application/Details/" + "61da129be93d16aec695f22d")
			.then((response) => {
				console.log(response);
				// setApplications(response.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<React.Fragment>
			{applications.map((a) => (
				<div key={a._id}>
					<h1>Company: {a.companyName}</h1>
				</div>
			))}
		</React.Fragment>
	);
}
