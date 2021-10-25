import { GET_EMPLOYEES, LOADING_EMPLOYEE } from "../actions/types";

const initialState = {
  employees: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        loading: false
      };
    case LOADING_EMPLOYEE:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}