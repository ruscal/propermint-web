import { CDN_BASE, CDN_IMAGES_PATH } from '../constants';

const imageSizes = [240, 320, 480, 640, 750, 1080];

export function getSrcSet(imageId: string) {
    return imageSizes
        .map((width) => `${getImagePath(imageId, width)} ${width}w`)
        .join(',');
}

export function getSrc(imageId: string) {
    return getImagePath(imageId, imageSizes[0]);
}

export function getImagePath(imageId: string, size: number) {
    return `${CDN_BASE}${CDN_IMAGES_PATH}${imageId}/${size}.jpg`;
}
