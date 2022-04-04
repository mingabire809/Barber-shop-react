import styled from 'styled-components';
import Background from '../../../images/background.jpg'
import Background1 from '../../../images/barber-background.jpg'
import Background2 from '../../../images/barber.jpg'
import Background3 from '../../../images/barber2.webp'
import Background4 from '../../../images/barber3.jpg'
import Background5 from '../../../images/barber4.jpg'
import Background6 from '../../../images/barber5.jpg'
export const Wrapper = styled.div`
     background-image: url(${Background5});
    background-size: cover;
    background-attachment: fixed;
`;

export const Content = styled.div`
   
    min-height: 100vh;

    @media screen and (max-width: 430px) {
        min-height: 130vh;
}
`;
export const ContentCenter = styled.div`

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-75%, -20%);
        border: 5px solid transparent;
        padding: 10px;

        .first{
            color: darkorange;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }

        .second{
            color: darkgray;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
        .third{
            color: wheat;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
`;
export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 7px 0;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    position: sticky;
    
`;

export const MenuContent = styled.div`
    display: flexbox;
    justify-content: space-between;
    margin-bottom: 5px;
    margin-right: 100px;
    @media screen and (max-width: 850px) {
        margin-right: 60px;
}
    @media screen and (max-width: 749px) {
        .Content{
            width: 35px;
            height: 5px;
            background-color: white;
            margin: 6px 0;
        }
}
`;
export const BarberLogo = styled.img`
   width: 80px;
   height: 80px;
   border-radius: 100%;
   cursor: pointer;
   
`;
export const MenuText = styled.h4`
    margin-left: 100px;
    margin-right: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: white;
    transition-duration: 0.4s;
    cursor: pointer;
    :hover{
        text-decoration: underline darkorange 2px;
       
    }

    @media screen and (max-width: 800px) {
        margin-left: 80px;
}
@media screen and (max-width: 749px) {
        display: none;
}
`;
export const Appointment = styled.button`
    height: 50px;
    background-color: darkgoldenrod;
    border-color: transparent;
    transition-duration: 0.4s;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: large;
    font-style: oblique;
    cursor: pointer;
    border-radius: 1ch;
    
    :hover{
        color: white;
        background-color: darkgrey;
        border-color: transparent;
    }

`;

export const ContentBelow = styled.div`
        display: flex;
        position: absolute;
        left: 50%;
        top: 110%;
        transform: translate(-50%, -20%);
        border: 5px solid black;
        padding: 10px;
        justify-content: space-between;
        position: relative;
   
`;

export const ContentFooter = styled.div`
    
    align-items: center;
    border-top: solid darkorange;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 7px 0;
    margin: 0 auto;
    display: flex;
    flex-wrap:wrap;
    left: 0;
    bottom: 0;
    
    
    
   
   margin-top: auto;   
`;

export const TimeLogo = styled.img`
   width: 80px;
   height: 80px;
   border-radius: 100%;
   
   
`;

export const FooterText = styled.h3`
    color: darkgray;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;



