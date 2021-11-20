import React, { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import { listPosts } from '../graphql';
import { PostCard } from '../components/PostCard';
import { PostsList } from '../components/PostsList';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { ChannelPageProps } from '../types';
import { getChannelProps } from '../utilities/getChannelProps';

interface HomeProps extends ChannelPageProps {
    username?: string;
}

function Home({ channelId, username }: HomeProps) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);
    async function fetchPosts() {
        const postData: any = await API.graphql({
            query: listPosts,
            authMode: username ? 'AMAZON_COGNITO_USER_POOLS' : undefined,
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

export async function getServerSideProps(
    context: NextPageContext
): Promise<GetServerSidePropsResult<HomeProps>> {
    const props = getChannelProps(context) as HomeProps;
    try {
        const user = await Auth.currentAuthenticatedUser();
        props.username = user.username;
    } catch (ex) {}
    return {
        props
    };
}

export default Home;
