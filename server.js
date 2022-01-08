const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();
const Application = require("./models/Application");

//Middleware
//to parse body
app.use(express.json());
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected to DB"))
	.catch(console.error);

app.get("/applications", async (req, res) => {
	//  Application(deadlines => dateAppliedn(deadlines))
	//     .catchapplicationses.status(400rpplicationsror: ' + err));
	const application = await Application.find();
	res.json(application);
});

app.post("/application/new", (req, res) => {
	const application = new Application({
		companyName: req.body.companyName,
		position: req.body.position,
		description: req.body.description,
		status: req.body.status,
		// dateApplied: Date.parse(req.body.dateApplied),
		dateApplied: req.body.dateApplied,
	});
	//just to see
	//console.log(application);
	application.save();
	// application
	// 	.save()
	// 	.then(() => res.json("application added!"))
	// 	.catch((err) => res.status(400).json("Error: " + err));
});

app.put("/application/edit/:id", async (req, res) => {
	const { id } = req.params;
	const application = await Application.findByIdAndUpdate(id, { ...req.body.application });
	//await Application.findByIdAndUpdate(id, {})
	res.send("poop test edit");
});

app.delete("/application/delete/:id", async (req, res) => {
	const { id } = req.params;
	await Application.findByIdAndDelete(id);
	res.send("poop delete");
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
