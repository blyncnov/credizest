import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="login__container">
        <div className="login__box">
          <div className="login__information">
            <h3>Credizest Login</h3>
            <p>Please enter your username and password to login.</p>
          </div>
          <div className="login__form">
            <form>
              <div className="login__input">
                <label htmlFor="fname">Username :</label>
                <br />
                <input
                  type="text"
                  defaultValue="bholuwatife00@gmail.com"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="login__input">
                <label htmlFor="fname">Password :</label>
                <br />
                <input
                  type="password"
                  name="password"
                  defaultValue="hjggfgfgnnjkghn"
                  placeholder="Password"
                />
              </div>
              <div className="login__input">
                <button>Login</button>
              </div>
            </form>
            <div className="login__check">
              <Link href="/auth/reset">
                <a style={{ color: "inherit" }}>Forgot Password</a>
              </Link>
              <Link href="/auth/signup">
                <a style={{ color: "inherit" }}>Register</a>
              </Link>
            </div>
            <div className="login__option">
              <button className="btn-facebook">Login with Facebook</button>
              <button className="btn-google">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
