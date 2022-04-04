import React from "react";
import  {Wrapper, Content, MenuContent}  from "../homepage/Home/Home.styles";
import {DetailsContent } from "../prices/Prices.style";
import { Timing, Reservation, Button, Confirmation } from "./Booking.styles";
import {useState} from 'react';
import { geolocated } from "react-geolocated";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Header from "../homepage/Header";


const Booking = () =>{
    const[haircut, setHairCut] = useState(""); 
    const[extraservices, setExtraServices] = useState("");
    const[location, setLocation] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    function getvalue(){
        console.log(haircut)
        console.log(extraservices)
        console.log(location)
        console.log(date)
        console.log(time)
    }
    const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
return(
<Wrapper>
    
        <Content style={{
             
             display: 'flex',
             flexWrap: "wrap",
             paddingLeft: 30,
             paddingRight: 30,
              
        }}>
           <Timing>
            <h1>Opening Hours</h1>
            <DetailsContent>
            <h2>Monday</h2>
        .......................................................
            <h2>9AM to 9PM</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Tuesday</h2>
        .......................................................
            <h2>9AM to 9PM</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Wednesday</h2>
        .......................................................
            <h2>9AM to 9PM</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Thursday</h2>
        .......................................................
            <h2>9AM to 9PM</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Friday</h2>
        .......................................................
            <h2>9AM to 9PM</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Saturday</h2>
        .......................................................
            <h2>9AM to 9PM</h2>
            </DetailsContent>
            <DetailsContent>
            <h2>Sunday</h2>
        .......................................................
            <h2>11AM to 7PM</h2>
            </DetailsContent>
            
           </Timing>
            <Reservation>
                <h1>Book now</h1>
               
                
                <select className="haircut" value={haircut} onChange={(e) => {setHairCut(e.target.value)}}>
                    <option disabled selected>Hair Cut types</option>
                    <option>Undercut</option>
                    <option>Trimmed bear</option>
                </select>
                <select className="haircut" value={extraservices} onChange={(e) => {setExtraServices(e.target.value)}}>
                    <option disabled selected>Extra Services</option>
                    <option>Hair Washing</option>
                    <option>Nail Cut</option>
                </select>
                <h3>Location</h3>
                <td>
              <input
                type="radio"
                name="location"
                value='Barber' onChange={(e) => {setLocation(e.target.value)}}
              />
              Barber
            </td>
                <td>
              <input
                type="radio"
                name="location"
                value='Home' onChange={(e) => {setLocation(e.target.value)}}
              />
              Home
            </td>
            <h3>Date</h3>
            <input type="date" className="time" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
            <h3>Time</h3>
            <input type="time" id="appt" name="appt"
       min="09:00" max="20:30" required className="time" value={time} onChange={(e) => {setTime(e.target.value)}}></input>
            <Button onClick={function(event){getvalue(); handleClickOpen()}}>Confirm</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Confirmation
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Your Booking has been made successfully
                    
                </DialogContentText>
                <DialogActions>
                    <Button onClick={function(event){window.location.pathname=''; handleClose()}}>Got it!</Button>
                </DialogActions>
                </DialogContent>
                
            </Dialog>
            </Reservation>
        </Content>
    </Wrapper>
);
    
};
export default Booking;