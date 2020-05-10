import React, { Component } from "react";
import { navigate, replace } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

// component renamed to Component (via name: NewName)
// because React uses Capitalized names for components.
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  if (!isLoggedIn && location.pathname !== "/dashboard/login") {
    navigate("/dashboard/login", { replace: true });
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
