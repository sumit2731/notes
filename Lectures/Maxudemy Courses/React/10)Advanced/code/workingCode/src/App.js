import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext,{AuthContextProvider} from './store/auth-context';

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * @Desc here there are no dependencies, hence no dependency has changed, so this callback passed to useEffect is ran only 
   * once, i.e when app is bootstraped. in starting this function runs, which updates the state, which runs component again,
   * in second time callback passed to useEffect does not execute
   */
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  //   if(storedUserLoggedInInformation === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      
        
          
          <MainHeader />
          <main>
            {!ctx.isLoggedIn && <Login  />}
            {ctx.isLoggedIn && <Home  />}
          </main>
    
    </React.Fragment>
  );
}

export default App;
