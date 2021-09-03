import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Création d'un compte utilisateur
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login")) // redirection sur /login en cas de création de compte réussie
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Connexion utilisateur
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Set du token dans le localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      // Decodage du token pour obtenir les infos user
      const decoded = jwt_decode(token);
      // Set de l'utilisateur courant
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set de l'utilisateur courant
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Chargement de l'utilisateur
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Déconnexion de l'utilisateur
export const logoutUser = () => (dispatch) => {
  // Suppression du token dans le localStorage
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
