import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import './Login.css'
import { useState } from 'react'
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const singIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <Link to='/'>
            <img
            className="login__log"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>E-Mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button
                type="submit"
                className="login__signinButton"
                onClick={singIn}>Sign in</button>
            </form>
            <p>These "Conditions of Use" constitute an electronic record within the meaning of the applicable law. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>
            <button
            onClick={register}
            className="login__registerButton">Create a Amazon account</button>
            </div>
        </div>
    )
}

export default Login
