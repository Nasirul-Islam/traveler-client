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
    const [isloding, setIsloding] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloding(false)
        });
    }, [])

    const handlegooglelogin = () => {
        setIsloding(true);
        return signInWithPopup(auth, googleprovider)
    }

    const handlelogOut = () => {
        setIsloding(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .finally(() => setIsloding(false))
    }
    return {
        user,
        errorMessage,
        handlegooglelogin,
        handlelogOut,
        isloding,
        setIsloding
    }
}

export default useFirebase;