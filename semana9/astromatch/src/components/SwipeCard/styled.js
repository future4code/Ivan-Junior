import styled from "styled-components"


export const SwipeCardContainer = styled.div`
   border: 5px solid black;
   width: 20vw;
   height: 76vh;
   box-sizing: border-box;
   border-radius: 30px;
   background-color: silver;
`

export const ContainerImage = styled.div`
   display: flex;
   width: 20vw;
   height: 47vh;
   justify-content: center;
   align-items: center;

   img {
      width: 358px;
      height: 430px;
      margin-right: 10px;
   }
`

export const ContainerBio = styled.div`
   display: flex;
   background-color: siler;
   width: 100%;
   height: 14vh;
   flex-direction: column;
   padding: 10px;
   justify-content: space-evenly;
   align-items: center;
   background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`

export const Title = styled.h4`
  color: white;
  margin-right: 200px;
`

export const Bio = styled.p`
   color: black;
   margin-left: 20px;
`

