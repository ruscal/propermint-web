import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import 'easymde/dist/easymde.min.css';
import { updatePost } from '../../../graphql';
import { getPostById } from '../../../graphql';
import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false
});

function EditPost() {
    const [post, setPost] = useState(null);
    const router = useRouter();
    const { postId } = router.query;

    useEffect(() => {
        fetchPost();
        async function fetchPost() {
            if (!postId) return;
            const postData: any = await API.graphql({
                query: getPostById,
                variables: { postId }
            });
            setPost(postData.data.getPostById);
        }
    }, [postId]);
    if (!post) return null;
    function onChange(e) {
        setPost(() => ({ ...post, [e.target.name]: e.target.value }));
    }
    const { title, content } = post;
    async function updateCurrentPost() {
        if (!title || !content) return;
        await API.graphql({
            query: updatePost,
            variables: { post: { title, content, postId } },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        console.log('post successfully updated!');
        router.push('/my-posts');
    }

    if (!SimpleMDE) {
        return null;
    }

    return (
        <div style={containerStyle}>
            <h2>Edit Post</h2>
            <input
                onChange={onChange}
                name="title"
                placeholder="Title"
                value={post.title}
                style={inputStyle}
            />
            <input
                onChange={onChange}
                name="imagePath"
                placeholder="Image url"
                value={post.imagePath}
                style={inputStyle}
            />
            <SimpleMDE
                value={post.content}
                onChange={(value) => setPost({ ...post, content: value })}
            />
            <button style={buttonStyle} onClick={updateCurrentPost}>
                Update Post
            </button>
        </div>
    );
}

const inputStyle = {
    marginBottom: 10,
    height: 35,
    width: 300,
    padding: 8,
    fontSize: 16
};
const containerStyle = { padding: '0px 40px' };
const buttonStyle = {
    width: 300,
    backgroundColor: 'white',
    border: '1px solid',
    height: 35,
    marginBottom: 20,
    cursor: 'pointer'
};

export default EditPost;
