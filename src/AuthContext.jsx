import React, { useState, useEffect, createContext, useContext } from "react";
import { loginUser, signUpUser, checkAuthStatus, logoutUser } from "./HandleApi";



const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const checkStatus = async () => {
            const data = await checkAuthStatus();

            if (data) {
                setUser({username: data.user.username, name: data.user.name});
                setIsLoggedIn(true);
            }

        }

        checkStatus();
    }, []);




    const login = async (username, password) => {
        const data = await loginUser(username, password);
        if (data) {
            setUser({ username: data.username, name: data.name });
            setIsLoggedIn(true);
        }
        return data;
    }



    const signup = async (username, password, email) => {
        const data = await signUpUser(username, email, password);
        if (data) {           
            setUser({ email: data.email, username: data.username });
            setIsLoggedIn(true);
        }
    }

    
    const logout = async () => {
        const logout = await logoutUser();
        setIsLoggedIn(false);
        setUser(null);
        setTimeout(()=>{
            window.location.reload();
        },100);
        
    }


    const value = {
        user,
        isLoggedIn,
        login,
        signup,
        logout
    }



    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}



const useAuth = () => useContext(AuthContext);
export  { AuthProvider, useAuth }