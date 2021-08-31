import styled from "styled-components"

export const ContainerHeader = styled.div`
   display: flex;
   border: 1px solid black;
   height: 7vh;
   justify-content: space-evenly;
   align-items: center;
   background-color: #49868C;
   box-shadow: 5px 2px 2px 2px rgba(0, 0, 0, 0.2);
`

export const ContainerTitle = styled.div`
   display: flex;
   border: 1px solid black;
   width: 5vw;
   height: 6vh;
   justify-content: center;
   align-items: center;
`
export const ContainerInput = styled.div`
   display: flex;
   width: 40vw;
   height: 7vh;
   justify-content: center;
   align-items: center;
   margin-left: 70px;

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
       width: 110px;
       height: 40px;
       margin: 15px;
   }
`