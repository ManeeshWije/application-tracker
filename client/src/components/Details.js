import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useState, useEffect } from "react";
const API = "http://localhost:3001";

export default function Details() {
    const [applications, setApplications] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");
    const [position, setPosition] = useState("");
    const [dateApplied, setDateApplied] = useState(new Date()); //sets default date as today
    const [status, setStatus] = useState("N/A");

    const goBack = () => {
        window.location = "/";
    };

    const getApplication = () => {
        let path = window.location.pathname;
        axios
            .get(API + "/application" + path)
            .then((response) => {
                setApplications(response.data);
                setCompanyName(response.data.companyName);
                setDescription(response.data.description);
                setPosition(response.data.position);
                setDateApplied(new Date(response.data.dateApplied));
                setStatus(response.data.status);
            })
            .catch((err) => console.log(err));
    };

    const deleteApplication = async (id) => {
        await fetch(API + "/application/delete/" + id, { method: "DELETE" }).then((response) => {
            response.json();
        });
        goBack();
    };

    const updateStatus = async (id) => {
        const data = await fetch(API + "/application/edit/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: status,
            }),
        }).then((res) => {
            res.json();
        });
        goBack();
    };

    function handleStatusChange(e) {
        e.preventDefault();
        setStatus(e.target.value);
    }

    useEffect(() => {
        getApplication();
    }, []);

    return (
        <React.Fragment>
            <div className="container mt-5">
                <form>
                    <label>Company Name:</label> <br></br>
                    <input value={companyName} type="text" readOnly required className="form-control"></input> <br></br>
                    <label>Position:</label> <br></br>
                    <input value={position} type="text" required readOnly className="form-control"></input> <br></br>
                    <label>Description:</label> <br></br>
                    <textarea value={description} rows="4" required readOnly className="form-control"></textarea>{" "}
                    <br></br>
                    <label>Date Applied:</label>
                    <DatePicker className="form-control" readOnly selected={dateApplied} required />
                    <label>Status: </label> <br></br>
                    <select onChange={handleStatusChange} value={status} id="status">
                        <option value="N/A">Choose an option</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Applied">Applied</option>
                        <option value="Scheduled Interview">Scheduled Interview</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                    <br></br>
                    <button
                        id="save-btn"
                        className="btn btn-success m-2"
                        type="button"
                        onClick={() => updateStatus(applications._id)}
                    >
                        Save
                    </button>
                    <button
                        id="delete-btn"
                        className="btn btn-danger m-2"
                        type="button"
                        onClick={() => deleteApplication(applications._id)}
                    >
                        Delete
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
}
