import styled from 'styled-components';

export const Wrapper = styled.div`
    background: darkgoldenrod;
    padding: 0 20px;
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
    h2{
            
            font-style: italic;
            font-family: Georgia, 'Times New Roman', Times, serif;
    }
    @media screen and (min-width: 720px){
        
        .arrow{
            display: none;
        }
      
}
    @media screen and (max-width: 720px){
        
        .arrow{
            margin-bottom: 10px;
        }
        .ArrowDown{
        width: 1px;
	    height: 1px;
        margin-top: 30px;
        margin-left: 5px;
	    border-left: 5px solid transparent;
	    border-right: 5px solid transparent;
	    border-top: 10px solid #555;
        }
      
}
   
`;

export const BarberLogo = styled.img`
   width: 50px;
   border-radius: 25%;
   margin-bottom: 18px;

@media screen and (max-width: 500px){
    width: 50px;
}
`;
export const ProfileContent = styled.div`
    display: flexbox;
    justify-content: space-between;
    margin-bottom: 5px;

    .dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index:999;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition-duration: 0.4s;
  z-index:999;
}
.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;transform: translate(-80%, 3%);}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
    @media screen and (max-width: 720px) {
        display: none;
        

}
    
`;
export const Profile = styled.img`
    width: 50px;
    border-radius: 100%;
    margin-left: 10px;
`;
export const HeaderText = styled.h4`
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: black;
`;
export const ArrowDown = styled.div`
    
    width: 1px;
	height: 1px;
    margin-top: 30px;
    margin-left: 5px;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 10px solid #555;
`;

export const SocialImg = styled.img`
 width: 20px;
 height: 20px;
 padding-left: 10px;
 cursor: pointer;
 margin-top: 10%;
 transition: 0.3s;
 :hover{
    transform: scale(2);
 }

@media screen and (max-width: 500px){
    width: 20px;
}

`
export const SocialLogo= styled.div`
display: flex;
h3{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
}
    @media screen and (max-width: 650px){
    display: none;
}
`;