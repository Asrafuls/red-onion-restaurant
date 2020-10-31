import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';


const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [password, setPassword] = useState('')


    const [passwordMatched, setPasswordMatched] = useState(false)

    const auth = useAuth()

    const { user, createAccountWithPassword, error, errorMessage, acSuccessful } = auth;

    const onBlur = () => {
        if (pass === password) {
            document.querySelector('.passwordNotMatchedMessage').style.display = 'none';
            setPasswordMatched(true)
        } else {
            document.querySelector('.passwordNotMatchedMessage').style.display = 'block';
            setPasswordMatched(false)
        }
    }

    const handelCreateAccount = (e) => {
        if (passwordMatched) {
            createAccountWithPassword(name, email, password)
        }
        e.preventDefault()
        e.target.reset()
    }

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
                            }} onSubmit={handelCreateAccount}>
                                <br /><br />
                                <h2 style={{ textAlign: "center" }}>Create an account</h2><br />
                                <input onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Name' name="name" required />
                                <br />
                                <input onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Email' name="email" required />
                                <br />
                                <input onChange={(e) => setPass(e.target.value)} type='password' className='form-control' placeholder='Password' name="pass" required />
                                <br />
                                <input onBlur={onBlur} onChange={(e) => setPassword(e.target.value)} type='password' className='form-control' placeholder='Confirm Password' name="password" required />
                                <span className='text-danger passwordNotMatchedMessage'>Password not Matched</span>
                                <br />
                                {
                                    error && <div class="alert alert-danger" role="alert">
                                        <span>{errorMessage}</span>
                                    </div>}
                                {
                                    acSuccessful &&
                                    <div class="alert alert-success" role="alert">
                                        Account Creation Successful
                        </div>
                                }
                                <input style={{ width: '100%' }} value='Create Account' className="btn btn-danger" type="submit" />
                            </form>
                            <div style={{
                                width: '400px',
                                margin: '0 auto',
                                paddingBottom: '50px',
                                textAlign: 'center'
                            }} >
                                <Link style={{ textAlign: "center" }} className='text-danger' to="/login">Already have an account</Link>
                            </div>
                        </>
                }
            </div>
        </section>
    );
};

export default SignUp;