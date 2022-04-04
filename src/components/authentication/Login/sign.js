import React from "react";
import Logo from '../../../images/logo2.png'
import { Wrapper, Content, Username, Button, Profile, Text } from "./Login.styles";
import {useState} from 'react';
const Sign_Up = () => {
    const[fullName, setFullName] = useState(""); 
    const[email, setEmail] = useState("");
    const[username, setuserName] = useState(""); 
    const[phonenumber, setPhoneNumber] = useState("");
    const[password, setPassword] = useState("");
    const[confirm_password, setConfirm_Password] = useState("");
    function handle() {
        console.log(fullName)
        console.log(email)
        console.log(username)
        console.log(phonenumber)
        console.log(password)
        console.log(confirm_password)
        window.location.pathname=''
    }
    return(
        <Wrapper>
        <Content>
        <Profile src={Logo}/>
            <Text>Full Name</Text>
            <Username type="text" placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}}/>
            <Text>Email</Text>
            <Username type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <Text>Username</Text>
            <Username type="username" placeholder="Username" value={username} onChange={(e) => {setuserName(e.target.value)}}/>
            <Text>Phone Number</Text>
            <Username type="phonenumber" placeholder="Phone Number" value={phonenumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
            <Text>Password</Text>
            <Username type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <Text>Confirm Password</Text>
            <Username type="password" placeholder="Confirm Password" value={confirm_password} onChange={(e) => {setConfirm_Password(e.target.value)}}/>
            <Button onClick={handle}>Save</Button>
        </Content>
    </Wrapper>
    );
    

};

export default Sign_Up;