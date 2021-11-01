import { withAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { API, Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import 'easymde/dist/easymde.min.css';
import { createPost } from '../graphql';
import dynamic from 'next/dynamic';
import { NewPost } from '../types';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false
});

const newPost = (): NewPost => ({
    id: uuid(),
    title: '',
    content: '',
    imagePath: ''
});

function CreatePost() {
    const [post, setPost] = useState(() => newPost());
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { title, content } = post;
    const router = useRouter();

    function onChange(e) {
        setPost(() => ({ ...post, [e.target.name]: e.target.value }));
    }

    function onFileChange(event) {
        const {
            target: { value, files }
        } = event;
        const fileForUpload = files[0];
        setFile(fileForUpload || value);
        const extension = fileForUpload.name.split('.')[1];
        const imagePath = `${post.id}/original.${extension}`;
        setPost(() => ({ ...post, imagePath }));
    }

    function isFormValid() {
        return title && file;
    }

    async function createNewPost() {
        if (!isFormValid()) {
            setError('Please complete all fields');
            return;
        }

        try {
            const { type: mimeType } = file;
            const key = `images/${post.imagePath}`;
            setSubmitting(true);
            await Storage.put(key, file, {
                contentType: mimeType
            });
            await API.graphql({
                query: createPost,
                variables: { post },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
            //router.push(`/posts/${post.id}`);
            setPost(newPost());
            router.push('/');
        } catch (err) {
            console.log('error: ', err);
            setSubmitting(false);
        }
    }

    if (!SimpleMDE) {
        return null;
    }

    if (submitting) {
        return <p>Submitting ...</p>;
    }

    return (
        <div className="grid grid-cols-1 gap-y-1">
            <h2>Add memory</h2>
            {error && <p>{error}</p>}
            <input
                onChange={onChange}
                name="title"
                placeholder="Title"
                value={post.title}
                type="text"
            />
            {/* <SimpleMDE
                value={post.content}
                onChange={(value) => setPost({ ...post, content: value })}
            /> */}
            <input type="file" onChange={onFileChange} />
            <button className="btn btn-primary" onClick={createNewPost}>
                Submit
            </button>
        </div>
    );
}

export default withAuthenticator(CreatePost);
