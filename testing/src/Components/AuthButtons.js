import React from "react";

function AuthButtons({ setRedirectToSignin }) {
  return (
    <div className="auth-buttons">
      <button onClick={() => setRedirectToSignin(true)}>Sign In</button>
      <button onClick={() => setRedirectToSignin(false)}>Sign Up</button>
    </div>
  );
}

export default AuthButtons;
