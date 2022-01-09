import { Link } from "react-router-dom";
import "../index.css";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const API = "http://localhost:3001";
const API2 = "https://track-job-applications.herokuapp.com";

export default function HomeApps() {
	const [applications, setApplications] = useState([]);

	const getApplications = () => {
		axios
			.get(API2 + "/applications")
			.then((response) => {
				setApplications(response.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getApplications();
	}, []);

	const statusColour = (status) => {
		if (status === "Applied") {
			return "LightSlateGrey";
		} else if (status === "Accepted") {
			return "green";
		} else if (status === "Rejected") {
			return "red";
		} else if (status === "Scheduled Interview") {
			return "orange";
		}
	};

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
							<th style={{ color: statusColour(a.status) }}>{a.status}</th>
							<td>
								<button type="button" className="btn btn-outline-secondary">
									<Link to={"/Details/" + a._id} style={{ color: "black", textDecoration: "none" }}>
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
