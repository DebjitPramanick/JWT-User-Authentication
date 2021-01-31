import {
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/auth";

const initialState = {
  token: localStorage.getItem("token"),
  isAllowed: false,
  error: {},
};

const authRedcuder = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAllowed: true,
      };

    case LOAD_USER:
        localStorage.getItem('token');
        return {
            ...state,
            isAllowed: true
        }

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAllowed: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authRedcuder;
