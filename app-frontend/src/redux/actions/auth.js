import setToken from "../setToken";
import axios from 'axios'


export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOAD_USER = "LOAD_USER";
export const AUTH_ERROR = "AUTH_ERROR";





export const lodUser = () => async dispatch => {

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
        console.log(err);
    }

}