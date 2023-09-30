import React from "react";

function AuthButtons({ setRedirectToSignin }) {
  return (
    <div className="auth-buttons">
      <button onClick={() => setRedirectToSignin(true)}>Signin button</button>
      <button onClick={() => setRedirectToSignin(false)}>Signup button</button>
    </div>
  );
}

export default AuthButtons;
