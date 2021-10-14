import { useState, useEffect } from 'react';
import Navbar from './components/nav/navbar';

function App() {
  const [isAuth, setIsAuth] = useState(true);

  return <Navbar isAuth={isAuth} />;
}

export default App;
