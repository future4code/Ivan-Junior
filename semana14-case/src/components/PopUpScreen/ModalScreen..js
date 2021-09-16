import { Card, Container } from "../TarotCard/styledTarotCard"
import { ModalWrapper, Background, ModalContent } from "./styledModalScreen"
import useRequestData from "../../hooks/useRequestData"


const ModalScreen = ({showModal, setShowModal}) => {

    const getTarot = useRequestData([], "tarot.json")


    return (
       <>
           {showModal ? (
               <Background>
                   <ModalWrapper>
                        <Card />
                   </ModalWrapper>
               </Background>
           ) : null}
       </>
    )
}

export default ModalScreen