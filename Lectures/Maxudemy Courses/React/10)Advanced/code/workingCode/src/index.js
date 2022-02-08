import React from 'react';
import ReactDOM from 'react-dom';

import { AuthContextProvider } from './store/auth-context';

import './index.css';
import App from './App';

ReactDOM.render(
    <AuthContextProvider>
        <App></App>
    </AuthContextProvider>, 
    document.getElementById('root'));
