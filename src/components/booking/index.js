import React from "react";
import  {Wrapper, Content, MenuContent}  from "../homepage/Home/Home.styles";
import {DetailsContent } from "../prices/Prices.style";
import { Timing, Reservation, Button, Confirmation } from "./Booking.styles";
import {useState, useEffect} from 'react';
import { geolocated } from "react-geolocated";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Header from "../homepage/Header";
import axios from "axios";
import Select from 'react-select'
import { colors } from "@material-ui/core";




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

  const [haircuts, setHaircuts] = useState('');
  const [services, setServices] = useState('');


  const fetchData = () => {

      fetch(`${process.env.REACT_APP_API_URL}/services/haircut/`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setHaircuts(data);
          
        })
    }
    const fetchServices = () => {

      fetch(`${process.env.REACT_APP_API_URL}/services/extra_services/`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setServices(data);
          
        })
    }
  useEffect(() => {
      fetchData();
 }, []);
 useEffect(() => {
  fetchServices();
}, []);


const book = (hair_cut, extra_services) => async dispatch =>{
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
            }
        };
        const body = JSON.stringify({hair_cut, extra_services});
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/booking/booking/`, config,body)
            dispatch({
                type: 'SUCCESSFUL',
                payload: res.data
            })
        } catch (err){
            dispatch({
                type: 'FAILED',
            });
        }
    } else {
        dispatch({
            type: 'FAILED',
        })
    }
}





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

                <h2>Extra Services</h2>
                {services.length > 0 ? (
                <td>
                {services.map( service=>(
                
                <>
                    <input
                type="radio"
                name="service"
                value={service.type_of_service} onChange={(e) => {setExtraServices(e.target.value)}}
              />
              {service.type_of_service}
                    
                    ))
           
                    
                </>))}</td>):<div></div>}
                
              {/*<Select options={haircuts} />
                <Select options={services}/>
                <select className="haircut" value={extraservices} onChange={(e) => {setExtraServices(e.target.value)}}>
                    <option disabled selected>Extra Services</option>
                    <option>Hair Washing</option>
                    <option>Nail Cut</option>
                </select>
                */ }  
                
                <h2>Hair Cut</h2>
                {haircuts.length > 0 ? (
                <td>
                {haircuts.map( hair=>(
                
                <>
                    <input
                type="radio"
                name="haircut"
                value={hair.hair_cut_type} onChange={(e) => {setHairCut(e.target.value)}}
              />
              {hair.hair_cut_type}
                    
                    ))
           
                    
                </>))}</td>):<div></div>}
                
            {/*  <h3>Location</h3>
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
       min="09:00" max="20:30" required className="time" value={time} onChange={(e) => {setTime(e.target.value)}}></input>*/}
           
            <Button onClick={function(event){getvalue(); handleClickOpen()}}>Book</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Confirmation
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                   Confirm your Booking 
                      <h3>{haircut}</h3> <h3>{extraservices}</h3>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose}>No!</Button>
                    <Button onClick={function(event){fetch(`${process.env.REACT_APP_API_URL}/booking/booking/`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `token ${localStorage.getItem('access')}`,
  },
  body: JSON.stringify({
    hair_cut: haircut,
    extra_services: extraservices,
  })
 
});window.location.pathname='/home'}}>Yes!</Button>
                </DialogActions>
                </DialogContent>
                
            </Dialog>
            </Reservation>
        </Content>
    </Wrapper>
);
    
};
export default Booking;