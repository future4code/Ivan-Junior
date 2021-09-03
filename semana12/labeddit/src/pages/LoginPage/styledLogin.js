import styled from "styled-components"


export const ContainerLoginPage = styled.div`
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
   width: 10vw;
   height: 10vh;
   justify-content: center;
   align-items: center;
   margin-top: 150px;
`
export const LoginText = styled.p`
   font-size: 30px;
   margin-left: 5px;
`

export const Form = styled.form`
`

export const ContainerInput = styled.div`
   width: 20vw;
   height: 17vh;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
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
   height: 15vh;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-top: 30px;

   button {
       width: 280px;
       height: 50px;
       margin: 5px;
   }
`