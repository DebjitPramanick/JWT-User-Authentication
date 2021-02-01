import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
      <div>
        <Link to="/register"> Register </Link>
        <Link to="/signin"> Sign In </Link>
      </div>
    );
}

export default Dashboard
