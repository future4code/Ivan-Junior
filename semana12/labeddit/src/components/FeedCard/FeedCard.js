import { ContainerComment, ContainerFeed, ContainerItems, ContainerMain, ContainerProfile, ContainerText, Footer, Sidebar, TopBar, User } from "./styledFeedCard"
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

const FeedCard = (props) => {

    return (
        <ContainerMain>
            <ContainerFeed>
                <TopBar>
                    <ContainerProfile>
                        <img src={"https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x720.jpg"} alt={"Perfil"} />
                    </ContainerProfile>

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
                        <p>{props.title} </p>
                    </ContainerComment>
                </ContainerItems>

                <Footer>
                    <IconButton>
                        <MessageIcon />
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