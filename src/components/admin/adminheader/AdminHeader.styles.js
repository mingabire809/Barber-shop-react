import styled from 'styled-components';
import NotificationLogo from '../../../images/barber.png'

export const Wrapper = styled.div`
    background: darkgoldenrod;
    padding: 0 20px;
    width: 100%;
    height: 65px;
    border-color: lightyellow;

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 7px 0;
    margin: 0 auto;

    input{
        font-size: var(--fontBig);
        
        
       
        border: 0;
        width: 50%;
        border-radius: 10rem;
        height: 40px;
        
        text-align: center;
        background: lightgray;
        margin-bottom: 10px;

        :focus{
            outline: none;
        }

    }
   
`;

export const Notification = styled.a`
    position: relative;
  display: block;
  height: 50px;
  width: 50px;
  background: url(${NotificationLogo});
  background-size: contain;
  text-decoration: none;
  border-radius: 100%;
  margin-bottom: 15px;
 
  
`;

export const Number = styled.span`
     position: absolute;
  right: -5px;
  top: -12px;
  color: orangered;
  font-weight: 700;
  font-size: 90%;
`;