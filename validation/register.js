const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Conversion des champs vides en strings vides pour validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Check du nom
  if (Validator.isEmpty(data.name)) {
    errors.name = "Merci de renseigner votre nom";
  }

  // Check email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Adresse mail requise";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Adresse mail invalide";
  }

  // Check des mots de passe
  if (Validator.isEmpty(data.password)) {
    errors.password = "Le mot de passe est obligatoire";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Merci de confirmer votre mot de passe";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Le mot de passe doit contenir au moins 6 caractères";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Les mots de passe doivent être identiques";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
