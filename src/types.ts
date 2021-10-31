export interface Post {
    id: string;
    title: string;
    content: string;
    imagePath: string;
    owner;
}

export interface NewPost {
    id: Post['id'];
    title: Post['title'];
    content: Post['content'];
    imagePath: Post['imagePath'];
}
