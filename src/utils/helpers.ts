import fs from 'fs';

const checkFileExtension = (extname: string): void => {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    if (!validExtensions.includes(extname)) {
        throw new Error('Invalid file extension');
    }
}

const checkDir = (dirPath: string): Boolean => {
    const folderExists = fs.existsSync(dirPath);
    if (folderExists === false) {
        return false;
    }
    return true;
}

const createDir = (dirPath: string): void => {
    try {
        fs.mkdirSync(dirPath);
    } catch (err) {
        console.error(err);
    }
}

const imageValidator = (filename: string, width: number, height: number): void => {
    if (!filename || !width || !height) {
        throw new Error('please make sure that you entered all the parameters');
    }
    if (isNaN(width) || isNaN(height)) {
        throw new Error('please make sure that you entered valid width and height');
    }
}

export default checkFileExtension;
export { checkDir, createDir, imageValidator };