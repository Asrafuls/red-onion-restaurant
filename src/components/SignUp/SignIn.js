import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useAuth } from './useAuth';

const Login = () => {

    const auth = useAuth()

    const { user, signInWithPassword, error, errorMessage, acSuccessful } = auth;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handelSignIn = (e) => {
        signInWithPassword(email, password)
        e.preventDefault()
        e.target.reset()
    }

    console.log(acSuccessful)

    console.log(user)
    return (
        <section className='signUpAndSignInFull containerFull'>
            <div className="signUpAndSignIn container">
                {
                    user ?
                        <>
                            <br /><br />
                            <div className='signedIn alert text-center'>
                                <h2 className="text-danger">You Are Signed in</h2>
                            </div>
                            <br /><br />
                        </> :
                        <>
                            <form style={{
                                width: '400px',
                                margin: '0 auto',
                                paddingBottom: '20px'
                            }} onSubmit={handelSignIn}>
                                <br /><br />
                                <h2 style={{ textAlign: "center" }}>Log In</h2><br />
                                <input onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Email' type='email' required />
                                <br />
                                <input onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='Password' type='password' required />
                                <br />
                                {
                                    acSuccessful &&
                                    <div className="alert alert-success">
                                        Login Successful.
                        </div>
                                }
                                {
                                    error &&
                                    <div className="alert alert-danger">
                                        {errorMessage}
                                    </div>
                                }
                                <input style={{ width: '100%' }} value='Sign In' className="btn btn-danger" type="submit" />
                            </form>
                            <div style={{
                                width: '400px',
                                margin: '0 auto',
                                paddingBottom: '50px',
                                textAlign: 'center'
                            }} >
                                <Link style={{ textAlign: "center" }} className='text-danger' to="/signup">I Don't have an account</Link>
                            </div>
                        </>
                }
            </div>
        </section>
    );
};

export default Login;