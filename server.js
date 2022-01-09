const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();
const Application = require("./models/Application");
const User = require("./models/User");

//Passport stuff
//const passport = require("passport");
//const passportLocal = require("passport-local").strategy;
//const cookieParser = require("cookie-parser");
//const bcrypt = require("bcryptjs");
//const session = require("express-session");
//const passport = require('passport');
//const LocalStrategy = require('passport-local');
//passport.initialize();

//---------------------------Middleware
app.use(express.json());
app.use(cors());
// app.use(
// 	cors({
// 		origin: "http://localhost:3000", //Location of the react app we connect to
// 		credentials: true,
// 	})
// );
/*
stuff for passport but commented so does mess u guys up for now
app.use(
	session({
		secret: "secretcode",
		resave: true,
		saveUnitialized: true,
	})
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
*/

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected to DB"))
	.catch(console.error);

//----------------------routes
/*
//login route
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
*/

app.post("/api/register", (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	});
	user.save();
	res.json(user);
});

app.get("/api/login", (req, res) => {
	const user = User.findOne({
		username: req.body.username,
		password: req.body.password,
	});
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

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
