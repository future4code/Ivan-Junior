import styled from "styled-components"

export const ContainerSignUpPage = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`

export const ContainerLeft = styled.div`
   display: flex;
   width: 560px;
   height: 705px;
   background-color: #ffffff;

   img {
       width: 100%;
   }
`

export const ContainerRight = styled.div`
   display: flex;
   width: 560px;
   height: 705px;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   background-color: #ffffff;
`
export const Logo = styled.div`
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
   height: 30vh;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   margin-bottom: 50px;
`

export const Input = styled.div`
   width: 20vw;
   height: 7vh;
   display: flex;
   justify-content: center;
   align-items: center;

   input {
       width: 350px;
   }
`

export const ContainerButton = styled.div`
   display: flex;
   width: 20vw;
   height: 10vh;
   justify-content: space-evenly;
   align-items: center;

   button {
       width: 150px;
       height: 40px;
   }
`