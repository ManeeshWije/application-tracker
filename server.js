const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const Application = require("./models/Application");

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected to DB"))
	.catch(console.error);

app.get("/", async (req, res) => {
	//  Application(deadlines => dateAppliedn(deadlines))
	//     .catchapplicationses.status(400rpplicationsror: ' + err));
	const application = await Application.find();
	res.json(application);
});

app.post("/tracker", (req, res) => {
	const application = new Application({
		position: req.body.position,
		description: req.body.description,
		status: req.body.status,
		dateApplied: req.body.dateApplied,
	});
	application.save();
	res.json(application);
});

app.put("/tracker", (req, res) => {
	res.send("poop test edit");
});

app.delete("/tracker", (req, res) => {
	res.send("poop delete");
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
