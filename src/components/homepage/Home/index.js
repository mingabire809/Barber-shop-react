import React, {useState} from "react";
import Background from '../../../images/background.jpg'
import Header from '../../../components/homepage/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAngleDown, faClock, faCoffee, faLocationArrow, faPhone, faTimes } from '@fortawesome/fontawesome-free-solid'
import Time from '../../../images/time.ico'
import Logo from '../../../images/logo2.png'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {TimeLogo , Wrapper, Content, Appointment, MenuContent,MenuText, ContentCenter, BarberLogo, ContentBelow, ContentFooter, Footer, FooterText, ContentHeader } from "./Home.styles";
import Services from '../../../components/services';
import Prices from '../../../components/prices';
import Booking from '../../../components/booking';



const Home = () => {

    const [welcome, setWelcome] = useState(true)
    const [services, setServices] = useState(false)
    const [prices, setPrices] = useState(false)
    const [booking, setBooking] = useState(false)
    

    function handleWelcome(){
        setWelcome(true);
        setServices(false);
        setPrices(false);
        setBooking(false)
    }

    function handleServices(){
        setWelcome(false);
        setServices(true);
        setPrices(false);
        setBooking(false)
    }
    function handlePrices(){
        setWelcome(false);
        setServices(false);
        setPrices(true);
        setBooking(false)
    }
    function handleBooking(){
        setWelcome(false);
        setServices(false);
        setPrices(false);
        setBooking(true)
    }
    const scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'auto'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 

    return(
        <>
     <Header/>
        <Wrapper>
        <Content>
        <ContentHeader>
        
        <BarberLogo onClick={handleWelcome} src={Logo}/>
        
        
       
     <MenuContent>
        {services ? <MenuText onClick={handleServices} style={{textDecoration:'underline'}}>Services</MenuText>:<MenuText onClick={handleServices}>Services</MenuText>} 
        {prices ? <MenuText onClick={handlePrices}style={{textDecoration:'underline'}}>Prices</MenuText>: <MenuText onClick={handlePrices}>Prices</MenuText>} 
         <MenuText onClick={scrollToBottom}>Address</MenuText>
         <MenuText>About Us</MenuText>
         
         <div>
         <div className="Content"></div>
         <div className="Content"></div>
         <div className="Content"></div>
         </div>

     </MenuContent>
 </ContentHeader>
        {welcome ? <ContentCenter>
                <h1 className="first">We design your hair as you wished</h1>
               <h1 className="second">Your satisfaction is our pride!</h1>
               <h4 className="third">We also provide advice for hair maintenance and skin care</h4>
               <Appointment onClick={handleBooking}>Make Appointment</Appointment>
            </ContentCenter> :<div></div>}  
        {prices ? <Prices/>:<div></div>}  
        {services ? <Services/>: <div></div>}
        {booking ? <Booking/>: <div></div>}   
            {/* <Router>
            <ContentHeaders/>
                <Routes>
                <Route path='' element={<ContentCenter>
                <h1 className="first">We design your hair as you wished</h1>
               <h1 className="second">Your satisfaction is our pride!</h1>
               <h4 className="third">We also provide advice for hair maintenance and skin care</h4>
               <Appointment onClick={event =>  window.location.href='/booking'}>Make Appointment</Appointment>
            </ContentCenter>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/prices' element={<Prices/>}/>
                <Route path='/booking' element={<Booking/>}/>
                </Routes>
            </Router>*/}
            
            
            </Content>
        <ContentFooter>
                    <div>
                    <FontAwesomeIcon icon={faClock} size="3x" color="darkgrey"/>
                    <FooterText>Monday to Saturday: 9AM-9PM</FooterText>
                    </div>
                    
                    <div>
                    <FontAwesomeIcon icon={faLocationArrow} size="3x" color="darkgrey"/>
                    <FooterText>Location</FooterText>
                    </div>
                    
                    
                    <div>
                    <FontAwesomeIcon icon={faPhone} size="3x" color="darkgrey"/>
                    <FooterText>+254878548732</FooterText>
                    </div>
                    
                       
                    
                    </ContentFooter>
    </Wrapper>
    </>
    )
    
    
    };

export default Home;
