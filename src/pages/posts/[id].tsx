import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import '../../configureAmplify';
import ReactMarkdown from 'react-markdown';
import { listPosts, getPostById } from '../../graphql';
import React from 'react';
import { PostImage } from '../../components/PostImage';

export default function Post({ post }) {
    console.log('post: ', post);
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <PostImage imageId={post.id} />
            {/* <div style={markdownStyle}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div> */}
            <p>Created by: {post.owner}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const postData: any = await API.graphql({ query: listPosts });
    const paths = postData.data.listPosts.map((post) => ({
        params: { id: post.id }
    }));
    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const postData: any = await API.graphql({
        query: getPostById,
        variables: { postId: id }
    });
    return {
        props: {
            post: postData.data.getPostById
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 100 // adds Incremental Static Generation, sets time in seconds
    };
}

const markdownStyle = {
    padding: 20,
    border: '1px solid #ddd',
    borderRadius: 5
};
