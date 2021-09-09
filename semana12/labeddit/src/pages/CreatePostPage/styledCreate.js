import styled from "styled-components"


export const ContainerPost = styled.main`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`

export const ContainerCreate = styled.section`
   display: flex;
   width: 30vw;
   height: 60vh;
   margin-bottom: 15%;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`
export const FormPost = styled.form`
   display: flex;
   width: 100%;
   height: 50vh;
   border: 1px solid silver;
   background-color: #ffff;
   border-radius: 3px;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;

   button {
       width: 10vw;
       height: 5vh;
       display: flex;
   }
`

export const ImgContainer = styled.div`
   display: flex;
   width: 6vw;
   height: 4vh;
   justify-content: center;
   margin-top: 7px;

   img {
       width: 32px;
       height: 32px;
   }
`

export const Input = styled.div`
   display: flex;
   width: 15vw;
   height: 5vh;
   justify-content: center;
`

export const ContainerTextArea = styled.div`
   display: flex;
   width: 25vw;
   height: 27vh;
   justify-content: center;
   align-items: center;

   textarea {
       width: 100%;
       height: 100%;
   }
`
export const ContainerButton = styled.div`
   display: flex;
   width: 12vw;
   height: 8vh;
   justify-content: center;
   align-items: center;
`
