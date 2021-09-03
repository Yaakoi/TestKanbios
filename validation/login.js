const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Conversion des champs vides en strings vides pour validator
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

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
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
