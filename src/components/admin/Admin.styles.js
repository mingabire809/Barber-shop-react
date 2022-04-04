import styled from "styled-components";

export const MenuAdmin = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`;
export const AdminProfile = styled.img`
    padding: 6px 8px 6px 16px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-left: 10px;
`;
export const AdminContent = styled.h3`
padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  color: lightgoldenrodyellow;
font-style: italic;
 font-family: Georgia, 'Times New Roman', Times, serif;
 cursor: pointer;
  :hover{
    color: #f1f1f1;
  }
`;

export const MainContent = styled.div`
    margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  display: flex;
  flex-wrap: wrap;
`;