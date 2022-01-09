import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomeApps from "./components/HomeApps";
import Nav from "./components/Nav";
import AddApplications from "./components/AddApplications";
import Details from "./components/Details";
import Register from "./components/Register";

function App() {
    return (
        <div>
            <Router>
                <Nav></Nav>
                <Routes>
                    <Route exact path="/" element={<HomeApps />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/register" element={<Register />}></Route>
                    <Route exact path="/AddApplication" element={<AddApplications />}></Route>
                    <Route exact path="/Details/:id" element={<Details />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
