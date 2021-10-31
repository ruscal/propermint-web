import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listPosts } from '../graphql';
import { PostCard } from '../components/PostCard';
import { PostsList } from '../components/PostsList';

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);
    async function fetchPosts() {
        const postData: any = await API.graphql({
            query: listPosts
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
