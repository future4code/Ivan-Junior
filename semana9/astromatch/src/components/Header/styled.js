import styled from "styled-components"

export const HeaderContainer = styled.div`
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