import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { postsByUser } from '../graphql';
import { PostCard } from '../components/PostCard';
import { PostsList } from '../components/PostsList';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { ChannelPageProps } from '../types';
import { getChannelProps } from '../utilities/getChannelProps';

function MyPosts({ channelId }: ChannelPageProps) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
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

    return (
        <PostsList>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    canEdit={true}
                    onDeleted={fetchPosts}
                />
            ))}
        </PostsList>
    );
}

export function getServerSideProps(
    context: NextPageContext
): GetServerSidePropsResult<ChannelPageProps> {
    return {
        props: getChannelProps(context)
    };
}

export default MyPosts;
