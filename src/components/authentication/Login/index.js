import React from "react";
import profile from '../../../images/profile.webp'
import Logo from '../../../images/logo2.png'
import {useState} from 'react';
import { Wrapper, Content, Username, Button, Profile, Text } from "./Login.styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {login} from '../../../actions/auth'

const Login = ({login}) => {

    const getInputValue = (event)=>{
        // show the user input value to console
        const userValue = event.target.value;

        console.log(userValue);
    };
    const getPasswordValue = (event)=>{
        // show the user input value to console
        const passwordValue = event.target.value;

        console.log(passwordValue);
    };
    function display(){
        let a = getInputValue;
        let b = getPasswordValue;

        console.log(a + b);
    }
    const[username, setuserName] = useState(""); 
    const[password, setPassword] = useState("")
    function handle() {
        console.log(username)
        console.log(password)
        window.location.pathname='sign-up/'
    }

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

  //  const {username, password} = formData;
  //  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        login(username, password)
    };

    // Is the user authenticated?
    return(
        <Wrapper>
            
        <Content>
        <form onSubmit={e =>onSubmit(e)}>
            <Profile src={Logo}/>
            <Text>Username</Text>
            <Username type="username" placeholder="Username" value={username} onChange={(e) => setuserName(e.target.value)} required/>
            <Text>Password</Text>
            <Username type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <Button type="submit">Login</Button>
            
            <Text>Or</Text>
            
            <Button onClick={handle}>Sign Up</Button>
            </form>
            
            
        </Content>
    </Wrapper>
    );
    
};

const  mapStateToProps = state =>({
    //Is authenticated
})

export default connect(null, {login}) (Login);