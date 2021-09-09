import styled from "styled-components"


export const Container = styled.body`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`

export const ImageContainer = styled.section`
   display: flex;
   border: 1px solid black;
   width: 40vw;
   height: 70vh;
   margin-bottom: 80px;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   img {
       margin-top: 50px;
   }
`

export const ContainerText = styled.section`
   display: flex;
   width: 27vw;
   height: 8vh;
   justify-content: center;
   align-items: center;
   color: #549AA1;
   border: 1px solid black;
   margin-bottom: 30px;
   position: relative;
`