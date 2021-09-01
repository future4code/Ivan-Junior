import { ContainerFeed, ContainerMain, ContainerProfile, ContainerText, Footer, Sidebar, TopBar } from "./styledFeedCard"
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
                        <img src={"https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/top-crop/width/360/height/360?cb=20160923150728"} alt={"Perfil"} />
                    </ContainerProfile>
                </TopBar>

                <Sidebar>
                     <IconButton>
                          <ThumbUpAltOutlinedIcon />
                     </IconButton>

                     <p><strong>25.7k</strong></p>

                     <IconButton>
                           <ThumbDownAltOutlinedIcon />
                     </IconButton>
                </Sidebar>

  
                <Footer>
                    <MessageIcon />

                    <ContainerText>
                         <p>25 comentários</p>
                    </ContainerText>
                </Footer>
            </ContainerFeed>
        </ContainerMain>
    )
}

export default FeedCard