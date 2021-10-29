import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

initializeFirebase();

const auth = getAuth();
const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, seterrorMessage] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [])

    const handlegooglelogin = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                seterrorMessage(error.message);
            })
    }

    const handlelogOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }
    return {
        user,
        errorMessage,
        handlegooglelogin,
        handlelogOut
    }
}

export default useFirebase;