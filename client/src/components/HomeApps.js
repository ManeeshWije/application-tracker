import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const API = "http://localhost:3001";

export default function HomeApps() {
	const [applications, setApplications] = useState([]);

	const getApplications = () => {
		axios
			.get(API + "/applications")
			.then((response) => {
				setApplications(response.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getApplications();
	}, []);

	return (
		<React.Fragment>
			<div className="m-3">
				<button
					className="btn btn-info mt-3"
					id="addAppButton"
					onClick={() => {
						window.location = "/AddApplication";
					}}
				>
					Add New Application
				</button>
			</div>

			<table className="table">
				<tbody>
					<tr>
						<th>Company</th>
						<th>Position</th>
						<th>Status</th>
						<td></td>
					</tr>

					{applications.map((a) => (
						<tr key={a._id} className="home-apps">
							<th>{a.companyName}</th>
							<th>{a.position}</th>
							<th>{a.status}</th>
							<td>
								<button style={{ marginLeft: "2px", padding: "4px", borderRadius: "5px" }}>
									<Link to={"/application/Details/" + a._id} style={{ color: "black", textDecoration: "none" }}>
										Details
									</Link>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</React.Fragment>
	);
}
