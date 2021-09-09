import styled from "styled-components"

export const ContainerHeader = styled.header`
   display: flex;
   border: 1px solid black;
   height: 7vh;
   justify-content: space-evenly;
   align-items: center;
   background-color: #49868C;
   box-shadow: 5px 2px 2px 2px rgba(0, 0, 0, 0.2);
`

export const ContainerLogo = styled.div`
   display: flex;
   width: 5vw;
   height: 6vh;
   justify-content: center;
   align-items: center;

   button {
      width: 170px;
      height: 60px;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
   }
`
export const Logo = styled.div`
   display: flex;
   width: 5vw;
   height: 5vh;
   margin: 5px;
   color: #ffff
`

export const ContainerInput = styled.div`
   display: flex;
   width: 40vw;
   height: 7vh;
   justify-content: center;
   align-items: center;
   margin-left: 10%;

   input {
       width: 30vw;
       height: 1vh;
   }
`

export const ContainerButton = styled.div`
   display: flex;
   width: 15vw;
   height: 7vh;
   justify-content: space-between;
   align-items: center;

   button {
       width: 130px;
       height: 40px;
       margin: 15px;
       display: flex;
       align-items: center;
       justify-content: space-around;
   }
`