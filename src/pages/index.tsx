import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listPosts } from '../graphql';
import { PostCard } from '../components/PostCard';
import { PostsList } from '../components/PostsList';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { ChannelPageProps } from '../types';
import { getChannelProps } from '../utilities/getChannelProps';

function Home({ channelId }: ChannelPageProps) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);
    async function fetchPosts() {
        const postData: any = await API.graphql({
            query: listPosts,
            authMode: 'AMAZON_COGNITO_USER_POOLS',
            variables: {
                channelId
            }
        });
        console.log('postData: ', postData);
        setPosts(postData.data.listPosts);
    }
    return (
        <PostsList>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
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

export default Home;
