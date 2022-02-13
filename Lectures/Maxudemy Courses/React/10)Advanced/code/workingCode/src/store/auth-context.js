import React,{useState, useEffect} from 'react';

/**
 * @This is object that contains components. will be used get provider and consumer.
 * variable defined in default value of context will be used by IDE to give autocomplete suggestions
 */
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

      /**
   * @Desc here there are no dependencies, hence no dependency has changed, so this callback passed to useEffect is ran only 
   * once, i.e when app is bootstraped. in starting this function runs, which updates the state, which runs component again,
   * in second time callback passed to useEffect does not execute
   */
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    const loginHandler = (email,password) => {
        localStorage.setItem('isLoggedIn', '1')   ;
        setIsLoggedIn(true);
    }
    return (
        <AuthContext.Provider value = {
            {
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }
            
        }>
            {props.children}
        </AuthContext.Provider>
    );
}


export default AuthContext;