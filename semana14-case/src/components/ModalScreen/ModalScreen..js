import { Card } from "../TarotCard/styledTarotCard"
import { ModalWrapper, Background, ContentContainer, CloseModalButton, TitleContainer, TextContainer } from "./styledModalScreen"
import useRequestData from "../../hooks/useRequestData"


const ModalScreen = ({ showModal, setShowModal }) => {

    const getTarot = useRequestData([], "tarot.json")


    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper>
                        <CloseModalButton onClick={() => setShowModal(prev => !prev)} />
                        <Card />

                        <ContentContainer>
                            <TitleContainer>
                                <p>Título</p>
                            </TitleContainer>

                            <TextContainer>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend, sapien non congue consequat, risus augue feugiat felis, ac maximus enim erat ac diam. Nam gravida orci nec magna ultrices faucibus. Nullam facilisis ligula nisl, at lacinia odio ultricies quis. Quisque dictum neque odio, at tempus odio ornare at. Praesent vel mauris lacinia, tempor eros a, maximus dolor. Ut id efficitur sapien. In a tempor tellus, ultrices semper erat. Nunc euismod interdum pharetra. Maecenas porta eros vel leo suscipit, nec suscipit sapien dapibus. Sed vitae convallis nibh, ut viverra arcu. Pellentesque vel interdum odio, ut sodales ipsum. Maecenas vestibulum dolor et mi posuere, sed sagittis velit bibendum. Quisque eget felis non ipsum posuere luctus a id mi. Mauris pretium luctus nibh, et consectetur nulla malesuada ac. Cras congue congue ex, eu aliquet nisi imperdiet vel. Etiam mi sem, finibus sit amet ipsum ut, porta cursus ipsum. 
                                </p>
                            </TextContainer>
                        </ContentContainer>
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    )
}

export default ModalScreen