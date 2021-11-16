import { CDN_BASE, CDN_IMAGES_PATH } from '../constants';

const imageSizes = [240, 320, 480, 640, 750, 1080];

export function getSrcSet(channelId: string, postId: string) {
    return imageSizes
        .map(
            (width) =>
                `${getBreakpointImagePath(channelId, postId, width)} ${width}w`
        )
        .join(',');
}

export function getSrc(channelId: string, postId: string) {
    return getBreakpointImagePath(channelId, postId, imageSizes[0]);
}

export function getBreakpointImagePath(
    channelId: string,
    postId: string,
    size: number
) {
    return `${CDN_BASE}${CDN_IMAGES_PATH}${channelId}/${postId}/${size}.jpg`;
}

export function getPlaceholderImagePath() {
    return `${CDN_BASE}${CDN_IMAGES_PATH}placeholder.jpg`;
}
