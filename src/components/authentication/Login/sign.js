import React from "react";
import Logo from '../../../images/logo2.png'
import { Wrapper, Content, Username, Button, Profile, Text } from "./Login.styles";
import {useState} from 'react';
import { Link, Redirect, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {signup} from '../../../actions/auth'
const Sign_Up = ({signup, isAuthenticated}) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const[fullName, setFullName] = useState(""); 
    const[email, setEmail] = useState("");
    const[username, setuserName] = useState(""); 
    const[phonenumber, setPhoneNumber] = useState("");
    const[password, setPassword] = useState("");
    const[confirm_password, setConfirm_Password] = useState("");
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
    function handle() {
        console.log(fullName)
        console.log(email)
        console.log(username)
        console.log(phonenumber)
        console.log(password)
        console.log(confirm_password)
        window.location.pathname=''
    }
    const onSubmit = e => {
        e.preventDefault();
        if (password===confirm_password){
            signup(email,fullName,uploadedImage,username, phonenumber, password);
            setAccountCreated(true);
        }
        
    };

    if (isAuthenticated){
        return <Navigate to='/home' />
    }
    if (accountCreated){
        return <Navigate to='' />
    }
    return(
        <Wrapper>
        <Content>
        <form onSubmit={e =>onSubmit(e)}>
        <Profile src={Logo}/>
            <Text>Full Name</Text>
            <Username type="text" placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}}/>
            <Text>Email</Text>
            <Username type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <Text>Username</Text>
            <Username type="username" placeholder="Username" value={username} onChange={(e) => {setuserName(e.target.value)}}/>
            <Text>Phone Number</Text>
            <Username type="number" placeholder="Phone Number" value={phonenumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
            <Text>Picture</Text>
            <Username type="file" accept="image/*" multiple="false" name="myImage" onChange={handleImageUpload} ref={imageUploader}/>
            <Text>Password</Text>
            <Username type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <Text>Confirm Password</Text>
            <Username type="password" placeholder="Confirm Password" value={confirm_password} onChange={(e) => {setConfirm_Password(e.target.value)}}/>
            <Button type="submit">Save</Button>
        </form>
        
        </Content>
    </Wrapper>
    );
    

};

const  mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {signup}) (Sign_Up);