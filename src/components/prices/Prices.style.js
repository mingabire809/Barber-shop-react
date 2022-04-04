import styled from "styled-components";

export const PriceContent = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    margin: auto;
    width: 30%;
    border: 3px solid transparent;
    padding: 10px;
    justify-content: center;
    text-align: center;
    border-radius: 15px 50px;
    color: white;
    color: darkorange;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
    .title{
        text-decoration: underline;
    }
    @media screen and (max-width: 1090px) {
        width: 50%;
}
@media screen and (max-width: 690px) {
        width: 70%;
}
@media screen and (max-width: 690px) {
        width: 90%;
}
 
`;

export const DetailsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;