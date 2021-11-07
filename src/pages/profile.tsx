import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, Auth } from 'aws-amplify';
import { PostCard } from '../components/PostCard';
import { PostsList } from '../components/PostsList';
import { ChannelPageProps } from '../types';
import { postsByUser } from '../graphql';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { getChannelProps } from '../utilities/getChannelProps';
import { ProfileSection } from '../components/ProfileSection';

function Profile({ channelId }: ChannelPageProps) {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        checkUser();
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const postData: any = await API.graphql({
            query: postsByUser,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
            variables: {
                channelId
            }
        });
        setPosts(postData.data.postsByUsername);
    }

    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
    }
    if (!user) return null;
    return (
        <div>
            <ProfileSection
                username={user.username}
                email={user.attributes.email}
            />
            <PostsList>
                <h2>My posts</h2>
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        canEdit={true}
                        onDeleted={fetchPosts}
                    />
                ))}
            </PostsList>
        </div>
    );
}

export function getServerSideProps(
    context: NextPageContext
): GetServerSidePropsResult<ChannelPageProps> {
    return {
        props: getChannelProps(context)
    };
}

export default withAuthenticator(Profile);
