import { CDN_BASE, CDN_IMAGES_PATH } from '../constants';

const imageSizes = [240, 320, 480, 640, 750, 1080];

export function getSrcSet(channelId: string, imageId: string) {
    return imageSizes
        .map((width) => `${getImagePath(channelId, imageId, width)} ${width}w`)
        .join(',');
}

export function getSrc(channelId: string, imageId: string) {
    return getImagePath(channelId, imageId, imageSizes[0]);
}

export function getImagePath(channelId: string, imageId: string, size: number) {
    return `${CDN_BASE}${CDN_IMAGES_PATH}${channelId}/${imageId}/${size}.jpg`;
}
