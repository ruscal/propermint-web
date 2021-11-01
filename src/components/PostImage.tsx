import { getSrc, getSrcSet } from '../utilities/getSrcSet';

export interface PostImageProps {
    imageId: string;
}

export const PostImage = ({ imageId }) => (
    <img
        className="object-cover w-full"
        src={getSrc(imageId)}
        srcSet={getSrcSet(imageId)}
    />
);
