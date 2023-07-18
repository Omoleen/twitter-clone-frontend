// import logo from '..'

const AuthSignUp = ({setLoginModal, setSignupModal}) => {
    // const handleLoginClick = e => {
    //     e.preventDefault()
    //
    // }
    return (
        <div className='d-flex flex-row flex-nowrap w-100 bg-black text-white'>
              <div className='image-container d-lg-block d-none vh-100'/>

              <div className='d-flex flex-column p-lg-5 p-4 signup'>
                  <img src={require('./../../../assets/img/twitter-512.png')} alt='' height='65px' width='65px'/>
                  <div className='mt-5 d-flex flex-column h-100 justify-content-between pb-5 '>
                      <div className='fw-bolder happening'>Happening now</div>
                      <div className=''>
                            <div className='fw-bolder' style={{fontSize: '2rem'}}>Join Twitter today.</div>
                          <div className='d-flex flex-column mt-4' style={{width:'20rem'}}>
                              <div className='d-flex flex-column gap-2'>
                                  <button className='btn btn-light rounded-5'>Sign up with Google</button>
                                  <button className='btn btn-light rounded-5 fw-bold'>Sign up with apple</button>
                              </div>
                              <div className='d-flex flex-row align-items-center justify-content-center gap-2'>
                                  <hr style={{width:'45%'}}/>
                                  <div>or</div>
                                  <hr style={{width:'45%'}}/>
                              </div>
                              <button className='btn btn-primary rounded-5 fw-bold' onClick={() => setSignupModal(true)}>Create Account</button>
                          </div>

                      </div>
                      <div className='d-flex flex-column gap-3 mt-4' style={{width:'20rem'}}>
                            <div className='fw-bold' style={{fontSize: '1rem'}}>
                                Already have an Account?
                            </div>
                          <button className='btn btn-outline-light rounded-5 fw-bold' style={{borderColor: 'grey'}} onClick={() => setLoginModal(true)}>Sign in</button>
                      </div>
                  </div>
              </div>
      </div>
    )
}

export {AuthSignUp}