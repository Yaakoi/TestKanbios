import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // Appliquer le token à chaque demande si on est connecté
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Sinon on supprime le header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
