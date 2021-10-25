import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_EMPLOYEES,LOADING_EMPLOYEE, GET_ERRORS } from "./types";

// Connexion utilisateur
    export const getEmployees = () => (dispatch)  => {
        dispatch({
            type: LOADING_EMPLOYEE
        })
        axios
            .get("/api/employees")
            .then(res => {
                dispatch({
                    type: GET_EMPLOYEES,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.message,
                })
            });
    }