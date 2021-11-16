import { PostStatus } from '../types';
import {
    getPlaceholderImagePath,
    getSrc,
    getSrcSet
} from '../utilities/getSrcSet';

export interface PostImageProps {
    channelId: string;
    imageId: string;
    status: PostStatus;
}

export const PostImage = ({ channelId, imageId, status }) => {
    if (status !== PostStatus.Live) {
        return <img src={getPlaceholderImagePath()} />;
    }

    return (
        <img
            className="object-cover w-full"
            src={getSrc(channelId, imageId)}
            srcSet={getSrcSet(channelId, imageId)}
        />
    );
};
