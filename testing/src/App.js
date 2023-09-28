import React, { useState } from "react";
import Signin from "./Components/signin";
import Signup from "./Components/Signup";
import AuthButtons from "./Components/AuthButtons";
import "./style.css";

function App() {
  const [redirectToSignin, setRedirectToSignin] = useState(true);

  return (
    <div>
      {redirectToSignin ? (
        <Signin />
      ) : (
        <Signup />
      )}
      <AuthButtons setRedirectToSignin={setRedirectToSignin} />
    </div>
  );
}

export default App;
