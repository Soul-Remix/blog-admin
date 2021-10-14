import { useState, useEffect } from 'react';
import { Route } from 'react-router';

import Navbar from './components/nav/navbar';
import LoginPage from './pages/loginPage/loginPage';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiry');
    if (!token) {
      return;
    } else if (expiryDate < Date.now()) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiry');
      return;
    } else {
      setIsAuth(true);
    }
  }, []);

  const login = async (values) => {
    const res = await fetch(
      'https://guarded-bayou-18266.herokuapp.com/api/v1/auth/login',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      }
    );
    const data = await res.json();
    if (res.status !== 200) {
      setLoginError(data.message);
      return;
    } else {
      setIsAuth(true);
      localStorage.setItem('token', data.token);
      const expiry = Date.now() + 7200000;
      localStorage.setItem('expiry', expiry);
    }
  };

  return (
    <Route>
      <Navbar isAuth={isAuth} />
      {!isAuth && <LoginPage login={login} error={loginError} />}
      {isAuth && <p>hello</p>}
    </Route>
  );
}

export default App;
