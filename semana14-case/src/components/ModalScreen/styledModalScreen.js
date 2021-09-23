import styled from "styled-components"
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`

export const ModalWrapper = styled.article`
  position: relative;
  width: 50%;
  margin: 0 auto;
  max-height: 60vh;
  margin-top: calc(100vh - 80vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 2px solid #f6f41a;
  overflow: auto;
  display: flex;
  flex-direction: row;
`
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: silver;
  border-radius: 20px;

  :hover {
    background-color: #f6f41a;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  width: 35vw;
  height: 45vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const TitleContainer = styled.section`
  display: flex;
  border: 1px solid black;
  width: 7vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  margin: 15px;
`

export const TextContainer = styled.section`
  display: flex;
  border: 1px solid black;
  width: 90%;
  height: 80%;

  p {
    padding: 10px;
    margin-top: 20px;
  }
`