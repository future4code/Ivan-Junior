import styled from "styled-components"


export const ContainerScreen = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`

export const ContainerMain = styled.main`
   display: flex;
`
export const ContainerFeed = styled.article`
   display: flex;
   border-radius: 3px;
   width: 27vw;
   min-height: 50px;
   margin-bottom: 270px;
   flex-direction: column;
   background-color: #ffff;
   margin: 0;
   margin-bottom: 10%;
`

export const TopBar = styled.header`
   display: flex;
   width: 100%;
   height: 5vh;
   border: 1px solid silver;
   border-radius: 3px;
   align-items: center;
`

export const ContainerProfile = styled.div`
   display: flex;
   border-radius: 20px;
   border: 2px solid silver;
   width: 30px;
   height: 30px;
   margin-left: 10px;
   justify-content: center;
   align-items: center;

   img {
      border-radius: 20px;
      width: 30px;
      height: 30px;
   }
`

export const User = styled.div`
   display: flex;
   width: 7vw;
   height: 4vh;
   justify-content: flex-start;
   margin: 2px;
   align-items: center;
   font-size: 10;
`
export const ContainerItems = styled.div`
   display: flex;
   width: 100%;
   min-height: 50px;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   border: 1px solid silver;
`

export const ContainerComment = styled.span`
  display: flex;
  width: 100%;
  min-height: 50px;
  margin: 5px;
  justify-content: center;
  align-items: flex-start;
`

export const Sidebar = styled.section`
   display: flex;
   border: 1px solid silver;
   height: 100%;
   width: 2vw;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   border-radius: 3px;
   position: relative;

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
   border: 1px solid silver;
   width: 100%;
   height: 5vh;
   align-items: center;
   border-radius: 3px;

`
export const ContainerText = styled.section`
   display: flex;
   width: 7vw;
   height: 4vh;
   justify-content: center;
   align-items: center;
   font-size: 10;
`