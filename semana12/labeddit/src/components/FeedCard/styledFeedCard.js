import styled from "styled-components"


export const ContainerMain = styled.main`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`
export const ContainerFeed = styled.article`
   display: flex;
   border: 1px solid black;
   border-radius: 10px;
   width: 22vw;
   height: 52vh;
   margin-bottom: 270px;
   flex-direction: column;
   justify-content: space-between;
   background-color: #ffff;
`
export const TopBar = styled.header`
   display: flex;
   border: 1px solid black;
   width: 100%;
   height: 5vh;
   
   align-items: center;
`
export const ContainerProfile = styled.div`
   display: flex;
   border-radius: 20px;
   border: 1px solid black;
   width: 35px;
   height: 35px;
   margin-left: 10px;
`
export const Sidebar = styled.section`
   display: flex;
   border: 1px solid black;
   height: 80%;
   width: 2vw;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;

   button {
       width: 40px;
       height: 40px;
   }

   p {
       font-size: 12px;
       padding: 0;
       margin: 0;
   }
`

export const Footer = styled.section`
   display: flex;
   border: 1px solid black;
   width: 100%;
   height: 5vh;
   align-items: center;

`
export const ContainerText = styled.div`
   display: flex;
   border: 1px solid black;
   width: 7vw;
   height: 4vh;
   justify-content: center;
   align-items: center;
   font-size: 10;
`