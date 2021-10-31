import { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import '../configureAmplify';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
    const [signedInUser, setSignedInUser] = useState(false);

    useEffect(() => {
        authListener();
    });

    async function authListener() {
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    return setSignedInUser(true);
                case 'signOut':
                    return setSignedInUser(false);
            }
        });
        try {
            await Auth.currentAuthenticatedUser();
            setSignedInUser(true);
        } catch (err) {}
    }

    return (
        <div>
            <nav style={navStyle}>
                <Link href="/">
                    <span style={linkStyle}>Home</span>
                </Link>
                <Link href="/create-post">
                    <span style={linkStyle}>Create Post</span>
                </Link>
                <Link href="/profile">
                    <span style={linkStyle}>Profile</span>
                </Link>
                {signedInUser && (
                    <Link href="/my-posts">
                        <span style={linkStyle}>My Posts</span>
                    </Link>
                )}
            </nav>
            <div className="container mx-auto px-4">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

const navStyle = { padding: 20, borderBottom: '1px solid #ddd' };
const linkStyle = { marginRight: 20, cursor: 'pointer' };

export default MyApp;
