export const getPostById = /* GraphQL */ `
    query getPostById($postId: ID!) {
        getPostById(postId: $postId) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`;

export const listPosts = /* GraphQL */ `
    query ListPosts($channelId: ID!) {
        listPosts(channelId: $channelId) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`;

export const postsByUser = /* GraphQL */ `
    query PostsByUsername($channelId: ID!) {
        postsByUsername(channelId: $channelId) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`;

export const createPost = /* GraphQL */ `
    mutation CreatePost($post: PostInput!) {
        createPost(post: $post) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`;

export const updatePost = /* GraphQL */ `
    mutation UpdatePost($post: UpdatePostInput!) {
        updatePost(post: $post) {
            postId
            title
            content
            imagePath
            author
            channelId
            status
        }
    }
`;

export const deletePost = /* GraphQL */ `
    mutation DeletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`;
