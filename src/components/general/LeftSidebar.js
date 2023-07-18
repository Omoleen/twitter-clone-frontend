import logo from '../../assets/img/twitter-512.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {LeftBarOption} from "./LeftBarOption";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const LeftSidebar = () => {
    const options = [
        {Icon: HomeOutlinedIcon, text:'Home'},
        {Icon: SearchOutlinedIcon, text:'Explore'},
        {Icon: NotificationsNoneOutlinedIcon, text:'Notifications'},
        {Icon: EmailOutlinedIcon, text: 'Message'}
    ]
    return (
        <>
            <div className='d-none d-lg-flex flex-column bg-black pt-2 gap-2 left-sidebar ' style={{width:'22%', paddingLeft: '80px', maxHeight:'100vh'}}>
                    <button className='rounded-5 d-flex align-items-center justify-content-center gap-2 p-3 fs-4 text-white' style={{width: 'fit-content'}}><img src={logo} alt='' height='30px' width='30px'/></button>
                    {options.map(option => <LeftBarOption Icon={option.Icon} text={option.text}/> )}
            </div>
        </>


    )
}

export {LeftSidebar}