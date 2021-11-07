import Auth from '@aws-amplify/auth';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import React, { FunctionComponent } from 'react';

export interface ProfileProps {
    username: string;
    email: string;
}

export const ProfileSection: FunctionComponent<ProfileProps> = ({
    username,
    email
}) => {
    const handleSignOut = () => {
        Auth.signOut().then(() => window.location.reload());
    };

    return (
        <div className="mb-4">
            <h2>My profile</h2>
            <div className="profile--content flex flex-col sm:flex-row">
                <div className="profile--details flex-none">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <span className="font-bold">Username</span>
                        <span>{username}</span>
                        <span className="font-bold">Email</span>
                        <span>{email}</span>
                    </div>
                </div>
                <div className="profile--actions flex-1 text-right">
                    <button className="btn btn-primary" onClick={handleSignOut}>
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
};
