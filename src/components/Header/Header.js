import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../SignUp/useAuth';
import logoImg from './../../logo/logo2.png';
import './header.css'

const Header = () => {

    const auth = useAuth()
    const { signOut } = auth;

    return (
        <section className='containerFull headerMain' id='header'>
            <header className="containerMain header">
                <Link style={{ float: 'left' }} to='/' className="logoSection">
                    <img style={{ width: '150px', marginTop: '23px' }} src={logoImg} alt="" className="logo" />
                </Link>
                <ul style={{ float: 'right', marginTop: '30px' }} className='headerMenu'>
                    <li style={{ marginTop: '2px' }}><a href='./../cart' style={{ cursor: 'pointer' }}><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg></a></li>
                    {
                        auth.user ?
                            <button style={{ float: 'right', marginTop: '-5px' , borderRadius: '20px' , background: '#F91944' , border: 'none' }} onClick={signOut} className="btn btn-danger text-center headerMenu">Sign Out</button>:
                            <>
                                <li style={{ marginTop: '4px' }}><NavLink to="/login">Login</NavLink></li>
                                <li className='menuSignUp' style={{ marginTop: '4px' }}><NavLink to="/signup">Sign Up</NavLink></li>
                            </>
                    }
                </ul>

            </header>
        </section>
    );
};

export default Header;