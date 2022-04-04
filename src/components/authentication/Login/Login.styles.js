import styled from 'styled-components';
import Wallpaper from '../../../images/wallpaper.jpg'

export const Wrapper = styled.div`
    text-align: center;
    padding-top: 50px;
    background-image: url(${Wallpaper});
    background-size: cover;
    min-height: 100vh;
`;

export const Content = styled.div`
background-color: lightgray;
margin: auto;
  width: 30%;
  border: 3px solid transparent;
  padding: 10px;
  justify-content: center;
  text-align: center;
  border-radius: 3ch;
 
`;
export const Username = styled.input`
height: 30px;
font-size: large;
font-style: oblique;
font-family: Georgia, 'Times New Roman', Times, serif;
border-radius: 1ch;
width: 60%;
background-color: darkgray;
color: darkgoldenrod;
`;

export const Button = styled.button`
    width: 40%;
    height: 50px;
    background-color: darkgoldenrod;
    border-color: transparent;
    transition-duration: 0.4s;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: large;
    font-style: oblique;
    cursor: pointer;
    border-radius: 1ch;
    margin-top: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
    
    :hover{
        color: white;
        background-color: darkgrey;
        border-color: transparent;
    }
`;
export const Profile = styled.img`
    width: 100px;
    border-radius: 100%;
    margin-left: 10px;
`;

export const Text = styled.h2`
    color: darkorange;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;



