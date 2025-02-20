import "./App.css";
import SignInView from "./views/SignInView.component";
import SignUpView from "./views/SignUpView.components";
import useAuthHook from "./hooks/useAuthHook";
import { useState } from "react";

function App() {
  const { logout, user, login, register } = useAuthHook();
  const [disply, setDisplay] = useState<boolean>(true);
  
  return (
    <>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="auth-container">
          <div className="toggle-btn-wrapper">
            <button
              className={`toggle-btn ${disply ? "active" : ""}`}
              onClick={() => setDisplay(true)}
            >
              Sign In
            </button>
            <button
              className={`toggle-btn ${!disply ? "active" : ""}`}
              onClick={() => setDisplay(false)}
            >
              Sign Up
            </button>
          </div>
          <div className="auth-content">
            {disply ? <SignInView login={login} /> : <SignUpView register={register} />}
          </div>
        </div>
      )}
    </>
  );
}

export default App;