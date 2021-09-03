const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Validation des champs
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Import du modèle Utilisateur
const User = require("../../models/User");

// @route POST api/users/register
// @desc Création compte utilisateur
// @access Public
router.post("/register", (req, res) => {
  // Validation formulaire
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "L'adresse mail existe déjà" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Hachage du mot de passe avant sauvegarde en bdd
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Connexion utilisateur et renvoi token JWT
// @access Public
router.post("/login", (req, res) => {
  // Validation formulaire
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Cherche utilisateur avec son email
  User.findOne({ email }).then((user) => {
    // Check de si un user existe
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email non trouvé" });
    }
    // Check du password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Utilisateur trouvé
        // Création du payload JWT
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Signature token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 an en secondes
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Mot de passe incorrect" });
      }
    });
  });
});

module.exports = router;
