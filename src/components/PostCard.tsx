import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { API } from 'aws-amplify';
import { Post, PostStatus } from '../types';
import { deletePost as deletePostMutation, getPostById } from '../graphql';
import { PostImage } from './PostImage';

export interface PostProps {
    post: Post;
    canEdit?: boolean;
    onDeleted?: () => void;
}

export const PostCard: FunctionComponent<PostProps> = ({
    post,
    canEdit = false,
    onDeleted
}) => {
    const postId = post.postId;
    const [status, setStatus] = useState(post.status);

    useEffect(() => {
        let cancelled = false;
        if (status === PostStatus.Processing) {
            const tick = (attempt = 1) =>
                setTimeout(async () => {
                    if (attempt > 5) {
                        return;
                    }

                    const {
                        data: { getPostById: updatedPost }
                    } = (await API.graphql({
                        query: getPostById,
                        variables: { postId }
                    })) as any;

                    if (!cancelled) {
                        if (updatedPost.status === PostStatus.Processing) {
                            tick(attempt + 1);
                        } else {
                            setStatus(updatedPost.status);
                        }
                    }
                }, 1000);
            tick();
        }
        return () => {
            cancelled = true;
        };
    }, [status]);

    async function deletePost(postId) {
        console.log('postId: ', postId);
        await API.graphql({
            query: deletePostMutation,
            variables: { postId },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        onDeleted();
    }

    return (
        <div className="post flex flex-col border border-gray-200 bg-white">
            <div className="post--header flex flex-col">
                <div className="post--header--title  px-2 py-1">
                    {post.title}
                </div>
                <div className="post--header--author text-sm text-gray-300 px-2 py-1 pt-0">
                    {post.author}
                </div>
            </div>
            <div className="post--content">
                {post.imagePath && (
                    <PostImage
                        channelId={post.channelId}
                        imageId={post.postId}
                        status={status}
                    />
                )}
                {post.content && <ReactMarkdown>{post.content}</ReactMarkdown>}
            </div>
            {canEdit && (
                <div>
                    {/* <Link href={`/posts/${post.postId}/edit`}>
                            <a style={linkStyle}>Edit Post</a>
                        </Link> */}
                    {/* <Link href={`/posts/${post.postId}`}>
                            <a style={linkStyle}>View Post</a>
                        </Link> */}
                    <button
                        style={buttonStyle}
                        onClick={() => deletePost(post.postId)}
                    >
                        Delete Post
                    </button>
                </div>
            )}
        </div>
    );
};

const linkStyle = {
    cursor: 'pointer',
    borderBottom: '1px solid rgba(0, 0, 0 ,.1)',
    padding: '20px 0px'
};
const authorStyle = { color: 'rgba(0, 0, 0, .55)', fontWeight: 600 };

const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: '#ddd',
    border: 'none',
    padding: '5px 20px'
};
