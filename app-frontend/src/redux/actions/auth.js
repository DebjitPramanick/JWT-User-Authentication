import setToken from "../setToken";
import axios from 'axios'


export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOAD_USER = "LOAD_USER";
export const AUTH_ERROR = "AUTH_ERROR";





export const loadUser = () => async dispatch => {

    if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
    }

    try{
        const res = await axios.get("http://localhost:5000/api/users");

        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    }
    catch(err){
        dispatch({type: AUTH_ERROR, payload: err});
    }

}



export const registerUser = (name,email,password) => async (dispatch) => {
  try {

    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    const data = {
      name,
      email,
      password
    }

    console.log("Action is working.",data);

    const res = await axios.post('http://localhost:5000/api/users/register',data, config);

    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    });


    dispatch(loadUser());
    
  } catch (err) {
    dispatch({ type: REGISTER_FAIL, payload: err });
  }
};




export const loginUser = (email,password) => async (dispatch) => {
    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ email, password });

      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        body,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err });
    }
}