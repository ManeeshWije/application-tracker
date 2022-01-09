const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const Application = require("./models/Application");
const User = require("./models/User");

//---------------------------Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected to DB"))
	.catch(console.error);

app.post("/api/register", (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	});
	user.save();
	res.json(user);
});

app.get("/api/login", async (req, res) => {
	const user = await User.find();
	res.json(user);
});

app.get("/applications", async (req, res) => {
	const application = await Application.find();
	res.json(application);
});

app.post("/application/new", (req, res) => {
	const application = new Application({
		companyName: req.body.companyName,
		position: req.body.position,
		description: req.body.description,
		status: req.body.status,
		dateApplied: Date.parse(req.body.dateApplied),
	});
	application.save();
});

app.post("/application/edit/:id", (req, res) => {
	Application.findById(req.params.id)
		.then((app) => {
			app.status = req.body.status;
			app.save()
				.then(() => res.json(app))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

app.get("/application/Details/:id", async (req, res) => {
	const application = await Application.findById(req.params.id);
	res.json(application);
});

app.delete("/application/delete/:id", async (req, res) => {
	const application = await Application.findByIdAndDelete(req.params.id);
	res.json(application);
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
