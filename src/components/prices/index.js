import React, { useState , useEffect} from "react";
import  {Wrapper, Content, MenuContent}  from "../homepage/Home/Home.styles";
import { PriceContent, DetailsContent } from "./Prices.style";

const Prices = ()=> {

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
        <Content style={{
            paddingTop: 50,
            minHeight: 613,
            paddingBottom: 50,
            
        }}>
            <PriceContent>
                
                <h2 className="title">Hair Cut</h2>
                {haircut.length > 0 ? (
            <>
            {haircut.map(

               
                
details =>(
            <DetailsContent>
            <h2>{details.hair_cut_type}</h2>
        .......................................................
            <h2>${details.price}</h2>
            </DetailsContent>
             )
                    
             )}
            </>):<div></div>}
           
            <h2 className="title">Extra Services</h2>
            {services.length > 0 ? (
            <>
            {services.map(

               
                
service_details =>(
            <DetailsContent>
            <h2>{service_details.type_of_service}</h2>
            .......................................................
            <h2>${service_details.service_price}</h2>
            </DetailsContent>
             )
                    
             )}
            </>):<div></div>}
            
            </PriceContent>
        </Content>
    </Wrapper>
    )
    
};

export default Prices;