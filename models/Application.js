const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationSchema = new Schema(
	{
		companyName: { type: String, require: true },
		position: { type: String, require: true },
		description: { type: String, require: true },
		status: { type: String, require: true },
		dateApplied: { type: Date, require: true },
	},
	{
		timestamps: true,
	}
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
