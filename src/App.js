import { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router';

import Navbar from './components/nav/navbar';
import LoginPage from './pages/loginPage/loginPage';
import MainPage from './pages/mainPage/mainPage';
import PostPage from './pages/postPage/postPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [loggingIn, setLoggingin] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiry');
    if (!token) {
      setLoading(false);
      return;
    } else if (expiryDate < Date.now()) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiry');
      setLoading(false);
      return;
    } else {
      setIsAuth(true);
      setLoading(false);
    }
  }, []);

  const login = async (values) => {
    setLoggingin(true);
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
      setLoggingin(false);
      return;
    } else {
      setIsAuth(true);
      localStorage.setItem('token', data.token);
      const expiry = Date.now() + 7200000;
      localStorage.setItem('expiry', expiry);
      setLoggingin(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
    setIsAuth(false);
    history.push('/');
  };

  if (loading) {
    return (
      <>
        <Navbar isAuth={isAuth} logout={logout} />
      </>
    );
  } else if (!isAuth) {
    return (
      <>
        <Navbar isAuth={isAuth} logout={logout} />
        <LoginPage login={login} error={loginError} loggingIn={loggingIn} />
      </>
    );
  } else {
    return (
      <>
        <Navbar isAuth={isAuth} logout={logout} />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
      </>
    );
  }
}

export default App;
