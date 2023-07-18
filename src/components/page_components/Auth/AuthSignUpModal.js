import {useRef} from "react";

const AuthSignUpModal = ({setSignupModal}) => {
    const overlayBg = useRef()
    const handleOverlayClick = e => {
        if (e.target === overlayBg.current) setSignupModal(false)
    }
    return (
        <div className='login-modal d-flex align-items-center justify-content-center' ref={overlayBg} onClick={handleOverlayClick}>
                <div className='card bg-black d-flex p-3 position-relative px-5 rounded-4 text-white' style={{width: '35rem'}}>
                    <i className="bi bi-x position-absolute text-white" style={{top:3, left:7, fontSize: '2rem'}} onClick={() => setSignupModal(false)} role='button'/>
                    <div className='card-title fw-bolder' style={{fontSize: '1.2rem'}}>
                        Step 1 of 1
                    </div>
                    <h5 className='fw-bold mb-5' style={{fontSize: '2rem'}}>
                        Create your account
                    </h5>
                    <form className='d-flex flex-column gap-4 mb-2'>
                        <input type='text' placeholder='Email' name='email' className='w-100 bg-black text-white rounded-1 p-2' style={{height: '3.5rem', borderColor: 'grey', borderWidth: '1px'}}/>
                        <input type='password' placeholder='Password' name='password' className='w-100 bg-black text-white rounded-1 p-2' style={{height: '3.5rem', borderColor: 'grey', borderWidth: '1px'}}/>
                        <button className='btn btn-light rounded-5 w-100 fw-bold mt-5' style={{height:'3.5rem'}}>Create account</button>
                    </form>

                </div>
            </div>
    )
}

export {AuthSignUpModal}