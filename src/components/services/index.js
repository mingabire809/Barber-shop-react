import React from "react";
import  {Wrapper, Content, MenuContent}  from "../homepage/Home/Home.styles";
import { Cards, Content1, Details } from "./Services.styles";
import Background5 from '../../images/crew_cut.jpg'




const Services = () =>(
    <Wrapper>
        <Content1>
            Hair Cut
            <Content style={{
            padding: 30,
            display: 'flex',
            flexWrap: "wrap",
            minHeight: 100            

        }}>
            
              <Cards style={{
                backgroundImage: `url(${Background5})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                
            }}>
                <Details>
                    <h3>Name</h3>
                </Details>
            </Cards>
              <Cards style={{
                backgroundImage: `url(${Background5})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                
            }}>
                <Details>
                    <h3>Name</h3>
                </Details>
            </Cards>
            
            
        </Content>
        Extra Services
        <Content style={{
            padding: 30,
            display: 'flex',
            flexWrap: "wrap",
            minHeight: 100             

        }}>
            <Cards style={{
                backgroundImage: `url(${Background5})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                
            }}>
               <Details>
                    <h3>Name</h3>
                </Details>
            </Cards>
             <Cards style={{
                backgroundImage: `url(${Background5})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                
            }}><Details>
            <h3>Name</h3>
        </Details></Cards>
              
            
        </Content>
        </Content1>
        
    </Wrapper>
);

export default Services;