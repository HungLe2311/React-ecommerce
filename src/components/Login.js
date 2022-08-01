import { useContext, useState } from "react";
import {Navigate} from "react-router-dom"
import AppContext from "../AppContext";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let {isLogged, setIsLogged} = useContext(AppContext);

  let submitForm = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("token", json.token);
          localStorage.setItem("email", email);
          setIsLogged(true)
        } else {
            alert('Wrong email or password')
        }
      });
  };

  return (
    <section id="form">
      {isLogged && <Navigate to="/" replace={true} />}
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-1">
            <div className="login-form">
              <h2>Login to your account</h2>
              <form action="" onSubmit={submitForm}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>
                  <input type="checkbox" className="checkbox" />
                  Keep me signed in
                </span>
                <button type="submit" className="btn btn-default">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-1">
            <h2 className="or">OR</h2>
          </div>
          <div className="col-sm-4">
            <div className="signup-form">
              <h2>New User Signup!</h2>
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn btn-default">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
