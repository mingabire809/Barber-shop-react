import axios from "axios";
import { Username } from "../components/authentication/Login/Login.styles";
import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED_SUCCESS, USER_LOADED_FAIL} from "./types";

export const load_user = () => async dispatch =>{
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/member/username/`, config)
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch (err){
            dispatch({
                type: USER_LOADED_FAIL,
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL,
        })
    }
};

export const login = (username, password) => async dispatch =>{
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            
        },
        
    };
    const body = JSON.stringify({username, password});

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
            
        });

        dispatch(load_user());
    } catch (err){
        dispatch({
            type: LOGIN_FAIL,
        })
    }

};
