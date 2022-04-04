import React from "react";
import Barber from '../../../images/barber.jpg';
import profile from '../../../images/profile.webp'

import { Wrapper, Content, BarberLogo, Profile, HeaderText, ArrowDown, ProfileContent } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <BarberLogo src={Barber} all='barber'/>
            
            <h2>Barbershop booking appointment</h2>
                
           <ProfileContent>
           <HeaderText>Profile Name</HeaderText>
            <Profile src={profile} all='profile'/>
            <div className="dropdown">
            <ArrowDown/>
            <div className="dropdown-content">
            <a>Profile</a>
            <a>My Booking</a>
            <a>Logout</a>
            </div>
            </div>
           
             
               
           </ProfileContent>
           <div className="arrow">
           <div className="ArrowDown"></div> 
           </div>
           
        </Content>
    </Wrapper>
);

export default Header;