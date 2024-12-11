
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {


    const [user, setuser] = useState(null);
    const [loder, setloder] = useState(true);


    //sing up with email and password


    const singUp = (email, password) => {
        setloder(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    //Log in

    const singIn = (email, password) => {
        setloder(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //ovgerver

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, crrentUser => {
            setuser(crrentUser);
            console.log(crrentUser);


            setloder(false)
        })
        return () => {
            unSubscriber();
        }
    }, [])



    const authInfo = {
        user,
        setuser,
        loder,
        setloder,
        singUp,
        singIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider; 