import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


 
export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update user
    const updateUser = (firstName, photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: firstName, photoURL: photo
        })
    }
    // google login
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // log OUT user
    const logOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }


    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        updateUser,
        googleLogin,
        logOutUser,

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;