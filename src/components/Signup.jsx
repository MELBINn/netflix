import React from 'react'
import '../Signup.css'
import {Link,useNavigate} from 'react-router-dom'
import { useState,useRef } from 'react'

function Signup(props) {


    const nameRef=useRef()
    const passRef=useRef()
    const navigate=useNavigate()

    function submit(){
        let user={name:nameRef.current.value,password:passRef.current.value}
        props.setuser(user)
        navigate("/Login")
    }
    return (
        <>
            <div className='body'>
                <img src="/image/netflix.png" className='netflixlogo' alt="Netflix" />

                <div className='Signup'>
                    <h2>Sign In</h2>
                    <input type="text" className='input' placeholder='email or phone number' ref={nameRef} /><br />
                    <input type="text" className='input' placeholder='password' ref={passRef} /><br />
                    <button onClick={submit} className='button'>sign in</button>
                    <div className='checkbox'>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <h5>Need help?</h5>
                    </div>
                    <h3>New to Netflix? <a href="" ><Link to="Login" className='signupnow' >Sign up now.</Link></a></h3>
                    <div className='p'>This page is protected by Google reCAPTCHA to</div>
                    <div className='p'>ensure you're not a bot. <a href="">Learn more.</a></div>
                </div>
            </div>
        </>
    )
}

export default Signup