import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const API = "http://localhost:3001";

export default function Details() {
	// const [applications, setApplications] = useState([]);

	// const getApplications = (id) => {
	// 	axios
	// 		.get(API + "/application/Details/" + id)
	// 		.then((response) => {
	// 			console.log(response.data);
	// 			// setApplications(response.data);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	// useEffect(() => {
	// 	getApplications("61da16eeafd824ea0ecd9f6c");
	// }, []);

	return (
		<React.Fragment>
			{/* {applications.map((a) => (
				<div key={a._id}>
					<h1>Company: {a.companyName}</h1>
				</div>
			))} */}
			DETAILS PAGE
		</React.Fragment>
	);
}
