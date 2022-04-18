import React, {Fragment} from "react";
import Barber from '../../../images/barber.jpg';
import profile from '../../../images/profile.webp'
import { useEffect } from "react";
import { connect } from "react-redux";
import { logout, load_user } from "../../../actions/auth";
import FacebookLogo from '../../../images/facebook.png'
import TwitterLogo from '../../../images/twitter.png'
import InstagramLogo from '../../../images/instagram.jpeg'

import { Wrapper, Content, BarberLogo, Profile, HeaderText, ArrowDown, ProfileContent, SocialImg, SocialLogo } from "./Header.styles";
import { Link, Navigate } from "react-router-dom";

const Header = (logout, isAuthenticated, load_user) => {
    const fullName = localStorage.getItem('name')
    const profiles = localStorage.getItem('picture')
    const guestLinks = () =>(
        <Fragment>
            <li>
                <Link to=''>Login</Link>
            </li>
        </Fragment>
    )
    const authLinks = () =>(
        <a onClick={logout}>Logout</a>
    );

    const logoutHandler =() =>{
        logout();
    }
    function Logout(){
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('barber')
        localStorage.removeItem('picture')
        localStorage.removeItem('name')
        window.location.pathname=''
    }
    return(
        <Wrapper>
        <Content>
            <SocialLogo><h3>Follow us on:</h3>
                <SocialImg src={FacebookLogo}/>
                <SocialImg src={TwitterLogo}/>
                <SocialImg src={InstagramLogo}/>
            </SocialLogo>
            
            <h2>Barbershop booking appointment</h2>
                
           <ProfileContent>
           <HeaderText>{fullName}</HeaderText>
            <Profile src={profiles} all='profile'/>
            <div className="dropdown">
            <ArrowDown/>
            <div className="dropdown-content">
            <a>Profile</a>
            <a>My Booking</a>
            <a onClick={Logout}>Logout</a>
            </div>
            </div>
           
             
               
           </ProfileContent>
           <div className="arrow">
           <div className="ArrowDown"></div> 
           </div>
           
        </Content>
    </Wrapper>
    );
    
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{logout})(Header);