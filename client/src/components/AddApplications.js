import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const API = "http://localhost:3001";
const API2 = "https://track-job-applications.herokuapp.com";

export default function AddApplications() {
	const [companyName, setCompanyName] = useState("");
	const [description, setDescription] = useState("");
	const [position, setPosition] = useState("");
	const [dateApplied, setDateApplied] = useState(new Date()); //sets default date as today
	const [status, setStatus] = useState("N/A");

	const goBack = () => {
		window.location = "/homeapps";
	};

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

	function handleStatusChange(e) {
		e.preventDefault();
		setStatus(e.target.value);
	}

	function handleDateChange(date) {
		setDateApplied(date);
	}

	const createApplication = async () => {
		await fetch(API2 + "/application/new", {
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
			res.json();
		});
	};

	return (
		<React.Fragment>
			<div className="container mt-5">
				<form className="border border-3 border-dark p-3 rounded shadow-lg">
					<label>Company Name:</label> <br></br>
					<input onChange={handleCompanyChange} value={companyName} type="text" required className="form-control"></input> <br></br>
					<label>Position:</label> <br></br>
					<input required onChange={handlePositionChange} value={position} type="text" className="form-control"></input> <br></br>
					<label>Description:</label> <br></br>
					<textarea onChange={handleDescriptionChange} value={description} rows="4" required className="form-control"></textarea> <br></br>
					<label>Date Applied:</label>
					<DatePicker className="form-control" onChange={handleDateChange} selected={dateApplied} required />
					<label>Status: </label> <br></br>
					<select selected={status} id="status" onChange={handleStatusChange}>
						<option value="N/A">Choose an option</option>
						<option value="Accepted">Accepted</option>
						<option value="Applied">Applied</option>
						<option value="Scheduled Interview">Scheduled Interview</option>
						<option value="Rejected">Rejected</option>
					</select>
					<br></br>
					<button
						id="addButton"
						className="btn btn-info"
						type="button"
						onClick={() => {
							createApplication();
							goBack();
						}}
					>
						Add Application
					</button>
				</form>
			</div>
		</React.Fragment>
	);
}
