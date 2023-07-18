import {useRef, useState} from "react";
import {Form} from "react-router-dom";

const AuthLogin = ({setLoginModal, setSignupModal}) => {
    const overlayBg = useRef()
    const [username, setUsername] = useState()
    const handleOverlayClick = e => {
        if (e.target === overlayBg.current) {
            setLoginModal(false)
        }
    }
    const openSignup = e => {
        e.preventDefault()
        setLoginModal(false)
        setSignupModal(true)
    }
    return (
        <div className='login-modal d-flex align-items-center justify-content-center' ref={overlayBg} onClick={handleOverlayClick}>
                <div className='card bg-black d-flex align-items-center justify-content-center p-3 position-relative pb-5 mb-5 rounded-4' style={{width: '35rem'}}>
                    <i className="bi bi-x position-absolute text-white" style={{top:3, left:7, fontSize: '2rem'}} onClick={() => setLoginModal(false)} role='button'/>
                    <div className='d-flex flex-column align-items-center gap-3 mb-5 pt-1' style={{width: '20rem'}}>
                        <img src={require('./../../../assets/img/twitter-512.png')} alt='' height='40px' width='40px'/>
                        <div className='fw-bold text-white' style={{fontSize: '1.7rem'}}>Sign in to Tweeter</div>
                        <button className='btn btn-light rounded-5 w-100'>Login with Google</button>
                        <button className='btn btn-light rounded-5 fw-bold w-100'>Login in with apple</button>
                        <div className='d-flex flex-row align-items-center justify-content-center gap-2 text-white'>
                              <hr style={{width:'45%'}}/>
                              <div>or</div>
                              <hr style={{width:'45%'}}/>
                          </div>
                        <form className='d-flex flex-column w-100 gap-3'>
                            <input type='text' name='email' placeholder='Email' className='w-100 bg-black text-white rounded-1 p-2' style={{height: '3rem', borderColor: 'grey', borderWidth: '1px'}}/>
                            <input type='password' name='password' placeholder='Password' className='w-100 bg-black text-white rounded-1 p-2' style={{height: '3rem', borderColor: 'grey', borderWidth: '1px'}}/>
                            <button className='btn btn-light rounded-5 w-100 fw-bold'>Next</button>
                        </form>

                        <button className='btn btn-outline-light rounded-5 fw-bold w-100' style={{borderColor: 'grey'}}>Forgot password?</button>

                        <div className='mt-5' style={{color: 'grey'}}>
                            Don't have an account? <a href='#' onClick={openSignup} className='text-decoration-none'>Sign up</a>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export {AuthLogin}