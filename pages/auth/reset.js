import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="login__container">
        <div className="login__box">
          <div className="login__information">
            <h3>Forgot Password</h3>
            <p>Please enter your valid email to reset your password</p>
          </div>
          <div className="login__form">
            <form>
              <div className="login__input"></div>
              <div className="login__input">
                <label htmlFor="fname">Email Address :</label>
                <br />
                <input
                  type="text"
                  name="password"
                  placeholder="Email address"
                />
              </div>
              <div className="login__input">
                <button>Reset Account</button>
              </div>
            </form>
            <div className="login__check">
              <Link href="/auth/login">
                <a style={{ color: "inherit" }}>Sign in</a>
              </Link>
              <Link href="/auth/signup">
                <a style={{ color: "inherit" }}>Register</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
