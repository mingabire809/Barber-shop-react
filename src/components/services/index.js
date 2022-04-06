import React, { useState , useEffect} from "react";
import  {Wrapper, Content, MenuContent}  from "../homepage/Home/Home.styles";
import { Cards, Content1, Details } from "./Services.styles";
import Background5 from '../../images/crew_cut.jpg'
import Service from '../../images/services.jpg'
import axios from "axios";




const Services = () =>{
    const [haircut, setHaircut] = useState('');
    const [services, setServices] = useState('');

 
    const fetchData = () => {

        fetch(`${process.env.REACT_APP_API_URL}/services/haircut/`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setHaircut(data);
            
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

    return(
        <Wrapper>
           
        <Content1>Hair Cut
        {haircut.length > 0 ? (
                <Content style={{
                    padding: 30,
                    display: 'flex',
                    flexWrap: "wrap",
                    minHeight: 100            
        
                }}> 
                    {haircut.map(

               
                
                    style =>(
                        <Cards style={{
                            backgroundImage: `url(${style.picture})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            
                        }}>
                            <Details>
                                <h3>{style.hair_cut_type}</h3>
                            </Details>
                            </Cards>
                             
                    )
                    
                )}
                </Content>
            ):<div></div>}

Extra Services
        {services.length > 0 ? (
                <Content style={{
                    padding: 30,
                    display: 'flex',
                    flexWrap: "wrap",
                    minHeight: 100            
        
                }}> 
                    {services.map(

               
                
                    extra_services =>(
                        <Cards style={{
                            backgroundImage: `url(${extra_services.service_picture})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            
                        }}>
                            <Details>
                                <h3>{extra_services.type_of_service}</h3>
                            </Details>
                            </Cards>
                             
                    )
                    
                )}
                </Content>
            ):<div></div>}
            
        </Content1>
        
    </Wrapper>
    )
    
};

export default Services;