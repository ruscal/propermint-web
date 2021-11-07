import React, { FunctionComponent } from 'react';
import {
    HomeIcon,
    PlusCircleIcon,
    UserCircleIcon
} from '@heroicons/react/outline';
import Link from 'next/link';

export interface NavbarProps {
    isSignedIn: boolean;
}

export const Navbar: FunctionComponent<NavbarProps> = ({ isSignedIn }) => (
    <nav className="sticky top-0 z-50 bg-white flex p-4">
        <div className="flex flex-row w-full">
            <div className="flex flex-row space-x-2">
                <Link href="/">
                    <a title="Home">
                        <HomeIcon className="h-8 w-8" />
                    </a>
                </Link>
                {isSignedIn && (
                    <Link href="/create-post">
                        <a title="Add memory">
                            <PlusCircleIcon className="h-8 w-8" />
                        </a>
                    </Link>
                )}
            </div>
            <div className="flex-grow flex flex-row justify-end space-x-2">
                <Link href="/profile">
                    <a title="Profile">
                        <UserCircleIcon className="h-8 w-8" />
                    </a>
                </Link>
            </div>
        </div>
    </nav>
);
