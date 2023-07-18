import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import IosShareIcon from '@mui/icons-material/IosShare';
import {Link} from "react-router-dom";
import AttachmentIcon from "@mui/icons-material/Attachment";
import {Tweet} from "../page_components/Home/Tweet";

const tweets = [
        {
            username: 'Omoleen',
            profilePicture: require('../../assets/img/user-profile-icon.png'),
            tagName: 'nuel',
            content: 'My first Tweet',
            image: 'https://pbs.twimg.com/media/F0fzX_iWYAYGaT6?format=jpg&name=4096x4096',
            // image: '',
            numLikes: 122,
            numViews:121,
            numComments:133
        },
        {
            username: 'Praise',
            profilePicture: require('../../assets/img/user-profile-icon.png'),
            tagName: 'Emma',
            content: 'My latest Tweet',
            image: 'https://pbs.twimg.com/media/F0hLQ3yWwAAYf9M?format=jpg&name=large',
            // image: '',
            numLikes: '122k',
            numViews: '121k',
            numComments: '133k'
        },
    ]

const MainTweet = () => {
    return (
        <>
            <div className='position-fixed home-nav d-flex align-items-center px-3 gap-4 pt-2 border-primary' style={{ zIndex: '9999', height: '56px', width: 'inherit', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <Link to='/' style={{color: 'white'}}><i className='bi bi-arrow-left fs-5'/></Link>
                <h1 className='fw-bold' style={{fontSize: '1.2rem', }}>Tweet</h1>
            </div>
            <div className='d-flex flex-column gap-2 p-3' style={{height: 'fit-content', color: 'white', borderBottom: '1px solid grey', marginTop: '56px'}}>
                <div className='w-100 d-flex flex-row flex-nowrap gap-2' style={{}}>
                    <img className='rounded-circle bg-white' style={{}} src={{}} width='48px' height='48px' alt=''/>
                    <div className='d-flex flex-column' style={{}}>
                        <h5 className='text-white m-0' style={{fontSize: '1rem'}}>x</h5>
                        <h5 className='m-0' style={{color: 'grey', fontSize: '1rem'}}>@x</h5>
                    </div>

                </div>
                <div className='d-flex flex-column gap-2 w-100' style={{}}>

                    <p className='m-0'>ssssssss</p>
                    <img loading='lazy' className='rounded-4' style={{maxHeight: '400px', maxWidth: '100%', backgroundColor: 'grey'}} src='https://pbs.twimg.com/media/FxAtsWRXsAAanO3?format=jpg&name=large' alt=''/>
                    <div className='pb-2' style={{color: 'grey', fontSize: '0.9rem', borderBottom: '1px solid grey'}}>
                        12:34 AM <i className='bi bi-dot' /> May 26, 2023 <i className='bi bi-dot' /> <strong className='text-white'>17M</strong> Views
                    </div>
                    <div className='d-flex flex-row gap-3 pb-2' style={{borderBottom: '1px solid grey'}}>
                        <div className=''>
                            <strong>100</strong><span style={{color: 'grey'}}> Retweets</span>
                        </div>
                        <div className=''>
                            <strong>100</strong><span style={{color: 'grey'}}> Likes</span>
                        </div>
                        <div className=''>
                            <strong>100</strong><span style={{color: 'grey'}}> Comments</span>
                        </div>

                    </div>
                    <div className='d-flex flex-row flex-nowrap justify-content-around align-content-center w-100 react-icons pb-2' style={{color: 'grey', borderBottom: '1px solid grey'}}>
                        <ChatBubbleOutlineOutlinedIcon className='chat' fontSize='small' />
                        <FavoriteBorderOutlinedIcon className='like' fontSize='small' />
                        <IosShareIcon fontSize='small' />
                    </div>
                    <div className='d-flex flex-row flex-nowrap gap-2 py-2' style={{}}>
                        <img className='rounded-circle bg-white' style={{}} src={{}} width='48px' height='48px' alt=''/>
                        <div className='w-100 d-flex flex-column' style={{}}>
                            <textarea rows='2' placeholder='Tweet your reply!' className='w-100 bg-black text-white border-0 border-bottom-0' name='comment'/>
                            <div className='d-flex flex-row flex-nowrap justify-content-between align-content-center pt-2' style={{borderTop: '1px solid grey'}}>
                                <AttachmentIcon role='button' onClick={{}} />
                                <button className='btn btn-primary rounded-5 fw-bold' style={{}}>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {tweets.map((item, index) => <Tweet username={item.username} profilePicture={item.profilePicture} tagName={item.tagName} content={item.content} image={item.image} numLikes={item.numLikes} numViews={item.numViews} numComments={item.numComments}/>)}



        </>
    )
}

export {MainTweet}