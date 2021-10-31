import { CDN_BASE, CDN_IMAGES_PATH } from '../constants';

export function getFullImagePath(imagePath: string) {
    return `${CDN_BASE}${CDN_IMAGES_PATH}${imagePath}`;
}
