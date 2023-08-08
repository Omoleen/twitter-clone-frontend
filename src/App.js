// import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Auth} from "./components/pages/Auth";
// import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Home} from "./components/pages/Home";
import {LeftSidebar} from "./components/general/LeftSidebar";
import {RightSidebar} from "./components/general/RightSidebar";
import {Profile} from "./components/pages/Profile";
import {MainTweet} from "./components/pages/MainTweet";
import {dom} from "@fortawesome/fontawesome-svg-core";

dom.watch()

function App() {
    const userState = useSelector(data => data.user)
    console.log(userState)
    // const [loginModal, setLoginModal] = useState(false)
    const user = false

    return (
        <div className='d-flex'>
            <LeftSidebar/>
                <div className='d-flex flex-column bg-black text-white vh-100 overflow-y-scroll middle-bar'>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/:name' element={<Profile/>}/>
                        <Route path='/tweet/:id' element={<MainTweet/>}/>
                    </Routes>
                </div>
            <RightSidebar/>
        </div>
        // <Auth />
    )
}
export default App;
