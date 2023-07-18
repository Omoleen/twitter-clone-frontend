import {AuthLogin} from "../page_components/Auth/AuthLogin";
import {AuthSignUp} from "../page_components/Auth/AuthSignUp";
import {useState} from "react";
import {AuthSignUpModal} from "../page_components/Auth/AuthSignUpModal";

const Auth = () => {
    const [loginModal, setLoginModal] = useState(false)
    const [signupModal, setSignupModal] = useState(false)
    return (
        <div className='position-relative'>
            <AuthSignUp setLoginModal={setLoginModal} setSignupModal={setSignupModal}/>
            {loginModal && <AuthLogin setLoginModal={setLoginModal} setSignupModal={setSignupModal}/>}
            {signupModal && <AuthSignUpModal setSignupModal={setSignupModal}/>}
        </div>
    )
}

export {Auth}