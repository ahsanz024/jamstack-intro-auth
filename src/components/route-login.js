import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

const RouteLogin = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }

  return (
    <>
      <h1>Log in or Sign up</h1>
      <button onClick={showModal}>Log in</button>
    </>
  );
};

export default RouteLogin;
