import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Router } from "@reach/router";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
import Profile from "../components/profile";
import PrivateRoute from "../components/private-route";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";

import "react-netlify-identity-widget/styles.css";

// location is coming from gatsby
const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);

  const showModal = () => setVisibility(true);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }

    // Run it only once
  }, []);

  return (
    <Layout>
      <Profile showModal={showModal} />
      {/* Reach Router */}
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default Dashboard;
