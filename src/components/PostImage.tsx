import { getSrc, getSrcSet } from '../utilities/getSrcSet';

export interface PostImageProps {
    channelId: string;
    imageId: string;
}

export const PostImage = ({ channelId, imageId }) => (
    <img
        className="object-cover w-full"
        src={getSrc(channelId, imageId)}
        srcSet={getSrcSet(channelId, imageId)}
    />
);
