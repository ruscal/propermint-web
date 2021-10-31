import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { postsByUsername } from '../graphql';
import { PostCard } from '../components/PostCard';
import { PostsList } from '../components/PostsList';

export default function MyPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);
    async function fetchPosts() {
        const postData: any = await API.graphql({
            query: postsByUsername,
            authMode: 'AMAZON_COGNITO_USER_POOLS'
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

const linkStyle = { fontSize: 14, marginRight: 10 };
const itemStyle = {
    borderBottom: '1px solid rgba(0, 0, 0 ,.1)',
    padding: '20px 0px'
};
const authorStyle = { color: 'rgba(0, 0, 0, .55)', fontWeight: 600 };
