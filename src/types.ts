export enum PostStatus {
    Processing = 'processing',
    Live = 'live',
    Suppressed = 'suppressed'
}

export interface Post {
    postId: string;
    title: string;
    content: string;
    imagePath: string;
    author: string;
    channelId: string;
    status: PostStatus;
}

export interface NewPost {
    postId: Post['postId'];
    title: Post['title'];
    content: Post['content'];
    imagePath: Post['imagePath'];
    channelId: Post['channelId'];
}

export interface ChannelPageProps {
    channelId: string;
}
