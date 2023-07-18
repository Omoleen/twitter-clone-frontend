import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useParams, Link} from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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

const Profile = () => {
    const params = useParams()
    return (
        <>
            <div className='position-fixed home-nav d-flex align-items-center px-3 gap-4 pt-2 border-primary' style={{ zIndex: '9999', height: '56px', width: 'inherit', backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,0.5)'}}>

                <Link to='/' style={{color: 'white'}}><i className='bi bi-arrow-left fs-5'/></Link>
                <div className='d-flex flex-column p-0' style={{}}>
                    <span className='fw-bold' style={{fontSize: '1.2rem', }}>{params.name}</span>
                    <span className='' style={{fontSize: '0.8rem', color: 'grey'}}>100 Tweets</span>
                </div>

            </div>
            <div className='' style={{marginTop: '56px'}}>
                <div className='position-relative' style={{backgroundColor: 'grey', height: '200px'}}>
                    <img src={require('../../assets/img/twitter-header.jpg')} className='' style={{width: '100%', height: '100%'}} alt=''/>
                    <img src={require('../../assets/img/user-profile-icon.png')} className='rounded-circle bg-white position-absolute' style={{height: '133.5px', left:15, bottom:-66}} alt=''/>
                </div>
                <div className='text-end p-3' style={{height: '66px'}}>
                    <button className='btn btn-outline-dark rounded-5 text-white fw-bold border-1' style={{borderColor: 'grey'}}>Edit Profile</button>
                </div>
                <div className='d-flex flex-column p-3 gap-3' style={{}}>
                    <div className='d-flex flex-column p-0' style={{}}>
                        <span className='fw-bold' style={{fontSize: '1.2rem', }}>{params.name}</span>
                        <span className='' style={{fontSize: '1rem', color: 'grey'}}>@{params.name}</span>
                    </div>
                    <p className='mb-0' style={{}}>
                        Full Stack Developer | Back-end Developer | Django | React.js | HTML | CSS | JavaScript | Web Automation | Machine learning / Deep Learning
                    </p>
                    <div className='d-flex flex-row align-items-center gap-3' style={{fontSize: '0.9rem'}}>
                        <div className='d-flex flex-row align-items-center' style={{gap: '0.2rem'}}>
                            <LinkIcon style={{transform: 'rotate(-45deg)', color: 'grey', fontSize: '1rem'}} />
                            <a href='https://github.com/Omoleen'>github.com/Omoleen</a>
                        </div>

                        <div className='d-flex flex-row align-items-center' style={{color: 'grey', gap: '0.2rem'}}>
                            <CalendarMonthIcon style={{fontSize: '1rem'}} />
                            <span>Joined June 2018</span>
                        </div>
                    </div>
                    <div className='d-flex flex-row align-items-center gap-2' style={{}}>
                        <div className='d-flex flex-row align-items-center' style={{gap: '0.2rem'}}>
                            <p className='fw-bold mb-0' style={{}}>1000</p>
                            <p className='mb-0' style={{color: 'grey'}}>Following</p>
                        </div>
                        <div className='d-flex flex-row align-items-center' style={{gap: '0.2rem'}}>
                            <p className='fw-bold mb-0' style={{}}>71</p>
                            <p className='mb-0' style={{color: 'grey'}}>Followers</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-between' style={{borderBottom: '1px solid grey', color: 'grey'}}>
                    <div style={{}} ref={{}} className='fw-bold border-0 text-white text-center menu-item py-3 col'>For you</div>
                    <div style={{}} ref={{}} className='fw-bold border-0 text-center menu-item py-3 col'>Following</div>
                </div>
                {tweets.map((item, index) => <Tweet username={item.username} profilePicture={item.profilePicture} tagName={item.tagName} content={item.content} image={item.image} numLikes={item.numLikes} numViews={item.numViews} numComments={item.numComments}/>)}
            </div>


        </>
    )
}

export {Profile}