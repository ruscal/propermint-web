import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { API } from 'aws-amplify';
import { Post } from '../types';
import { deletePost as deletePostMutation } from '../graphql';
import { getFullImagePath } from '../utilities/getFullImagePath';
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
        <Link key={post.id} href={`/posts/${post.id}`}>
            <div>
                {post.imagePath && (
                    <PostImage imagePath={`${post.id}/sm.jpg`} />
                )}
                {post.content && <ReactMarkdown>{post.content}</ReactMarkdown>}
                {canEdit && (
                    <>
                        <Link href={`/edit-post/${post.id}`}>
                            <a style={linkStyle}>Edit Post</a>
                        </Link>
                        <Link href={`/posts/${post.id}`}>
                            <a style={linkStyle}>View Post</a>
                        </Link>
                        <button
                            style={buttonStyle}
                            onClick={() => deletePost(post.id)}
                        >
                            Delete Post
                        </button>
                    </>
                )}
            </div>
        </Link>
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
