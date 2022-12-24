import sharp from 'sharp';

/** 
 * The parameters for the resizeImage function
*/
interface ImageParameters {
    width: number;
    height: number;
    originalImagePath: string;
    resizedImagePath: string;
}

/**
 * 
 * @param width               The width of the resized image
 * @param height              The height of the resized image
 * @param originalImagePath   The path of the original image
 * @param resizedImagePath    The path of the resized image
 * @returns                   A promise that resolves to void 
 */
const resizeImage = async ({ width, height, originalImagePath, resizedImagePath}: ImageParameters): Promise<void> => {

    await sharp(originalImagePath)
    .resize(width, height)
    .toFile(resizedImagePath)
    .catch((err) => {
        console.error(err);
    });
};

export default resizeImage