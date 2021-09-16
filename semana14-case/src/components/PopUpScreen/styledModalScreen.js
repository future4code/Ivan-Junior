import styled from "styled-components"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const ModalWrapper = styled.div`
  width: 20vw;
  height: 55vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
`

// export const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* line-height: 1.8; */
//   color: #141414;
// `