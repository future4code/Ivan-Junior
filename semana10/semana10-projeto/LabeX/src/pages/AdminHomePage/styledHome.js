import styled from "styled-components"


export const ContainerScreen = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
`

export const SideBar = styled.div`
   display: flex;
   border: 2px solid black;
   height: 100vh;
   width: 15vw;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
`

export const ContainerLogo = styled.div`
   width: 139px;
   height: 80px;
   border: 1px solid black;
   margin: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const ContainerMenu = styled.div`
   display: flex; 
   margin-bottom: 150px;
   width: 100%;
   height: 100vh;
   flex-direction: column;
`

export const Menu = styled.button`
   display: flex;
   border: 1px solid black;
   width: 100%;
   height: 64px;
   list-style: none;
   align-items: center;
`