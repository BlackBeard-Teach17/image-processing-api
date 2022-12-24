import sharp from 'sharp';

interface ImageParameters {
    width: number;
    height: number;
    originalImagePath: string;
    resizedImagePath: string;
}

const resizeImage = async ({ width, height, originalImagePath, resizedImagePath}: ImageParameters): Promise<void> => {

    await sharp(originalImagePath)
    .resize(width, height)
    .toFile(resizedImagePath)
    .catch((err) => {
        console.error(err);
    });
};

export default resizeImage