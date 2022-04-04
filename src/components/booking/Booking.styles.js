import styled from "styled-components";

export const Timing = styled.div`
text-align: center;
margin: 20px;
padding: 15px;
color: lightgoldenrodyellow;
background-color: rgba(0, 0, 0, 0.3);
height: 80%;
@media screen and (max-width: 480px) {
        width: 100%;
}
border-radius: 20px;
h1{
            color: darkorange;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }

        h2{
            color: lightgoldenrodyellow;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
`;

export const Reservation = styled.div`
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;   
    height: 80%;
    margin: 20px;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 45%;
    border-radius: 20px;
    height: 80%;
    h1{
            color: darkorange;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }

        h2{
            color: lightgoldenrodyellow;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
        h3{
            color: lightgoldenrodyellow;
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    .haircut{
    background-color: darkgray;
    border: 1px solid darkorange;
    cursor: pointer;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
    height: 40px;
    font-size: large;
    width: 60%;
    border-radius: 1ex;
    margin-bottom: 20px;
    

    }
    td{
        padding-right: 50px;
        color: white;
    }

    .time{
        font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
    height: 40px;
    font-size: large;
    width: 60%;
    border-radius: 1ex;
    margin-bottom: 20px;
    }
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
