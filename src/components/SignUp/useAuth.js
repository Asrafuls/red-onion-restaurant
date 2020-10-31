import React, { useState, createContext, useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';
import { processOrder, removeFromDatabaseCart } from '../../utilits/databseManager';
import { Redirect, Route } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);


const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);

export const PrivateForPlaceOrder = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
            auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}



const Auth = () => {
    const [user, setUser] = useState(null)

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const [acSuccessful, setAcSuccessful] = useState(false)

    const getUser = user => {
        const { displayName, email, photoURL } = user;
        return { name: displayName, email, photo: photoURL, isSignedIn: true }
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currentUser = getUser(usr)
                setUser(currentUser)
            } else {

            }
        })
    }, [])

    const createAccountWithPassword = (name, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name,
                    photoURL: 'https://www.w3schools.com/w3images/avatar2.png'
                }).then(() => {
                    setUser(res.user)
                    setError(false)
                    setAcSuccessful(true)
                    window.history.back()
                });
            })
            .catch(err => {
                setUser(null)
                setError(true)
                setAcSuccessful(false)
                setErrorMessage(err.message)
            })
    }

    const signInWithPassword = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user)
                setError(false)
                setAcSuccessful(true)
                window.history.back()
            })
            .catch(err => {
                setUser(null)
                setError(true)
                setAcSuccessful(false)
                setErrorMessage(err.message)
            })
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                setUser(res.user)
                setError(false)
                setAcSuccessful(true)
                window.history.back()
            }).catch(err => {
                setUser(err.user)
                setError(true)
                setAcSuccessful(false)
                setErrorMessage(err.message)
            });
    }

    const signOut = () => {
        firebase.auth().signOut()
            .then(res => {
                setUser(null)
            })
            .catch(err => {
                alert('sign Out Error')
            })
    }

    const [cartItem, setCartItem] = useState([])

    const removeFromCart = (key) => {
        const removeCart = cartItem.filter(pd => pd.id !== key)
        setCartItem(removeCart)
        removeFromDatabaseCart(key)
    }

    const cOrder = () => {
        processOrder()
    }

    // const [searchData, setSearchData] = useState([])

    return {
        user,
        error,
        acSuccessful,
        errorMessage,
        cartItem,
        createAccountWithPassword,
        signInWithPassword,
        signInWithGoogle,
        signOut,
        setCartItem,
        removeFromCart,
        cOrder
    };
}
export default Auth;