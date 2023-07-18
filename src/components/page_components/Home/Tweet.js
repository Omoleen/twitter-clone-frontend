import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";

const Tweet = ({username, profilePicture, tagName, content, image, numLikes, numViews, numComments}) => {
    return (
        <div className='w-100 p-3 d-flex flex-row flex-nowrap gap-2' style={{height: 'fit-content', color: 'white', borderBottom: '1px solid grey'}}>
            <img className='rounded-circle bg-white' style={{}} src={profilePicture} width='48px' height='48px' alt=''/>
            <div className='d-flex flex-column gap-1 w-100' style={{}}>
                <div className='d-flex flex-row flex-nowrap gap-2' style={{}}>
                    <h5 className='text-white' style={{fontSize: '1rem'}}>{username}</h5>
                    <h5 style={{color: 'grey', fontSize: '1rem'}}>@{tagName}</h5>
                </div>
                <p>{content}</p>
                <img loading='lazy' className='rounded-4' style={{maxHeight: '400px', maxWidth: '100%'}} src={image} alt=''/>
                <div className='d-flex flex-row flex-nowrap justify-content-between align-content-center pt-2 w-100 react-icons' style={{}}>
                    <div className='d-flex flex-row flex-nowrap justify-content-center align-content-center gap-2 chat' role='button' style={{color: 'grey'}}>
                        <ChatBubbleOutlineOutlinedIcon className='chat' fontSize='small' />
                        <div className='fw-bold chat' style={{fontSize: '0.85rem'}}>{numComments}</div>
                    </div>
                    <div className='d-flex flex-row flex-nowrap justify-content-center align-content-center gap-2 like' role='button' style={{color: 'grey'}}>
                        <FavoriteBorderOutlinedIcon className='like' fontSize='small' />
                        <div className='fw-bold like' style={{fontSize: '0.85rem'}}>{numLikes}</div>
                    </div>
                    <div className='d-flex flex-row flex-nowrap justify-content-center align-content-center gap-2 view' role='button' style={{color: 'grey'}}>
                        <EqualizerOutlinedIcon className='view' fontSize='small' style={{}}/>
                        <div className='fw-bold view' style={{fontSize: '0.85rem'}}>{numViews}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Tweet}