import { ContainerComment, ContainerFeed, ContainerItems, ContainerMain, ContainerProfile, ContainerText, Footer, Sidebar, TopBar, User } from "./styledFeedCard"
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';


const FeedCard = () => {
    return (
        <ContainerMain>
            <ContainerFeed>
                <TopBar>
                    <ContainerProfile>
                        <img src={"https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x720.jpg"} alt={"Perfil"} />
                    </ContainerProfile>

                    <User>
                        <p>Bruce</p>
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
                        <p>Nullam sollicitudin vestibulum mollis. Praesent convallis posuere aliquam. Suspendisse in ante sodales, iaculis nisi nec, semper sem. Ut vulputate augue quis elementum euismod. Proin vel lacinia mi, non rutrum nisl. Ut mollis elit velit. In hac habitasse platea dictumst. Phasellus eget gravida lacus. Vivamus tristique, erat nec vestibulum vulputate, lectus metus volutpat justo, at lacinia neque risus quis enim. Proin malesuada auctor felis, sed accumsan nulla gravida nec. Mauris id blandit nibh. Cras porttitor et libero ut dignissim. Sed lectus nunc, commodo non volutpat id, tempus id orci. Morbi aliquet nunc massa, eu venenatis odio consequat et. Donec scelerisque erat turpis, sit amet placerat metus tincidunt maximus. Praesent in diam suscipit elit aliquet pellentesque. Donec et elit tortor. Duis eu turpis quam. </p>
                    </ContainerComment>
                </ContainerItems>

                <Footer>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>

                    <ContainerText>
                        <p>25 comentários</p>
                    </ContainerText>
                </Footer>
            </ContainerFeed>
        </ContainerMain>
    )
}

export default FeedCard