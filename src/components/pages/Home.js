import {useRef, useState} from "react";
import AttachmentIcon from '@mui/icons-material/Attachment';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import { Gallery } from "react-grid-gallery";
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

const Home = () => {
    const forYou = useRef()
    const following = useRef()
    const handleMenuClick = e => {
        if (e.target === forYou.current) {
            e.target.classList.add('text-white')
            following.current.classList.remove('text-white')
        } else {
            e.target.classList.add('text-white')
            forYou.current.classList.remove('text-white')
        }
    }

    return (
        <>
            <div className='position-fixed home-nav' style={{ zIndex: '9999', height: '104px', width: 'inherit', backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <h1 className='fw-bold px-3 pt-3 d-none d-lg-block' style={{fontSize: '1.2rem', }}>Home</h1>
                    <div className='d-flex flex-row justify-content-between' style={{borderBottom: '1px solid grey', color: 'grey'}}>
                        <div style={{}} ref={forYou} onClick={handleMenuClick} className='fw-bold border-0 text-white text-center menu-item py-3 col'>For you</div>
                        <div style={{}} ref={following} onClick={handleMenuClick} className='fw-bold border-0 text-center menu-item py-3 col'>Following</div>
                    </div>
                </div>
            <div className='position-relative' style={{marginTop: '104px'}}>
                    <div style={{borderBottom: '1px solid grey'}} className='d-flex flex-row flex-nowrap px-3 py-2 gap-2'>
                    <img className='rounded-circle' style={{}} src='https://thumbs.dreamstime.com/z/young-man-avatar-cartoon-character-profile-picture-black-white-young-man-holding-stick-avatar-cartoon-character-black-151562681.jpg' width='48px' height='48px' alt=''/>
                    <div className='w-100' style={{}}>
                        <textarea rows='3' name='post' className='bg-black text-white border-0'  placeholder='What is happening?!' style={{fontSize: '1.25rem', outline: 'none', width: '100%'}}/>
                        <div className='d-flex flex-row flex-nowrap justify-content-between align-content-center px-2 pt-2' style={{borderTop: '1px solid grey'}}>
                            <AttachmentIcon role='button' onClick={{}} />
                            <button className='btn btn-primary rounded-5 fw-bold' style={{}}>Tweet</button>
                        </div>
                    </div>
                </div>
                    {/*<div className='w-100 p-3 d-flex flex-row flex-nowrap gap-2' style={{height: 'fit-content', color: 'white', borderBottom: '1px solid grey'}}>*/}
                    {/*    <img className='rounded-circle' style={{}} src='https://thumbs.dreamstime.com/z/young-man-avatar-cartoon-character-profile-picture-black-white-young-man-holding-stick-avatar-cartoon-character-black-151562681.jpg' width='48px' height='48px' alt=''/>*/}
                    {/*    <div className='d-flex flex-column gap-1 w-100' style={{}}>*/}
                    {/*        <div className='d-flex flex-row flex-nowrap gap-2' style={{}}>*/}
                    {/*            <h5 className='text-white' style={{fontSize: '1rem'}}>username</h5>*/}
                    {/*            <h5 style={{color: 'grey', fontSize: '1rem'}}>@tag_name</h5>*/}
                    {/*        </div>*/}
                    {/*        <p>Whenever we get new owners we should definitely sign Reece James.</p>*/}
                    {/*        <img loading='lazy' className='rounded-4' style={{maxHeight: '500px'}} src='https://thumbs.dreamstime.com/z/young-man-avatar-cartoon-character-profile-picture-black-white-young-man-holding-stick-avatar-cartoon-character-black-151562681.jpg' alt=''/>*/}
                    {/*        <div className='d-flex flex-row flex-nowrap justify-content-between align-content-center pt-2 w-100 react-icons' style={{}}>*/}
                    {/*            <div className='d-flex flex-row flex-nowrap justify-content-center align-content-center gap-2 chat' role='button' style={{color: 'grey'}}>*/}
                    {/*                <ChatBubbleOutlineOutlinedIcon className='chat' fontSize='small' />*/}
                    {/*                <div className='fw-bold chat' style={{fontSize: '0.85rem'}}>1222</div>*/}
                    {/*            </div>*/}
                    {/*            <div className='d-flex flex-row flex-nowrap justify-content-center align-content-center gap-2 like' role='button' style={{color: 'grey'}}>*/}
                    {/*                <FavoriteBorderOutlinedIcon className='like' fontSize='small' />*/}
                    {/*                <div className='fw-bold like' style={{fontSize: '0.85rem'}}>1222</div>*/}
                    {/*            </div>*/}
                    {/*            <div className='d-flex flex-row flex-nowrap justify-content-center align-content-center gap-2 view' role='button' style={{color: 'grey'}}>*/}
                    {/*                <EqualizerOutlinedIcon className='view' fontSize='small' style={{}}/>*/}
                    {/*                <div className='fw-bold view' style={{fontSize: '0.85rem'}}>1222</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {tweets.map((item, index) => <Tweet username={item.username} profilePicture={item.profilePicture} tagName={item.tagName} content={item.content} image={item.image} numLikes={item.numLikes} numViews={item.numViews} numComments={item.numComments}/>)}
                </div>
        </>
    )
}

export {Home}