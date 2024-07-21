
import Sidebar from './sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import Login from './login/login';
import { useState } from 'react';

function Layout() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    // Set isLoggedIn to true when the login is successful
    setLoggedIn(true);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <Sidebar />
          <Outlet />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  )
}

export default Layout