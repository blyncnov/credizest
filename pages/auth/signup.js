import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div className="login__container">
        <div className="login__box">
          <div className="login__information">
            <h3>Credizest New Account</h3>
            <p>Fill in the below information</p>
          </div>
          <div className="login__form">
            <form>
              <div className="login__input">
                <label htmlFor="fname">Username :</label>
                <br />
                <input type="text" name="username" placeholder="blyncnov" />
              </div>
              <div className="login__input">
                <label htmlFor="fname">Role :</label>
                <br />
                <input type="text" name="role" placeholder="Web developer" />
              </div>
              <div className="login__input">
                <label htmlFor="fname">Email Address :</label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="bholuwatife00@gmail.com"
                />
              </div>
              <div className="login__input">
                <label htmlFor="fname">Password :</label>
                <br />
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="login__input">
                <button>Create Account</button>
              </div>
            </form>
            <div className="login__check">
              <Link href="/auth/reset">
                <a style={{ color: "inherit" }}>Forgot Password</a>
              </Link>
              <Link href="/auth/login">
                <a style={{ color: "inherit" }}>Sign in</a>
              </Link>
            </div>
            <div className="login__option">
              <button className="btn-facebook">Sign up with Facebook</button>
              <button className="btn-google">Sign up with Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
