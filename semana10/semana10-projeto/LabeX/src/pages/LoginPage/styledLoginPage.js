import styled from "styled-components"

export const ContainerLoginPage = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`

export const ContainerLeft = styled.div`
   display: flex;
   border: 1px solid black;
   width: 570px;
   height: 705px;
`

export const ContainerRight = styled.div`
   display: flex;
   border: 1px solid black;
   width: 570px;
   height: 705px;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
`

export const Title = styled.div`
   display: flex;
   border: 1px solid black;
   width: 10vw;
   height: 10vh;
   justify-content: center;
   align-items: center;

   p {
      font-size: 30px;
   }
`

export const Form = styled.form`
`

export const ContainerInput = styled.div`
   width: 20vw;
   height: 20vh;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   margin-bottom: 50px;
`

export const Input = styled.input`
   width: 20vw;
   height: 5vh;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid black;
`

export const ContainerButton = styled.div`
   display: flex;
   width: 15vw;
   height: 10vh;
   justify-content: space-around;
   align-items: center;
   

   button {
       width: 90px;
       height: 40px;
   }
`