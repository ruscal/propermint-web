import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import { getPostById } from '../../../graphql';
import React from 'react';
import { PostImage } from '../../../components/PostImage';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import { ChannelPageProps, Post } from '../../../types';
import { getChannelProps } from '../../../utilities/getChannelProps';

interface ViewPostProps extends ChannelPageProps {
    post: Post;
}

export function ViewPost({ post }) {
    console.log('post: ', post);
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <PostImage channelId={post.channelId} imageId={post.postId} />
            {/* <div style={markdownStyle}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div> */}
            <p>Created by: {post.author}</p>
        </div>
    );
}

export async function getServerSideProps(
    context: NextPageContext
): Promise<GetServerSidePropsResult<ViewPostProps>> {
    const channelProps = getChannelProps(context);
    const {
        data: { getPostById: post }
    } = (await API.graphql({
        query: getPostById,
        variables: { postId: context.query.postId }
    })) as any;

    return {
        props: {
            ...channelProps,
            post
        }
    };
}

export default ViewPost;
