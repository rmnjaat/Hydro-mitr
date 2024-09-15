import React, { useState, useEffect, createContext, useContext } from "react";
import {
  loginUser,
  signUpUser,
  checkAuthStatus,
  logoutUser,
} from "./HandleApi";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const data = await checkAuthStatus();

      if (data) {
        setUser({
          email: data.email,
          firstName: data.name,
          lastName: data.lastName,
        });
        setIsLoggedIn(true);
      }
    };

    checkStatus();
  }, []);


  const login = async (email, password ,selectedRole) => {
    const data = await loginUser(email, password ,selectedRole);
    if (data) {
      console.log(data);
      setUser({
        email: data.email,
        firstName: data.name,
        lastName: data.lastName,
      });
      setIsLoggedIn(true);
    }
    return data;
  };

  const signup = async ({
    org_name,
    name,
    lastName,
    phoneNumber,
    email,
    password,
    state,
    city,
    pincode,
    landmark,
    selectedRole
  }) => {
    const data = await signUpUser(
      org_name,
      name,
      lastName,
      phoneNumber,
      email,
      password,
      state,
      city,
      pincode,
      landmark,
      selectedRole
    );

    console.log(
      "In Auth page :",
      email,
      password,
      org_name,
      name,
      lastName,
      phoneNumber,
      landmark,
      city,
      state,
      pincode
    );

    if (data) {
       setUser({
        email: data.email,
        firstName: data.name,
        lastName: data.lastName,
      });
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    const logout = await logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };