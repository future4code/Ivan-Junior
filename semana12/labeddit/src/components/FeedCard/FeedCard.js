import { ContainerComment, ContainerFeed, ContainerItems, ContainerMain, ContainerMessage, ContainerText, ContainerTitle, Footer, Sidebar, TopBar, User } from "./styledFeedCard"
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { goToPostPage } from "../../routes/coordinator";
import { useHistory } from "react-router";

const FeedCard = (props) => {

    const history = useHistory()

    return (
        <ContainerMain>
            <ContainerFeed onClick={() => goToPostPage(history, props.id)}>
                <TopBar>
                    <User>
                        <p>{props.username}</p>
                    </User>
                </TopBar>

                <ContainerItems>
                    <Sidebar>
                        <IconButton>
                            <ThumbUpAltOutlinedIcon />
                        </IconButton>

                        <p><strong>25.7k</strong></p>

                        <IconButton>
                            <ThumbDownAltOutlinedIcon />
                        </IconButton>
                    </Sidebar>

                    <ContainerComment>
                        <ContainerTitle>
                            <p>{props.title} </p>
                        </ContainerTitle>

                        <ContainerMessage>
                        <p>{props.body}</p>
                        </ContainerMessage>
                    </ContainerComment>
                </ContainerItems>

                <Footer>
                    <IconButton>
                        <MessageIcon onClick={() => goToPostPage(history)} />
                    </IconButton>

                    <ContainerText>
                        <p>{props.commentCount} comentários</p>
                    </ContainerText>
                </Footer>
            </ContainerFeed>
        </ContainerMain>
    )
}

export default FeedCard