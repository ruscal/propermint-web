import { getFullImagePath } from '../utilities/getFullImagePath';

export interface PostImageProps {
    imagePath: string;
}

export const PostImage = ({ imagePath }) => (
    <img
        className="object-cover h-48 w-full"
        src={getFullImagePath(imagePath)}
    />
);
