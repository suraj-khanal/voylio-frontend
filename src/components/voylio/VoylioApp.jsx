import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./../../css/Style.css";
import "./../../css/VoylioApp.css";

import LogoutComponent from "./LogoutComponent";
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginHistoryComponent from "./LoginHistoryComponent";
import ErrorComponent from "./ErrorComponent";

import AuthProvider, { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({children}){
  const authContext = useAuth()
  if(authContext.isAuthenticated)
      return children

  return <Navigate to="/" />
}

export default function VoylioApp() {
  return (
    <div className="VoylioApp">
      <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={
            <AuthenticatedRoute>
                  <WelcomeComponent /> 
            </AuthenticatedRoute>
          } />
          <Route path="/loginhistory" element={
            <AuthenticatedRoute>
                  <LoginHistoryComponent /> 
            </AuthenticatedRoute>
          } />
          <Route path="/logout" element={ 
            <AuthenticatedRoute>
                  <LogoutComponent />
            </AuthenticatedRoute> 
            } />

          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}






