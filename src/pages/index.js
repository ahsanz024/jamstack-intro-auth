import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h1>blah</h1>
      <p>Log in</p>
      <Link to="/dashboard">Goto the dashboard</Link>
    </Layout>
  )
}