const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const employees = require("./routes/api/employees");

const app = express();

// Middleware Bodyparser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json()); 

// Config BDD
const db = require("./config/keys").mongoURI;

// Connexion à MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connexion à MongoDB ok."))
  .catch((err) => console.log(err));

// Middleware Passport
app.use(passport.initialize());

// Config Passport
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api", employees);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Serveur en cours d'exécution sur le port ${port}.`)
);
