import styled from "styled-components"

export const Container = styled.body`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   margin: 50px;
`

export const Card = styled.section`
   display: flex;
   border: 2px solid #f6f41a;
   border-radius: 5px;
   width: 12vw;
   height: 40vh;
   margin: 20px;
   padding: 10px;
   align-items: center;
   background-color: white;
   box-shadow: 0 0 1em #324fa7;
   cursor: pointer;
   flex-direction: column;

   img {
      width: 90%;
      height: 100%;
   }

   /* :hover {
      transform: scale(0.97);
   } */
`

export const Footer = styled.footer`
   display: flex;
   width: 13.1%;
   height: 5vh;
   border-bottom: 2px solid #f6f41a;
   border-left: 2px solid #f6f41a;
   border-right: 2px solid #f6f41a;
   justify-content: center;
   position: absolute;
   margin-top: 18%;
   align-items: center;
   background-color: white;
`