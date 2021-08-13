import styled from "styled-components"


export const SwipeCardContainer = styled.div`
   border: 6px solid #E6E8E8;
   width: 20vw;
   height: 78vh;
   box-sizing: border-box;
   border-radius: 30px;
   background-color: #FD5068;
`

export const ContainerImage = styled.div`
   display: flex;
   width: 20vw;
   height: 47vh;
   justify-content: center;
   align-items: center;
   margin-top: 15px;

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
   color: white;
   margin-left: 20px;
`
export const ButtonContainer = styled.div`
   display: flex;
   width: 100%;
   height: 5vh;
   background-color: #FD5068;
   border-radius: 10px;
   justify-content: space-evenly;

button {
   width: 4vw;
   height: 5vh;
   margin: 10px;
   border-radius: 40px;
   border: none;
   background-color: white;
   cursor: pointer;
   :active {
      background-color: #E6E8E8;
   }
}
`
