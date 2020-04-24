import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

// location is coming from gatsby
const Dashboard = ({ location }) => {

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true} );
    }
    
    // Run it only once
  }, []);

  return (
    <Layout>
      <Profile />
      {/* Reach Router */}
      <Router>
        <RouteBase path="/dashboard/base"/>
        <RouteSecret path="/dashboard/secret"/>
        <RouteLogin path="/dashboard/login"/>
      </Router>

    </Layout>
  )
}

export default Dashboard;