import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const API = "http://localhost:3001";

export default function AddApplications() {
	const [applications, setApplications] = useState([]);
	const [companyName, setCompanyName] = useState("");
	const [description, setDescription] = useState("");
	const [position, setPosition] = useState("");
	const [dateApplied, setDateApplied] = useState("");
	const [status, setStatus] = useState("");

	function handleCompanyChange(e) {
		e.preventDefault();
		setCompanyName(e.target.value);
	}

	function handleDescriptionChange(e) {
		e.preventDefault();
		setDescription(e.target.value);
	}

	function handlePositionChange(e) {
		e.preventDefault();
		setPosition(e.target.value);
	}

	function handleDateChange(date) {
		setDateApplied(date);
	}

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
		// setApplications([...applications, data]);
	};

	return (
		<React.Fragment>
			<div className="container mt-5">
				<form>
					<label>Company Name:</label> <br></br>
					<input onChange={handleCompanyChange} value={companyName} type="text" className="form-control"></input> <br></br>
					<label>Position:</label> <br></br>
					<input onChange={handlePositionChange} value={position} type="text" className="form-control"></input> <br></br>
					<label>Description:</label> <br></br>
					<input onChange={handleDescriptionChange} value={description} type="text" className="form-control"></input> <br></br>
					<label>Date Applied:</label>
					<DatePicker className="form-control" onChange={handleDateChange} selected={dateApplied} />
					<button id="addButton" className="btn btn-outline-success" type="button" onSubmit={createApplication}>
						Add Application
					</button>
				</form>
			</div>
		</React.Fragment>
	);
}
