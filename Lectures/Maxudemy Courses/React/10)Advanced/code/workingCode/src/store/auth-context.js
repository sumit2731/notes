import React from 'react';

/**
 * @This is object that contains components. will be used get provider and consumer.
 * variable defined in default value of context will be used by IDE to give autocomplete suggestions
 */
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}
});


export default AuthContext;