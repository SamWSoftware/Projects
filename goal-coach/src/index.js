import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in', user);
    } else {
        console.log('user is yet to sign in');
    }
})

ReactDOM.render(
    <Router path="/">
        <div>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </div>
    </Router>
    , document.getElementById('root')
)