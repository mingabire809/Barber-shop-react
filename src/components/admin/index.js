import React, { useState } from "react";
import  {Wrapper, Content, MenuContent}  from "../homepage/Home/Home.styles";
import Booking from '../../images/booking.png'
import profile from '../../images/profile.webp'
import Hair from '../../images/haircut.jpg'
import Extra from '../../images/extra.jpg'
import { MenuAdmin, AdminContent, AdminProfile, MainContent } from "./Admin.styles";
import { func } from "prop-types";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminHeader from "./adminheader";

const Admin = () => {

    const [booking, setBooking] = useState(true)
    const [customer, setCustomer] = useState(false)
    const [haircut, setHairCut] = useState(false)
    const [extra, setExtra] = useState(false)

    function handleBooking(){
        setBooking(true);
        setCustomer(false);
        setHairCut(false);
        setExtra(false);
     //   window.location.pathname='/admin/booking'
    }
    function handleCustomer(){
        setBooking(false);
        setCustomer(true);
        setHairCut(false);
        setExtra(false);
     //   window.location.pathname='/admin/customer'
    }
    function handleHairCut(){
        setBooking(false);
        setCustomer(false);
        setHairCut(true);
        setExtra(false);
      //  window.location.pathname='/admin/haircut'
    }
    function handleExtra(){
        setBooking(false);
        setCustomer(false);
        setHairCut(false);
        setExtra(true);
     //   window.location.pathname='/admin/extra_services'
    }

   

    return(
        <Wrapper>
        <Content>
            <MenuAdmin>
                <AdminProfile src={profile}/>
                <AdminContent>Admin Profile Name</AdminContent>
                <AdminContent onClick={handleBooking}>Booking</AdminContent>
                <AdminContent onClick={handleCustomer}>Customer</AdminContent>
                <AdminContent onClick={handleHairCut}>Hair Cut</AdminContent>
                <AdminContent onClick={handleExtra}>Extra Services</AdminContent>
                <AdminContent>Logout</AdminContent>
            </MenuAdmin>
            
            
            <MainContent>
            <AdminHeader/>
            
            {booking ? <div className="booking"><h1>Booking</h1></div> :<div></div>}  
              {customer ? <div className="customer"><h1>Customer</h1></div> :<div></div>}  
              {haircut ? <div className="haircut"><h1>Hair cut</h1></div>: <div></div>}  
               {extra ? <div className="extra"><h1>Extra Services</h1></div> : <div></div>} 
            
            
             
           {/*
               <Routes>
                <Route path='/admin/booking' element={<div className="booking"><h1>Booking</h1></div>}/>
                <Route path='/admin/customer' element={<div className="customer"><h1>Customer</h1></div>}/>
                <Route path='/admin/haircut' element={<div className="haircut"><h1>Hair cut</h1></div>}/>
                <Route path='/admin/extra_services' element={<div className="extra"><h1>Extra Services</h1></div> }/>
                </Routes>
               */}   
               
            </MainContent>
            
            
        </Content>
    </Wrapper>
    );
    
};

export default Admin;