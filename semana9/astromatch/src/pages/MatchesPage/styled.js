import styled from "styled-components"

export const SwipeCardPage = styled.div`
   border: 6px solid #E6E8E8;
   width: 20vw;
   height: 78vh;
   box-sizing: border-box;
   border-radius: 30px;
   background-color: #FD5068;
`

export const MatchesHeader = styled.div`
   display: flex;
   border: 6px solid #E6E8E8;
   width: 100%;
   height: 7vh;
   justify-content: space-between;
   align-items: center;
   border-radius:  20px 20px 5px 5px;

   p {
      margin-left: 25px;
      color: white;
      font-style: bold;
      font-size: 30px;
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&family=Style+Script&display=swap');
      font-family: 'Style Script', cursive;
   }

   button {
      width: 5vw;
      height: 4vh;
      margin-right: 10px;
      margin: 10px;
      border-radius: 10px;
      border: none;
      background-color: #FD5068;
      cursor: pointer;
   }

   img {
      border-style: #E6E8E8;
   }
`


export const ContainerList = styled.div`
   display: flex;
   height: 50%;
   width: 80%;
   flex-direction: column;
   list-style: none;
   justify-content: flex-start;
   align-items: center;
   padding: 10px;
   margin: auto;
`

export const Profile = styled.div`
    border: 2px solid #E6E8E8;
    margin: 5px;
    margin-right: 10px;
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 22px black;
    
    p {
        margin: 10px;
        color: white;
    }
`

export const Img = styled.img`
    border-radius: 15px;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    display: flex;
`

