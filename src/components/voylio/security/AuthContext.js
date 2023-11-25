import { createContext, useContext, useState } from "react";
import { loginUser } from "../api/HelloWorldApiService";

//Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//Share the created context with other components
 export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [loginError, setLoginError] = useState(null);

    async function login(credentials) {
        try {
          const response = await loginUser(credentials);
    
          if (response.status === 200) {
            setAuthenticated(true);
            return true;

          } else {
            setLoginError("Invalid Username or Password");
            return false;
          }
        } catch (error) {
          setLoginError("Error during login");
          return false;
        }
      }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, loginError} } >
            {children}
        </AuthContext.Provider>
    )
}
