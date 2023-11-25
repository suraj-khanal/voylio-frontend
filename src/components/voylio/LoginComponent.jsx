import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import { useAuth } from "./security/AuthContext";
import {animateLoginForm} from "./animation/Animation"

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    animateLoginForm();
  },[]);

  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function showLoggedInToastMessage() {
     toast("Logged In Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      type: "success",
      theme: "colored",
    });
  }

  async function handleSubmitLogin(event) {
    event.preventDefault();

    try {
      const isAuthenticated = await authContext.login({username, password});

      if (isAuthenticated){
        navigate(`/welcome/${username}`);
        showLoggedInToastMessage();
      } else{
        setShowErrorMessage(true);
      }
    } catch (error) {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="login-page">
      <div className="form">
        {showErrorMessage && (
          <div className="errorMessage text-center">
            Authenticated Failed!! Please Check Credentials
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmitLogin}>
          <h2 className="text-center mb-4 fw-bold">Login To Voylio</h2>
          <hr />
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <button type="submit" name="login">
              Login
            </button>
          </div>
          <div>
            <p className="message">
              Not Yet Registered? &nbsp;
              <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
