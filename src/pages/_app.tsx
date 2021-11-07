import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Auth, Hub } from 'aws-amplify';
import '../styles/globals.css';
import '../configureAmplify';

function MyApp({ Component, pageProps }) {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        authListener();
    });

    async function authListener() {
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    return setIsSignedIn(true);
                case 'signOut':
                    return setIsSignedIn(false);
            }
        });
        try {
            await Auth.currentAuthenticatedUser();
            setIsSignedIn(true);
        } catch (err) {}
    }

    return (
        <div>
            <Navbar isSignedIn={isSignedIn} />
            <div className="container mx-auto px-4">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
